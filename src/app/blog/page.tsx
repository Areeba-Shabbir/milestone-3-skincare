import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

export default function Blog() {
  // Blog data with images
  const blogs = [
    {
      title: 'Moisturizers',
      description: ' Hydrate and nourish your skin for a soft, smooth, and glowing complexion.',
      image: '/moisturizer.jpg',
      link: '/moisturizer' // direct link for routing
    },
    {
      title: 'Face Washes',
      description: 'Cleanse and refresh your skin, removing dirt and impurities for a revitalized look',
      image: '/wash.jpg',
      link: '/wash' // direct link for routing
    },
    {
      title: 'Eye Creams',
      description: 'Reduce puffiness and dark circles, leaving the eye area bright and firm.',
      image: '/eye.jpg',
      link: '/eye' // direct link for routing
    },
    {
      title: 'Serums',
      description: 'Target specific skin concerns, improving radiance and texture for a clearer complexion.',
      image: '/serum.jpg',
      link: '/serum' // direct link for routing
    },
    {
      title: 'Masks',
      description: 'Pamper your skin with masks that provide hydration, detoxification, and revitalization.',
      image: '/mask.jpg',
      link: '/mask' // direct link for routing
    },
    {
      title: 'Sunscreens',
      description: 'Shield your skin from harmful UV rays, preventing sun damage and premature aging.',
      image: '/sunscreen.jpg',
      link: '/sunscreen' // direct link for routing
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-[#004383] mt-2">Healthy Glow Products</h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {blogs.map((blog, index) => (
          <Link href={blog.link} key={index}>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer transition-all">
              {/* Replace <img> with <Image> for better optimization */}
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover rounded-lg"
                width={500} // Set width (adjust as needed)
                height={400} // Set height (adjust as needed)
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
