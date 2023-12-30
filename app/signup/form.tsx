"use client";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      return;
    }

    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }

    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      return;
    }

    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }),
    });
  };

  return (
    <div className="signup-1 flex items-center relative h-screen">
      <div className="overlay absolute inset-0 z-0 bg-gray-100 opacity-75"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
          <form
            className="box bg-white p-6 md:px-12 md:pt-12 border-10 border-solid border-indigo-600"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl text-gray-800 text-center">
              Create Your Account
            </h2>

            <div className="signup-form mt-6 md:mt-12">
              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <span className="far fa-user text-gray-500"></span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Username"
                    className="h-10 py-1 pr-3 w-full"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <span className="far fa-envelope text-gray-500"></span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="E-mail"
                    className="h-10 py-1 pr-3 w-full"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="border-2 border-solid rounded flex items-center mb-4">
                <div className="w-10 h-10 flex justify-center items-center flex-shrink-0">
                  <span className="fas fa-asterisk text-gray-500"></span>
                </div>
                <div className="flex-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-10 py-1 pr-3 w-full"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="text-center mt-6 md:mt-12">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">
                  Sign Up <span className="far fa-paper-plane ml-2"></span>
                </button>
              </div>
            </div>

            <div className="border-t border-solid mt-6 md:mt-12 pt-4">
              <p className="text-gray-500 text-center">
                Already have an account,{" "}
                <Link
                  href="/signin"
                  className="text-indigo-600 hover:underline"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
