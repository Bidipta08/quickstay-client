import { useUser } from '@clerk/clerk-react'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import axios from 'axios'

const MyBookings = () => {
  const { user, isSignedIn } = useUser()
  const { backendUrl } = useAppContext()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isSignedIn) {
      const fetchBookings = async () => {
        try {
          const { data } = await axios.get(`${backendUrl}/api/bookings/user/${user.id}`)
          if (data.success) setBookings(data.bookings)
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
      }
      fetchBookings()
    }
  }, [isSignedIn])

  if (!isSignedIn) return (
    <div className="min-h-screen pt-24 px-16 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Bookings</h1>
      <p className="text-gray-500">Please login to see your bookings.</p>
    </div>
  )

  if (loading) return (
    <div className="min-h-screen pt-24 px-16 text-center text-gray-500 text-xl">
      Loading bookings...
    </div>
  )

  return (
    <div className="min-h-screen pt-24 px-16 pb-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white rounded-2xl shadow-md p-6 flex gap-6 items-center">
              <img
                src={booking.hotel?.images[0]}
                alt={booking.hotel?.name}
                className="w-40 h-32 object-cover rounded-xl"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {booking.hotel?.name}
                </h2>
                <p className="text-gray-500 text-sm mb-2">
                  📍 {booking.hotel?.address}
                </p>
                <div className="flex gap-6 text-sm text-gray-600">
                  <span>📅 Check In: {new Date(booking.checkIn).toLocaleDateString()}</span>
                  <span>📅 Check Out: {new Date(booking.checkOut).toLocaleDateString()}</span>
                  <span>👥 Guests: {booking.guests}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-800 mb-2">
                  ${booking.totalPrice}
                </p>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  booking.isPaid
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-500'
                }`}>
                  {booking.isPaid ? '✅ Paid' : '⏳ Pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyBookings