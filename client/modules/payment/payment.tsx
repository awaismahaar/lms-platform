
"use client";
import React from "react";
export default function Payment() {
  return (
    <div className="md ml-0 md:ml-64 p-2 md:p-4">
      <h1 className="text-lg md:text-2xl font-bold mb-4 md:mb-6">Payment Dues</h1>  
        <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-xl font-semibold mb-2">Outstanding Balance</h2>
            <p className="text-gray-700 text-lg mb-4">$500.00</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                Pay Now
            </button>

        </div>
        <div className="bg-white rounded-lg shadow p-4 mt-6 overflow-x-auto">
            <table className="w-full text-left min-w-[100px] text-xs sm:text-sm">
                <thead>
                    <tr>
                        <th className="border-b p-1 sm:p-2">Invoice ID</th>
                        <th className="border-b p-1 sm:p-2">Categoty</th>
                        <th className="border-b p-1 sm:p-2">Amount</th>
                        <th className="border-b p-1 sm:p-2">Due Date</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-b p-1 sm:p-2">INV-001</td>
                        <td className="border-b p-1 sm:p-2">Transport</td>
                        <td className="border-b p-1 sm:p-2">$300.00</td>
                        <td className="border-b p-1 sm:p-2">2026-07-15</td>
                    </tr>
                    <tr>    
                        <td className="border-b p-1 sm:p-2">INV-002</td>
                        <td className="border-b p-1 sm:p-2">Courses</td>
                        <td className="border-b p-1 sm:p-2">$200.00</td>
                        <td className="border-b p-1 sm:p-2">2026-07-20</td>
                    </tr>
                </tbody>
            </table>
         </div>
    
        
       
    </div>
  );
}