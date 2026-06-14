import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const FeaturedDestinations = () => {
  const { hotels, loading } = useAppContext()
  const navigate = useNavigate()

  if (loading) return (
    <div className="text-center py-20 text-gray-500 text-xl">
      Loading hotels...
    </div>
  )

  return (
    <div className="py-20 px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Featured Destination
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover our handpicked selection of exceptional properties around
          the world, offering unparalleled luxury and unforgettable experiences.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {hotels.map((hotel) => (
          <div key={hotel._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              {hotel.isBestSeller && (
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full">
                  Best Seller
                </span>
              )}
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold text-gray-800">{hotel.name}</h3>
                <span className="flex items-center gap-1 text-orange-400 text-sm font-medium">
                  ⭐ {hotel.rating}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">📍 {hotel.address}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold">
                  ${hotel.pricePerNight}<span className="text-gray-400 font-normal text-sm">/night</span>
                </span>
                <button
                  onClick={() => navigate(`/hotel/${hotel._id}`)}
                  className="border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-sm hover:bg-gray-50 cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestinations