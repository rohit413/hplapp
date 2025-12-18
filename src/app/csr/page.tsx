import { csrPrograms } from "@/constants/csr/CSR_LIST";
import CSRSection from "@/page/homePage/CSRSection";
import { ArrowRight, Heart, Shield, Droplet, BookOpen } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

export default function CsrPage() {
  return (
    <main className="pb-1">
      
      {/* Header Section in Green */}
      <div className="bg-[#6db921] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4">
                Corporate Social<br />Responsibility
              </h1>
            </div>
            <div className="w-full lg:w-1/2 text-left">
              <p className="text-xl lg:text-2xl font-medium mb-6">
                Committed to Community
              </p>
              <p className="text-lg leading-relaxed">
                At HPL, our commitment goes beyond business. We actively work to uplift communities in rural Haryana by ensuring access to basic necessities—clean drinking water, proper sanitation, and robust healthcare—to foster health and build a sustainable future for all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section After Header */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 mb-8 text-center">
            We are committed to uplifting communities by focusing on key areas that foster development, health, and sustainability.
          </p>
          <Image
            src="/assets/images/csr/gurudwara-cover.png"
            alt="CSR Activities"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg mx-auto"
          />
        </div>
      </section>

      <CSRSection className="flex flex-col-reverse !py-8 lg:!py-8 gap-y-8 lg:gap-y-16" />

      

      <div className="container mx-auto mt-8 lg:mt-16 px-4 gap-8 space-y-8">
        {/* Introductory Body Text */}
        <section className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Going Above and Beyond:</h2>
          <p className="mb-6 text-gray-700">
            Our commitment to Corporate Social Responsibility means dedicating ourselves to the betterment of the less fortunate. We have built strong partnerships with organizations like Prayas Social Welfare Society, Plan India, and PHD Rural Development, positively impacting the lives of women and children through education, sanitation, and essential support.
          </p>
          <h2 className="text-2xl font-semibold mb-4">The HPL Foundation:</h2>
          <p className="mb-6 text-gray-700">
            To deepen our impact, we established the HPL Foundation, our dedicated CSR Trust. Its core mission is to guarantee quality education, healthcare, sanitation, and access to clean drinking water for underprivileged communities near our facilities in Haryana and Punjab.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Impact and Action:</h2>
          <p className="mb-6 text-gray-700">
            Through the Foundation, we have already installed RO plants and constructed hygienic men's and women's toilets in over 10 villages lacking access to these vital facilities. Furthermore, we constructed the Pushp Vihar Gurudwara with a Free Diagnostic Center (in partnership with Dr Lal Pathlabs), providing free healthcare services like X-rays, Ultrasounds, Diagnostic Tests, and Dental Care.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Promise:</h2>
          <p className="mb-6 text-gray-700">
            We are dedicated to ensuring that our CSR efforts continue to expand, providing communities with the necessary services and facilities to raise their standard of living. Our commitment is to go beyond expectations.
          </p>
        </section>


        {/* Providing Access to Clean Drinking Water & Toilets */}
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            Providing Access to Clean Drinking Water & Toilets
          </h2>
          <p className="text-xl font-medium mb-6">
            Hygiene First: Clean Water, Safe Sanitation, Healthier Communities
          </p>
          <p className="text-gray-700 leading-relaxed">
            Launched through the HPL Foundation, the "Clean Water Drive" is a critical initiative providing sustainable clean drinking water facilities. We achieve this by installing RO plants, water coolers, and other essential amenities in villages near our factories in Faridabad, Ballabgarh, and Palwal. These efforts directly benefit underprivileged children, women, and men in the communities.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Complementing this, HPL is strongly committed to improving hygiene and sanitation by constructing and renovating safe toilet facilities in village schools. This integrated approach significantly boosts community health and supports our broader contributions to the health and education sectors.
          </p>
        </section>

        {/* HPL in the Headlines */}
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            HPL in the Headlines
          </h2>
          <p className="text-xl font-medium mb-6">
            Our Impact Recognized
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We invite you to read about our dedicated efforts and how our foundation's projects—from well-being initiatives to educational support—have been highlighted by leading print and digital media outlets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Image
              src="/assets/images/csr/gurudwara-cover.png"
              alt="Media Coverage 1"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/phd-cover.png"
              alt="Media Coverage 2"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/plan-cover.png"
              alt="Media Coverage 3"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/prayas-cover.png"
              alt="Media Coverage 4"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/skill-cover.png"
              alt="Media Coverage 5"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/surjit-cover.png"
              alt="Media Coverage 6"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Our CSR Partners (Previous Projects) */}
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            Our CSR Partners (Previous Projects)
          </h2>
          <p className="text-xl font-medium mb-6">
            Trusted Partnerships
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We are proud to have collaborated with and be recognized by reputable institutions and organizations, demonstrating the credibility and reach of the HPL Foundation's social commitments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {csrPrograms.map((program, index) => (
              <Link
                key={index}
                href={program.link}
                className="block bg-white rounded-lg hover:scale-105 shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <Image
                  src={program.image}
                  alt={program.alt}
                  width={600}
                  height={345}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="h-1 w-16 bg-green-600 mb-2"></div>
                  <h3 className="text-lg font-semibold text-green-600">
                    {program.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* The CSR Gallery */}
        <section className="p-8">
          <h2 className="text-3xl font-bold mb-4">
            The CSR Gallery
          </h2>
          <p className="text-xl font-medium mb-6">
            Our Work in Action
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            We invite you to view our photo gallery to see the real-world impact of your support. From clean water installations to school renovations, these images capture the dedication and joy behind every HPL Foundation project.
          </p>
          {/* Gallery Images - using images from the folders */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Image
              src="/assets/images/csr/phd-rural/1.jpg"
              alt="PHD Rural Development Project"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/skill-csr/1.jpg"
              alt="Skill Development Initiative"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/surjit/1.jpg"
              alt="Surjit Wasu Memorial Trust"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/phd-rural/2.jpg"
              alt="Rural Development Activities"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/skill-csr/2.jpg"
              alt="Training Programs"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/surjit/2.jpg"
              alt="Community Support"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/phd-rural/3.jpg"
              alt="Water Facilities"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
            <Image
              src="/assets/images/csr/skill-csr/3.jpg"
              alt="Educational Support"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
