import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedDestinations from './components/FeaturedDestinations'
import HotelDetail from './pages/HotelDetail'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedDestinations />
            <Footer />
          </>
        } />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App