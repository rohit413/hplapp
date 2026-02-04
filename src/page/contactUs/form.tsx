'use client';

import {
  Edit,
  FileText,
  Mail,
  Phone,
  User,
} from "feather-icons-react";
import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);
    try {

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  return (
    <div className="w-full bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-[#333333] mb-10 text-center">
        Get in Touch
      </h2>
      <form
        id="contact-form"
        name="contact-form"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none" />
            <input
              type="text"
              id="name"
              name="name"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium"
              placeholder="Name"
              required
            />
          </div>
          <div className="relative">
            <User className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none" />
            <input
              type="text"
              id="companyname"
              name="companyname"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium"
              placeholder="Company Name"
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none" />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium"
              placeholder="Contact Details"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none" />
            <input
              type="email"
              id="email"
              name="email"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="relative md:col-span-2">
            <FileText className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none" />
            <select
              id="reason"
              name="reason"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium appearance-none text-gray-500 bg-white"
              required
            >
              <option value="">Select Reason</option>
              <option value="1">Want to Apply for a Job</option>
              <option value="2">Want to Enquire about a Product</option>
              <option value="3">Want to Become Your Supplier</option>
              <option value="4">Want to Become Your Partner</option>
              <option value="5">Want to Offer You Our Services</option>
              <option value="6">
                I Have Another Reason to Contact You
              </option>
            </select>
            {/* Dropdown arrow fix if needed, but appearance-none + custom arrow is better. Using default for now as it's cleaner code */}
          </div>
          <div className="relative md:col-span-2">
            <Edit className="absolute left-4 top-3 text-[#6db921] w-5 h-5 pointer-events-none transition-transform" />
            <textarea
              id="msg"
              name="msg"
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#6db921] focus:border-[#6db921] transition-colors placeholder-gray-400 text-sm font-medium min-h-[120px]"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#6db921] text-white px-10 py-3 rounded-full text-lg font-bold shadow-md hover:bg-[#5ca01b] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Submit Message
          </button>
        </div>
      </form>
    </div>
  );
}
