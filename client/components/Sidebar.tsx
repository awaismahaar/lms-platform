"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Menu, LayoutDashboard, BookOpen, Clock4, Wallet, GraduationCap,NotebookPen,FileUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Sidebar({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    router.push("/auth/login");
  };

  return (
    <div className="flex min-h-screen">

      <button
        className="md:hidden fixed top-2 left-4 z-50 bg-blue-900 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      <div
        className={`
          fixed  top-0 left-0 w-64 h-full bg-blue-900 text-white p-4 flex flex-col
          transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <div className="flex items-center gap-3 px-4 mt-2.5 mb-6">
  <NotebookPen size={30} />
  <h2 className="text-lg font-bold ">Student Manager</h2>
</div>

        <nav className="flex-1 space-y-2 px-3">
          <Link
            href="/userdashboard"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/userdashboard")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>

                  <Link
            href="/courses"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/courses")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >
                  <BookOpen size={20} />
            <span>Courses</span>
          </Link>

          <Link
            href="/timetable"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/timetable")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >
            <Clock4 size={20} />
            <span>Time Table</span>
          </Link>
<Link
            href="/payment"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/payment")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >            <Wallet size={20} />
            <span>Payment dues</span>
          </Link>
<Link
            href="/academicrecord"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/academicrecord")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >            <GraduationCap size={20} />
            <span>Academic Record </span>
          </Link>

                <Link
            href="/studentform"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition
               ${isActive("/studentform")
                ? "bg-blue-700 text-white shadow-md"
                : "text-white hover:bg-blue-800"}
                  `}
          >            <FileUser size={20} />
            <span>Application Form </span>
          </Link>
        </nav>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 py-2 rounded-lg hover:bg-red-700 transition mt-auto"
        >
          Logout
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 bg-gray-100 w-full">
        {children}
      </div>

    </div>
  );
}