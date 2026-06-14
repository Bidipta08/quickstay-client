const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-16 pt-20">
        <div className="mb-4">
          <span className="bg-blue-500/80 text-white text-sm px-4 py-1 rounded-full">
            The Ultimate Hotel Experience
          </span>
        </div>

        <h1 className="text-white text-6xl font-bold max-w-lg leading-tight mb-4">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="text-gray-200 max-w-md mb-10">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-4 max-w-3xl">
          <div className="flex items-center gap-2 flex-1">
            <span>📅</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Destination</span>
              <input
                type="text"
                placeholder="Type here"
                className="outline-none text-sm w-36"
              />
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-2 flex-1">
            <span>📅</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Check in</span>
              <input type="date" className="outline-none text-sm w-32" />
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-2 flex-1">
            <span>📅</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500">Check out</span>
              <input type="date" className="outline-none text-sm w-32" />
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Guests</span>
            <input
              type="number"
              placeholder="0"
              className="outline-none text-sm w-12"
            />
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800">
            🔍 Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero