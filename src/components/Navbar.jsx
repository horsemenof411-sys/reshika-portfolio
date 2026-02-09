import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#111827]/80 backdrop-blur-md border-b border-gray-700 px-8 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide text-purple-400">
        Reshika N
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          Experience
        </NavLink>

        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          Certifications
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-purple-400"
              : "hover:text-purple-400 transition duration-300"
          }
        >
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
