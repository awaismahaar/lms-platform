"use client"
import React from 'react'
import toast from 'react-hot-toast';
import { z } from 'zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const registerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormData = z.infer<typeof registerSchema>;



export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: FormData) => {
        try{
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = existingUsers.find(
                (user: FormData) => user.email === data.email);
                if(userExists){
                    toast.error('User with this email already exists');
                    return;
                }
                const newUser = [...existingUsers, data];
                localStorage.setItem('users', JSON.stringify(newUser));
                toast.success('Registration successful');
                reset();
        } catch{
            toast.error('An error occurred during registration');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-200" suppressHydrationWarning>

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h2>
                <p className='text-center text-gray-600 mb-4'>
                    Create an account now to get started!
                </p>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                    <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name:</label>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password:</label>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600">
              Login
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
}



// // do simplecode not complex when i register the name, email and password saves
// //  in local storage and when  login the email and password i should get from 
// //  localstprage to login like the real apps also do protected routes dashboad 
// //  should not open without login in with the valid user code carefully and see
// //   all files related

