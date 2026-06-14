const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🏨</span>
            <span className="font-bold text-xl">QuickStay</span>
          </div>
          <p className="text-gray-400 text-sm">
            Discover the world's most exceptional hotels and resorts.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Press</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <ul className="flex flex-col gap-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Twitter</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">Facebook</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
        © 2026 QuickStay. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer