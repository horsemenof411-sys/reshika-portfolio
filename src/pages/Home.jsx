import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-8 md:px-20 overflow-hidden">

      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="relative z-10 max-w-4xl">

        {/* Small Intro */}
        <p className="text-purple-400 text-sm tracking-widest uppercase mb-4">
          Mechanical Engineer
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Designing the Future with
          <span className="text-purple-400"> Precision & Innovation</span>
        </h1>

        {/* Name */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Reshika N
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl">
          Motivated Mechanical Engineering student with strong foundations in
          thermodynamics, fluid mechanics, strength of materials, and
          manufacturing processes. Experienced in robotics, NX CAD, ANSYS,
          and industrial manufacturing environments.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
  <Link
    to="/projects"
    className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-sm font-medium shadow-lg"
  >
    View Projects
  </Link>

  <Link
    to="/certifications"
    className="border border-gray-500 hover:border-purple-400 hover:text-purple-400 transition px-6 py-3 rounded-lg text-sm font-medium"
  >
    View Certifications
  </Link>

  <a
    href="/resume.pdf"
    download
    className="border border-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg text-sm font-medium"
  >
    Download Resume
  </a>
</div>
      </div>

    </section>
  );
}

export default Home;
