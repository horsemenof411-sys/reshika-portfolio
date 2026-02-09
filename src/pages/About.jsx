function About() {
  return (
    <section className="px-8 md:px-20 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">
        About Me
      </h1>

      {/* Profile Summary */}
      <div className="max-w-4xl mb-12">
        <p className="text-gray-400 text-lg leading-relaxed">
          I am a motivated Mechanical Engineering student with strong
          foundations in thermodynamics, fluid mechanics, strength of
          materials, and manufacturing processes. I am passionate about
          precision engineering and innovation in automation systems.
          I continuously seek opportunities to enhance my technical skills
          and contribute effectively to engineering projects.
        </p>
      </div>

      {/* Education Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-purple-400">
          Education
        </h2>

        <div className="bg-[#1E293B] p-6 rounded-lg">
          <h3 className="text-lg font-semibold">
            B.E. Mechanical Engineering
          </h3>
          <p className="text-gray-400">
            Ramco Institute Of Technology
          </p>
          <p className="text-gray-500 text-sm">
            2023 – 2027
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-purple-400">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
          {[
            "Thermodynamics",
            "Fluid Mechanics",
            "Strength of Materials",
            "Manufacturing Processes",
            "NX CAD",
            "ANSYS",
            "SolidWorks",
            "Robotics",
            "Automation Systems",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-[#1E293B] px-4 py-3 rounded-lg text-sm text-center hover:bg-purple-600 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;
