function Contact() {
  return (
    <section className="px-8 md:px-20 py-20 min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-12">
        Get In Touch
      </h1>

      <div className="space-y-6 w-full max-w-md">

        {/* Email Button */}
        <a
          href="mailto:reshikanagaraj05@gmail.com"
          className="block w-full text-center bg-purple-600 hover:bg-purple-700 transition py-3 rounded-lg font-medium"
        >
          📩 Email Me
        </a>

        {/* Phone Button */}
        <a
          href="tel:+917845623439"
          className="block w-full text-center border border-purple-500 hover:bg-purple-600 transition py-3 rounded-lg font-medium"
        >
          📞 Call Me
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/ms-reshika-profile?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center border border-gray-600 hover:border-purple-400 hover:text-purple-400 transition py-3 rounded-lg font-medium"
        >
          🔗 LinkedIn Profile
        </a>

      </div>

    </section>
  );
}

export default Contact;
