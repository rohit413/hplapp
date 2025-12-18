"use client";

import Image from "next/image";
import Link from "next/link";
import { File } from "feather-icons-react";

// Constant for policy data
const policies = [
  {
    number: 1,
    title: "HPLA Sustainability Report - FY 2024-25",
    href: "/assets/images/policies/1.HPLA Sustainability Report - FY 2024-25.pdf",
  },
  {
    number: 2,
    title: "CDP report 2025.pdf",
    href: "/assets/images/policies/2.CDP report 2025.pdf",
  },
  {
    number: 3,
    title: "CDP Report 2024",
    href: "/assets/images/policies/3.CDP Report 2024.pdf",
  },
  {
    number: 4,
    title: "HPL_PCF_Independent Limited Assurance Statement",
    href: "/assets/images/policies/4.HPL_PCF_Independent Limited Assurance Statement.pdf",
  },
  {
    number: 5,
    title: "Independent Limited Assurance Statement -FY 2024-25",
    href: "/assets/images/policies/5.Independent Limited Assurance Statement -FY 2024-25.pdf",
  },
  {
    number: 6,
    title: "Independent-Limited-Assurance-Statement-FY 2021-22  FY 2022-23  FY 2023-24",
    href: "/assets/images/policies/6.Independent-Limited-Assurance-Statement-FY 2021-22  FY 2022-23  FY 2023-24.pdf",
  },
  {
    number: 7,
    title: "ISO 9001 Certification",
    href: "/assets/images/policies/7.ISO 9001 Certification.pdf",
  },
  {
    number: 8,
    title: "ISO 14001 Certification",
    href: "/assets/images/policies/8.ISO 14001 Certification.pdf",
  },
  {
    number: 9,
    title: "ISO 45001 Certification",
    href: "/assets/images/policies/9.ISO 45001 Certification.pdf",
  },
  {
    number: 10,
    title: "Circular  Economy Policy",
    href: "/assets/images/policies/10.Circular  Economy Policy.pdf",
  },
  {
    number: 11,
    title: "Climate Change Policy",
    href: "/assets/images/policies/11.Climate Change Policy.pdf",
  },
  {
    number: 12,
    title: "Energy Efficiency & Management Policy",
    href: "/assets/images/policies/12.Energy Efficiency & Management Policy.pdf",
  },
  {
    number: 13,
    title: "Environmental Management and Compliance Policy",
    href: "/assets/images/policies/13.Environmental Management and Compliance Policy.pdf",
  },
  {
    number: 14,
    title: "Health  & Safety Policy",
    href: "/assets/images/policies/14.Health  & Safety Policy.pdf",
  },
  {
    number: 15,
    title: "Human Rights Policy",
    href: "/assets/images/policies/15.Human Rights Policy.pdf",
  },
  {
    number: 16,
    title: "Product Safety and Quality Policy",
    href: "/assets/images/policies/16.Product Safety and Quality Policy.pdf",
  },
  {
    number: 17,
    title: "Stakeholder Engagement Policy",
    href: "/assets/images/policies/17.Stakeholder Engagement Policy.pdf",
  },
  {
    number: 18,
    title: "Waste Management Policy",
    href: "/assets/images/policies/18.Waste Management Policy.pdf",
  },
  {
    number: 19,
    title: "Water and Wastewater Management Policy",
    href: "/assets/images/policies/19.Water and Wastewater Management Policy.pdf",
  },
  {
    number: 20,
    title: "HPL's Environment Policy",
    href: "/assets/images/policies/20.HPL's Environment Policy.pdf",
  },
   {
    number: 21,
    title: "HPL's Green Procurement Policy",
    href: "/assets/images/policies/21.HPL's Green Procurement Policy.pdf",
  },
     {
    number: 22,
    title: "HPL's Supplier Code of Conduct",
    href: "/assets/images/policies/22.HPL's Supplier Code of Conduct.pdf",
  },
     {
    number: 23,
    title: "Sustainable Supply Chain Policy",
    href: "/assets/images/policies/23.Sustainable Supply Chain Policy.pdf",
  },
     {
    number: 24,
    title: "Living Wage Practice",
    href: "/assets/images/policies/24.Living Wage Practice.pdf",
  },
     {
    number: 25,
    title: "Fair Labour Practice",
    href: "/assets/images/policies/25.Fair Labour Practice.pdf",
  },
     {
    number: 26,
    title: "Code of Conduct- HPL",
    href: "/assets/images/policies/26.Code of Conduct- HPL.pdf",
  },
     {
    number: 27,
    title: "Corporate Governance Policy",
    href: "/assets/images/policies/27.Corporate Governance Policy.pdf",
  },
     {
    number: 28,
    title: "Anti Bribery and Anticorruption Policy",
    href: "/assets/images/policies/28.Anti Bribery and Anticorruption Policy.pdf",
  },
     {
    number: 29,
    title: "CSR POLICY - HPLA  - amended",
    href: "/assets/images/policies/29.CSR POLICY - HPLA  - amended.pdf",
  },   {
    number: 30,
    title: "Code for Independent Directors",
    href: "/assets/images/policies/30.Code for Independent Directors.pdf",
  },
     {
    number: 31,
    title: "Annual General Meeting Notice-FY 2024-25",
    href: "/assets/images/policies/31.Annual General Meeting Notice-FY 2024-25.pdf",
  },
     {
    number: 32,
    title: "Annual General Meeting Notice-FY 2023-24",
    href: "/assets/images/policies/32.Annual General Meeting Notice-FY 2023-24.pdf",
  },
     {
    number: 33,
    title: "Annual General Meeting Notice-FY 2022-23",
    href: "/assets/images/policies/33.Annual General Meeting Notice-FY 2022-23.pdf",
  },
     {
    number: 34,
    title: "Annual General Meeting Notice-FY 2021-22",
    href: "/assets/images/policies/34.Annual General Meeting Notice-FY 2021-22.pdf",
  },
     {
    number: 35,
    title: "Annual General Meeting Notice-FY 2020-21",
    href: "/assets/images/policies/35.Annual General Meeting Notice-FY 2020-21.pdf",
  },
     {
    number: 36,
    title: "Annual Returns  Form MGT_7- FY 2023-24",
    href: "/assets/images/policies/36.Annual-Returns-Form-MGT-7-FY-2023-24.pdf",
  },
     {
    number: 37,
    title: "Annual Returns  Form MGT_7- FY 2022-23",
    href: "/assets/images/policies/37.Annual-Returns-Form-MGT-7-FY-2022-23.pdf",
  },   {
    number: 38,
    title: "Annual Returns  Form MGT_7- FY 2021-22",
    href: "/assets/images/policies/38.Annual-Returns-Form-MGT-7-FY-2021-22.pdf",
  },   {
    number: 39,
    title: "Annual Returns  Form MGT_7- FY 2020-21",
    href: "/assets/images/policies/39.Annual-Returns-Form-MGT-7-FY-2020-21.pdf",
  },
];

export default function PoliciesPage() {

  return (
    <main>
      <div className="relative">
        <Image
          src="/assets/images/about/policies/Banner.jpg"
          alt="Banner Image"
          className="w-full h-auto object-cover"
          width={1920}
          height={500}
        />
        <p className="absolute text-3xl px-4 lg:text-6xl text-white text-center w-full bottom-1/3 lg:bottom-1/2">
          Policies
        </p>
      </div>
      <div className="bg-gradient-to-tl lg:mt-8 pb-8 lg:pb-16 from-blue-200 to-transparent to-50%">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 py-8 lg:py-16">
            <Image
              src="/assets/images/about/policies/Image 1.png"
              alt="About Us"
              width={800}
              height={600}
              className="w-full object-cover"
            />
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-medium text-gray-600 flex items-center gap-2">
                  Our Policies
                  <span className="w-28 h-1 ml-3 bg-theme" />
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  Smart Additives for Smarter Solutions
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                At HPL Additives, we are committed to delivering world-class
                chemical additives that enhance product performance across
                industries. With a strong foundation in innovation, compliance,
                and sustainability, our practices are governed by transparency
                and trust. From quality management to ethical operations, every
                step we take reflects our dedication to excellence and
                environmental responsibility.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-x-20">
            {policies.map((policy) => (
              <div
                key={policy.number}
                className="flex items-center border-b font-medium border-theme"
              >
                <span className="font-medium mr-2 text-gray-600">
                  {policy.number}.
                </span>
                <div className="flex justify-between gap-2 items-center w-full">
                  <span className="font-medium text-gray-800">
                    {policy.title}
                  </span>
                  <Link
                    href={`/pdf/${encodeURIComponent(policy.href.split('/').pop() as string)}`}
                    className="flex items-center gap-1 bg-theme py-1 px-4 text-white text-lg font-semibold hover:cursor-pointer"
                  >
                    <File size={16} className="inline mr-2" />Read
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
