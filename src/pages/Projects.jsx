function Projects() {
  return (
    <section className="px-8 md:px-20 py-16">

      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-12">
        Projects
      </h1>

      {/* Featured Project */}
      <div className="bg-[#1E293B] p-8 rounded-xl mb-10 hover:shadow-lg transition">

        <h2 className="text-2xl font-semibold mb-3 text-purple-400">
          Line Follower Robot – IISc Bengaluru
        </h2>

        <p className="text-gray-400 mb-4">
          Designed and developed an autonomous line-following robot
          during a robotics internship at IISc Bengaluru.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
          <li>Implemented IR sensor-based path detection system</li>
          <li>Programmed microcontroller for real-time navigation</li>
          <li>Optimized speed and accuracy of robot movement</li>
          <li>Tested and validated performance under varying conditions</li>
        </ul>

        <div className="text-sm text-gray-500">
          Technologies Used: Robotics, Embedded Systems, Automation
        </div>

      </div>

      {/* Internship Project */}
      <div className="bg-[#1E293B] p-8 rounded-xl hover:shadow-lg transition">

        <h2 className="text-2xl font-semibold mb-3 text-purple-400">
          Manufacturing Internship – Industrial Training
        </h2>

        <p className="text-gray-400 mb-4">
          Gained practical exposure to industrial manufacturing processes
          and quality control systems.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 mb-4">
          <li>Observed CNC machining operations</li>
          <li>Understood production workflow systems</li>
          <li>Studied quality inspection procedures</li>
          <li>Learned industrial safety protocols</li>
        </ul>

        <div className="text-sm text-gray-500">
          Domain: Manufacturing & Production Engineering
        </div>

      </div>

    </section>
  );
}

export default Projects;
