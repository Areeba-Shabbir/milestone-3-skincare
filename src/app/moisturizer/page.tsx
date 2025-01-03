"use client";

import { useState } from "react";
import Image from "next/image"; // Import the Image component

export default function MoisturizerPage() {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Healthy Glow Moisturizer</h1>
        <p className="text-gray-600">Nourish and hydrate your skin for a glowing complexion</p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Product Card */}
        <div className="bg-white w-full md:w-1/3 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <Image
            className="h-65 w-full object-cover rounded-md mb-4"
            src="/moisturizer.jpg" // Replace with your image path
            alt="Healthy Glow Moisturizer"
            width={500} // Define width for optimization
            height={500} // Define height for optimization
          />
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">Moisturizer</h2>
            <p className="text-sm text-gray-600">Price: PKR 2200</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white w-full md:w-2/3 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Hydrates and nourishes the skin</li>
            <li>Reduces dryness and flakiness</li>
            <li>Improves skin texture and elasticity</li>
            <li>Provides a smooth, glowing complexion</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Key Ingredients</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Shea Butter</li>
            <li>Vitamin C</li>
            <li>Hyaluronic Acid</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Suitable for</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Dry and normal skin types</li>
            <li>Anyone seeking a hydrating moisturizer</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Apply a small amount to clean, damp skin</li>
            <li>Massage gently in upward circular motions</li>
            <li>Use twice daily for best results</li>
          </ul>
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-10 bg-white w-full max-w-4xl mx-auto p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment"
            className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Submit
          </button>
        </div>
        <div className="mt-4">
          {comments.length > 0 ? (
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
}
