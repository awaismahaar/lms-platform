"use client";

import React, { useState, useEffect } from "react";
import { Mail, UserCircle, User } from "lucide-react";

export default function UserDashboard() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    setUser(currentUser);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="md:ml-64 flex items-center justify-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="md:ml-64 ">
      <h1 className="text-2xl font-bold ml-10 mt-6">Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ml-10 mr-10">
        
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Courses Enrolled:</h2>
          <p className="text-2xl">5</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Assignments Due:</h2>
          <p className="text-2xl">3</p>
        </div>

        <div className="bg-white p-4 rounded shadow ">
          <h2 className="text-lg font-semibold">CGPA:</h2>
          <p className="text-2xl">3.54</p>
        </div>
      </div>


      <div className="mt-10 ml-10 mr-10">
        <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <UserCircle size={100} className="text-gray-400 mb-4" /> 
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-center">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 font-semibold">Name</label>
                <h2 className="text-2xl font-bold text-gray-900">{user?.name || "User"}</h2>
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Role</label>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <UserCircle size={18} className="text-blue-900" />
                  Student
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600 font-semibold">Email</label>
                <p className="text-lg text-gray-700 flex items-center gap-2">
                  <Mail size={18} className="text-blue-900" />
                  {user?.email || "Not available"}
                </p>
              </div>

              <button className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}