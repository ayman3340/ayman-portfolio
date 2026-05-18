import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset, // Destructure reset from useForm
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You might want to reset the form after successful submission:
    // reset();
  };

  return (
    // Main Container: Flex-col for mobile, Flex-row for desktop (md:flex-row)
    <div className="flex flex-col md:flex-row min-h-screen text-white bg-stone-900 overflow-hidden" id="Contact">
      
      {/* Left Section: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-stone-800 to-stone-900 p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-md"
        >
          <h1 className="mb-8 text-center  text-1xl sm:text-3xl font-bold tracking-wider uppercase">
            Contact me
          </h1>

          {/* First Name */}
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName" className="mb-2 text-sm text-stone-300">
              First Name
            </label>
            <input
              className="bg-transparent border border-stone-600 rounded p-3 focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Enter your first name"
              {...register("firstName", { required: "First name is required", maxLength: 20 })}
            />
            {errors.firstName && <span className="text-red-400 text-xs mt-1">{errors.firstName.message}</span>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName" className="mb-2 text-sm text-stone-300">
              Last Name
            </label>
            <input
              className="bg-transparent border border-stone-600 rounded p-3 focus:border-yellow-500 focus:outline-none transition-colors"
              placeholder="Enter your last name"
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-4">
            <label htmlFor="mail" className="mb-2 text-sm text-stone-300">
              Email
            </label>
            <input
              type="email"
              className={`bg-transparent border rounded p-3 focus:outline-none transition-colors ${
                errors.mail ? "border-red-500" : "border-stone-600 focus:border-yellow-500"
              }`}
              placeholder="example@email.com"
              {...register("mail", { 
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p className="text-red-400 text-xs mt-1" role="alert">{errors.mail.message}</p>}
          </div>

          {/* Message (Formerly Information) */}
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="mb-2 text-sm text-stone-300">
              Message
            </label>
            <textarea
              rows="4"
              className="bg-transparent border border-stone-600 rounded p-3 focus:border-yellow-500 focus:outline-none transition-colors resize-y"
              placeholder="How can I help you?"
              // Changed validation: removed regex so people can type punctuation/numbers
              {...register("message", { required: "Please enter a message" })}
            />
            {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-center gap-4">
            <button 
              type="submit"
              className="py-2 px-8 bg-stone-200 text-stone-900 font-bold rounded hover:bg-white transition-all transform hover:scale-105"
            >
              Send
            </button>
            
            <button 
              type="button" 
              onClick={() => reset()} // Use hook reset function
              className="py-2 px-8 border border-stone-500 text-stone-300 rounded hover:bg-stone-800 transition-colors"
            >
              Reset
            </button>
          </div>

        </form>
      </div>

      {/* Right Section: Image */}
      <div
        className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center bg-no-repeat hidden"
        style={{ backgroundImage: "url('src/assets/contact.png')" }}
      >
        {/* The image is now a background image that covers the area */}
      </div>
    </div>
  );
}

export default Contact;