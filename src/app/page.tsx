// Removed useState import since it's not being used.

// If you're not using `Link`, remove the import below:
// import Link from "next/link"; 

export default function HomePage() {
  return (
    <div>
      {/* Main Content */}
      <div className="container mx-auto p-[100px] mb-8">
        {/* Welcome Section */}
        <section className="mb-[100px] text-center">
          <h2 className="text-4xl text-[#004383] font-bold mb-4">
            Welcome to Healthy Glow
          </h2>
          <p className="text-lg text-gray-700">
            At Healthy Glow, we believe in empowering you with the knowledge and tools to achieve naturally glowing skin. 
            Explore expert skincare advice, product reviews, and tips to nourish your skin inside and out. 
            Let&apos;s embark on this journey to healthier, radiant skin together
          </p>
        </section>

        {/* Customer Reviews */}
        <section className="mb-[50px]">
          <h3 className="text-3xl font-semibold text-[#004383] mb-4">
            What Our Readers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                Healthy Glow transformed my skincare routine. Their tips are easy to follow and so effective
              </p>
              <p className="text-gray-500 mt-2 text-right"> Sarah J.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                The product reviews are so honest and helpful. I have discovered amazing products here
              </p>
              <p className="text-gray-500 mt-2 text-right"> Emma R.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                I never knew my skin could look this good. Healthy Glow is my go-to blog for skincare.
              </p>
              <p className="text-gray-500 mt-2 text-right"> Michael T.</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="text-gray-700 italic">
                The DIY mask recipes are my favorite. They have saved me so much money
              </p>
              <p className="text-gray-500 mt-2 text-right">- Olivia P.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
