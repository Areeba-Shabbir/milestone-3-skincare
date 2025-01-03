"use client";

import { useState } from "react";
import Image from "next/image";

export default function EyeCreamPage() {
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
        <h1 className="text-3xl font-bold">Healthy Glow Eye Cream</h1>
        <p className="text-gray-600">Brighten your eyes and fight dark circles</p>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-6">
        {/* Product Card */}
        <div className="bg-white w-full md:w-1/3 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
          <Image
            className="h-65 w-full object-cover rounded-md mb-4"
            src="/eyecream.jpg"
            alt="Healthy Glow Eye Cream"
            width={500} // Add appropriate width for image
            height={500} // Add appropriate height for image
          />
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">Healthy Glow Eye Cream</h2>
            <p className="text-sm text-gray-600">Price: PKR 2000</p>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white w-full md:w-2/3 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Reduces dark circles and puffiness</li>
            <li>Hydrates and nourishes the delicate under-eye area</li>
            <li>Provides a youthful, refreshed look</li>
            <li>Improves skin elasticity and firmness</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Key Ingredients</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>Caffeine</li>
            <li>Hyaluronic Acid</li>
            <li>Vitamin E</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">Suitable for</h2>
          <ul className="list-disc ml-6 mb-6 text-gray-700">
            <li>All skin types</li>
            <li>Dark circles and puffiness under the eyes</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Gently pat a small amount around the eyes using your ring finger</li>
            <li>Apply morning and night for best results</li>
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
