// pages/contact.tsx

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center text-[#004383] mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          We love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 border rounded-lg"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-[#004383] text-white rounded-lg hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
