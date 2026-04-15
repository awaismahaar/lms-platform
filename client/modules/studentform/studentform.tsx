

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .regex(/^[0-9]+$/, "Only numbers allowed"),
  date: z.string().min(1, "Date is required"),
  type: z.string().min(1, "Please select type"),
  details: z.string().min(5, "Details must be at least 5 characters"),
  file: z
    .any()
    .refine((files) => files?.length === 1, "Document is required"),
});

type FormData = z.infer<typeof schema>;

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Application submitted!");
    reset();
  };

  return (
    <div className="md:ml-64 p-10 grid justify-center">
      <h1 className="text-2xl font-bold mb-6">Application Form</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md max-w-lg space-y-4"
      >
        <div>
          <label className="label">Full Name</label>
          <input {...register("name")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label className="label">Phone</label>
          <input {...register("phone")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="label">Date</label>
          <input type="date" {...register("date")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>

        <div>
          <label className="label">Application Type</label>
          <select {...register("type")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select type</option>
            <option value="admission">Admission</option>
            <option value="scholarship">Scholarship</option>
            <option value="complaint">Complaint</option>
          </select>
          {errors.type && <p className="error">{errors.type.message}</p>}
        </div>

        <div>
          <label className="label">Details</label>
          <textarea {...register("details")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.details && <p className="error">{errors.details.message}</p>}
        </div>

        <div>
          <label className="label">Upload Document</label>
          <input type="file" {...register("file")} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.file && <p className="error">{errors.file.message as string}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}



















