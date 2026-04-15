"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function TimeTableLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <Sidebar>
      {children}
    </Sidebar>
    </>
  );
}
