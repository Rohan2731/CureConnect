import { Link } from "react-router-dom";
import {
  FaHome,
  FaStethoscope,
  FaPills,
  FaRobot,
  FaMapMarkerAlt,
  FaInfoCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          🏥 CureConnect
        </Link>

        <div className="flex gap-6">

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/symptoms"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaStethoscope />
            Symptoms
          </Link>

          <Link
            to="/medicine"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaPills />
            Medicine
          </Link>

          <Link
            to="/chatbot"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaRobot />
            Chatbot
          </Link>

          <Link
            to="/pharmacy"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaMapMarkerAlt />
            Pharmacy
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <FaInfoCircle />
            About
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;