export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 transition-colors pt-20 duration-300 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0C8FD7] mb-6">
        CONTACT US – Team T3
      </h1>
      <div className="w-full max-w-3xl bg-white dark:bg-black text-black dark:text-white p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg">
          📞{" "}
          <a href="tel:+919111222274" className="text-[#0C8FD7] font-medium">
            +91 9111222274
          </a>{" "}
          (WhatsApp & Calls)
        </p>
        <p className="text-lg">
          📧{" "}
          <a
            href="mailto:T3Hockeyindia@gmail.com"
            className="text-[#0C8FD7] font-medium"
          >
            T3Hockeyindia@gmail.com
          </a>
        </p>
      </div>
      <div className="w-full max-w-3xl mt-8 grid md:gap-6 gap-4 md:grid-cols-2 grid-cols-1">
        {/* Main Branch */}
        <div className="bg-white w-full h-full hover:bottom-1 relative transition-all hover:shadow-lg hover:dark:shadow-gray-500 duration-400 cursor-pointer dark:bg-black text-black dark:text-white p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-[#0C8FD7] mb-2">
            Main Branch
          </h3>
          <p className="text-lg">📍 T3 Sports, Baba Hardwares</p>
          <p className="text-lg">Shop No 206, Iron Yard, Bhavanipuram</p>
          <p className="text-lg">Vijayawada, Andhra Pradesh, India - 520012</p>
          <p className="text-lg">
            📞{" "}
            <a href="tel:+919111222274" className="text-[#0C8FD7] font-medium">
              +91 9111222274
            </a>{" "}
            (WhatsApp)
          </p>
        </div>

        {/* 2nd Branch */}
        <div className="bg-white w-full h-full hover:bottom-1 relative transition-all hover:shadow-lg hover:dark:shadow-gray-500 duration-400 cursor-pointer dark:bg-black text-black dark:text-white p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-[#0C8FD7] mb-2">
            2nd Branch
          </h3>
          <p className="text-lg">📍 T3 Sports, No-19-2-111</p>
          <p className="text-lg">Munasabu Street, Gavarapalem</p>
          <p className="text-lg">Anakapalli - 531002</p>
          <p className="text-lg">
            📞{" "}
            <a href="tel:+919111222274" className="text-[#0C8FD7] font-medium">
              +91 9111222274
            </a>{" "}
            (WhatsApp)
          </p>
        </div>
      </div>
    </div>
  );
}
