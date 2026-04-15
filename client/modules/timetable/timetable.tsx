"use client";
import React from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const times = ["10:00", "12:00", "02:00"];

const schedule = [
  { day: "Monday", time: "10:00", course: "React" },
  { day: "Monday", time: "12:00", course: "Node.js" },
  { day: "Tuesday", time: "10:00", course: "DBMS" },
];

export default function Timetable() {
  const getCourse = (day: string, time: string) => {
    const item = schedule.find(
      (s) => s.day === day && s.time === time
    );
    return item ? item.course : "";
  };

  return (
    <div className="md ml-0 md:ml-64 p-2 md:p-4">
      <h1 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Timetable</h1>

      <div className="overflow-x-auto bg-white rounded-lg md:rounded-xl shadow">
        <table className="w-full border border-gray-200 text-xs md:text-base">

          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-1 md:p-3 border">Time</th>
              {days.map((day) => (
                <th key={day} className="p-1 md:p-3 border">
                  <span className="hidden md:inline">{day}</span>
                  <span className="md:hidden">{day.slice(0, 3)}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {times.map((time) => (
              <tr key={time} className="text-center hover:bg-gray-50">
                
                < td className="p-1 md:p-3 border font-medium bg-gray-100">
                  {time}
                </td>

                {days.map((day) => {
                  const course = getCourse(day, time);

                  return (
                    <td
                      key={day + time}
                      className={`p-1 md:p-3 border ${
                        course ? "bg-blue-50 font-medium" : ""
                      }`}
                    >
                      {course || "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
} 