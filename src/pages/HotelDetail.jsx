import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HotelDetail = () => {
  const { id } = useParams()
  const { backendUrl } = useAppContext()
  const { user, isSignedIn } = useUser()
  const navigate = useNavigate()
  const [hotel, setHotel] = useState(null)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchHotel = async () => {
      const { data } = await axios.get(`${backendUrl}/api/hotels/${id}`)
      if (data.success) setHotel(data.hotel)
    }
    fetchHotel()
  }, [id])

  const handleBooking = async () => {
    if (!isSignedIn) {
      alert('Please login to book!')
      return
    }
    if (!checkIn || !checkOut) {
      alert('Please select check in and check out dates!')
      return
    }

    const nights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    )
    const totalPrice = nights * hotel.pricePerNight

    try {
      setLoading(true)
      const { data } = await axios.post(`${backendUrl}/api/stripe/create-checkout`, {
        hotelId: hotel._id,
        userId: user.id,
        checkIn,
        checkOut,
        guests,
        totalPrice,
        hotelName: hotel.name
      })

      if (data.success) {
        window.location.href = data.url
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (!hotel) return <div className="text-center py-40 text-xl">Loading...</div>

  return (
    <div className="min-h-screen pt-20 px-16 py-10">
      <img src={hotel.images[0]} alt={hotel.name} className="w-full h-96 object-cover rounded-2xl mb-8" />

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{hotel.name}</h1>
          <p className="text-gray-500">📍 {hotel.address}, {hotel.city}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-gray-800">${hotel.pricePerNight}</span>
          <span className="text-gray-400">/night</span>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap">
        {hotel.amenities.map((a, i) => (
          <span key={i} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm">
            {a}
          </span>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 max-w-lg">
        <h2 className="text-xl font-bold mb-4">Book This Hotel</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-500">Check In</label>
            <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1 outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Check Out</label>
            <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
              className="w-full border rounded-lg p-2 mt-1 outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-500">Guests</label>
            <input type="number" value={guests} onChange={e => setGuests(e.target.value)}
              min="1" className="w-full border rounded-lg p-2 mt-1 outline-none" />
          </div>
          <button
            onClick={handleBooking}
            disabled={loading}
            className="bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 disabled:opacity-50">
            {loading ? 'Processing...' : 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail