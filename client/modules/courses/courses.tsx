"use client";
import React, { useState } from "react";

type Course = {
  title: string;
  description: string;
  details: string;
};

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const course: Course = {
    title: "AI Engineering  1",
    description: "Ai using Python and Machine learning concepts.",
    details: "This course covers Python, Machine Learning, and model training and  development concepts.",
  };

  return (
    
    <div className="md:ml-64">
      <h1 className="text-2xl font-bold ml-10 mt-6 ">Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-6 ml-10 mr-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
          <p className="text-gray-700 mb-4">{course.description}</p>

          <button
            onClick={() => setSelectedCourse(course)}
            className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition "
          >
            View Details
          </button>
        </div>
      </div>

      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">

            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            
            <h2 className="text-xl font-bold mb-3">
              {selectedCourse.title}
            </h2>
                <h1 className="text-lg font-semibold mb-2">
                Instructor: <span className="text-gray-700">Dr. Smith</span>
            </h1>
            <h1 className="text-lg font-semibold mb-2">
                Schedule: <span className="text-gray-700">Mon & Wed 10:00 AM - 11:30 AM</span>
            </h1>
            <h1 className="text-lg font-semibold mb-2">
                Credits: <span className="text-gray-700">3</span>
            </h1>
            <h1 className="text-lg font-semibold mb-2">
                Start Date: <span className="text-gray-700">2/03/26</span>
            </h1>
            

            <p className="text-gray-600 text-sm">
              {selectedCourse.details}
            </p>

            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-5 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
        
      )}
    </div>
    
  );
}