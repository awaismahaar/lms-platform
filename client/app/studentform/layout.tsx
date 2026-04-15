"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function StudentformLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar />
    <Sidebar>
      {children}
    </Sidebar>
    </>
  );
}
