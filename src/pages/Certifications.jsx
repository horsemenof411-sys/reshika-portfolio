import { useState } from "react";

import cert1 from "../assets/certificates/cert1.jpg";
import cert2 from "../assets/certificates/cert2.jpg";
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";
import cert5 from "../assets/certificates/cert5.jpg";
import cert6 from "../assets/certificates/cert6.jpg";
import cert7 from "../assets/certificates/cert7.jpg";

const certificates = [
  { title: "Student Membership", image: cert1 },
  { title: "Exposure Visit", image: cert2 },
  { title: "UE Press Tool Intern", image: cert3 },
  { title: "CMTI", image: cert4 },
  { title: "NPTEL – Advanced Machine Processes", image: cert5 },
  { title: "NX CAD", image: cert6 },
  { title: "Angel Investment", image: cert7 },
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="px-8 md:px-20 py-16">

      <h1 className="text-4xl font-bold mb-12">
        Certifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {certificates.map((cert, index) => (
          <div
            key={index}
            onClick={() => setSelectedCert(cert)}
            className="cursor-pointer bg-[#1E293B] p-4 rounded-lg hover:scale-105 transition duration-300 shadow-md"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="rounded-md mb-4"
            />

            <h3 className="text-purple-400 font-semibold text-sm">
              {cert.title}
            </h3>
          </div>
        ))}

      </div>

      {/* Modal Preview */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-auto">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="rounded-lg"
            />
          </div>
        </div>
      )}

    </section>
  );
}

export default Certifications;
