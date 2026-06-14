import { SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
        <div className="bg-white rounded-full p-1">
          <span className="text-xl">🏨</span>
        </div>
        <span className="text-white font-bold text-xl">QuickStay</span>
      </div>

      <div className="flex items-center gap-8">
        <span onClick={() => navigate('/')} className="text-white hover:text-gray-200 cursor-pointer">Home</span>
        <span onClick={() => navigate('/hotels')} className="text-white hover:text-gray-200 cursor-pointer">Hotels</span>
        <span className="text-white hover:text-gray-200 cursor-pointer">Experience</span>
        <span className="text-white hover:text-gray-200 cursor-pointer">About</span>
        {isSignedIn && (
          <span onClick={() => navigate('/my-bookings')} className="text-white hover:text-gray-200 cursor-pointer">
            My Bookings
          </span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white text-xl">🔍</button>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 cursor-pointer">
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  )
}

export default Navbar