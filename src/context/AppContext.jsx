import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const fetchHotels = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/hotels`)
      if (data.success) setHotels(data.hotels)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchHotels()
  }, [])

  return (
    <AppContext.Provider value={{ hotels, loading, backendUrl }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)