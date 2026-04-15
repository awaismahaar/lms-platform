"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [userName, setUserName] = useState<string>("Guest");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (currentUser?.name) {
      setUserName(currentUser.name);
    }
  }, []);

  return (
    <nav className="bg-white-900 text-white flex items-center justify-between p-4 border border-white-800 shadow-lg">
      <h1 className="font-bold text-lg">LMS Platform</h1>
      <div className="text-black font-semibold">{userName}</div>
    </nav>
  );
}