function Experience() {
  return (
    <section className="px-8 md:px-20 py-16">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12">
        Experience
      </h1>

      <div className="relative border-l-2 border-purple-600 pl-8 space-y-12">

        {/* Internship 1 */}
        <div className="relative">
          <div className="absolute -left-2 top-1 w-5 h-5 bg-purple-600 rounded-full"></div>

          <h2 className="text-2xl font-semibold text-purple-400">
            Robotics Internship – IISc Bengaluru
          </h2>

          <p className="text-gray-500 text-sm mb-3">
            2024
          </p>

          <p className="text-gray-400">
            Worked on designing and developing a Line Follower Robot.
            Gained hands-on experience in embedded systems, automation,
            and sensor-based control mechanisms.
          </p>
        </div>

        {/* Internship 2 */}
        <div className="relative">
          <div className="absolute -left-2 top-1 w-5 h-5 bg-purple-600 rounded-full"></div>

          <h2 className="text-2xl font-semibold text-purple-400">
            Manufacturing Internship
          </h2>

          <p className="text-gray-500 text-sm mb-3">
            Industrial Training
          </p>

          <p className="text-gray-400">
            Observed CNC machining, production workflow systems,
            quality control procedures, and industrial safety standards.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Experience;
