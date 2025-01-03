// pages/about.tsx
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto p-8">
        {/* About Section */}
        <section className="mb-8">
          <h2 className="text-4xl text-[#004383] font-bold mb-4">About Healthy Glow</h2>
          <p className="text-lg text-gray-700 mb-4">
            Welcome to <strong>Healthy Glow</strong>, your trusted destination for skincare insights, expert tips, and product reviews. Our mission is to empower individuals to achieve radiant, healthy skin by offering science-backed advice and practical solutions.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether you are just beginning your skincare journey or are a seasoned enthusiast, Healthy Glow provides a wealth of information tailored to your needs. From understanding your unique skin type to discovering the best products in the market, we have got you covered.
          </p>
        </section>

        {/* Our Vision */}
        <section className="mb-8">
          <h3 className="text-3xl font-semibold text-[#004383] mb-4">Our Vision</h3>
          <p className="text-lg text-gray-700">
            At Healthy Glow, we envision a world where everyone feels confident and comfortable in their skin. By promoting self-care and awareness, we aim to inspire a community that embraces natural beauty and sustainable skincare practices.
          </p>
        </section>

        {/* Team Section */}
        <section className="mb-8">
          <h3 className="text-3xl font-semibold text-[#004383] mb-4">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <Image
                src="/team-member1.jpg"
                alt="Sophia Carter, Founder & Skincare Enthusiast"
                width={500}
                height={400}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-medium">Sophia Carter</h4>
              <p className="text-gray-700">Founder & Skincare Enthusiast</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <Image
                src="/team-member2.jpg"
                alt="Liam Anderson, Dermatologist and Advisor"
                width={500}
                height={400}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-medium">Liam Anderson</h4>
              <p className="text-gray-700">Dermatologist and Advisor</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <Image
                src="/team-member3.jpeg"
                alt="Emily Johnson, Content Writer and Blogger"
                width={500}
                height={400}
                className="w-full h-64 object-cover rounded mb-4"
              />
              <h4 className="text-xl font-medium">Emily Johnson</h4>
              <p className="text-gray-700">Content Writer and Blogger</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h3 className="text-3xl font-semibold text-[#004383] mb-4">Join Our Community</h3>
          <p className="text-lg text-gray-700 mb-4">
            Stay connected with Healthy Glow by subscribing to our newsletter. Receive the latest updates, product reviews, and exclusive skincare tips directly to your inbox.
          </p>
          <Link href="/contact">
            <a className="px-6 py-3 bg-[#004383] text-white rounded hover:bg-gray-600 transition duration-300">
              Contact Us
            </a>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default About;
