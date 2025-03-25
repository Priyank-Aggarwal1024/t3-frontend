function SendMessage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 transition-colors pt-20 duration-300 bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full max-w-3xl mt-8 md:p-6 py-4 px-3 rounded-xl shadow-lg bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <form
          className="flex flex-col gap-4"
          action="https://formspree.io/f/xjkywpov"
          method="POST"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C8FD7]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C8FD7]"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            name="message"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0C8FD7]"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-[#0C8FD7] text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default SendMessage;
