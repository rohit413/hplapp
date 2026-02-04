import CSRSection from "@/page/homePage/CSRSection";
import { ArrowRight } from "feather-icons-react";
import Image from "next/image";

export default function CsrPage() {
  return (
    <main className="pb-10 bg-white">
      {/* Header Section in Green */}
      <div className="bg-[#6db921] text-white py-12 lg:py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Corporate Social<br />Responsibility
            </h1>
          </div>
          <div>
            <p className="text-lg leading-relaxed font-medium">
              HPL is committed to improving lives by providing rural Haryana with access to clean drinking water and proper sanitation. Through our initiatives, we support the installation of safe water sources and hygienic toilets, promoting better health and a sustainable future for local communities.
            </p>
          </div>
        </div>
      </div>

      {/* Introductory Body Text - Grey Boxed Section */}
      <div className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="bg-gray-100 p-8 lg:p-20 rounded-[40px]">
            <div className="max-w-6xl mx-auto space-y-6 text-gray-700 leading-relaxed text-justify text-sm lg:text-base">
              <p>
                HPL Additives prides itself on its commitment and dedication to ensure that it not only fulfills its Corporate Social Responsibility but goes above and beyond to do as much as it can for the betterment of those less fortunate. HPL Additives has over the years provided support to various organizations such as Prayas Social Welfare Society, Plan India, PHD Rural Development, Prime Minister&apos;s Skill Development Fund etc. Through these organizations, HPL has been able to positively impact the lives of many women and children by providing them with education, launching mobile healthcare drives, financial support, and sanitation.
              </p>
              <p>
                HPL Additives has now created a separate CSR Trust known as HPL Foundation with the mission to ensure quality education, healthcare, sanitation and access to clean drinking water to the underprivileged communities surrounding our plants and offices located in Haryana and Punjab. Under HPL Foundation, we started installing RO plants to provide access to clean drinking water, building toilets for both men and women to ensure proper hygiene and sanitation in over 10 villages that did not have access to either.
              </p>
              <p>
                Furthermore, prior to this, under HPL Foundation, we have already constructed the Pushp Vihar Gurudwara with a Free Diagnostic Center (in oratorship with Dr Lal Pathlabs) that will provide the underprivileged with free of cost healthcare that includes services like X-rays, Ultrasounds, Diagnostic Tests, Dental Care, Feminine Care etc.
              </p>
              <p>
                Going forward, we are going to continue to serve communities around us by ensuring they have access to all the necessary services and facilities to better their standard of living. We are completely dedicated to ensure that our corporate social responsibility goes beyond what is expected of us!
              </p>

              {/* Focus Areas Section */}
              <div className="pt-16 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-12">
                  Our Current focus areas and on going projects include
                </h2>
                <div className="flex justify-center">
                  <Image
                    src="/assets/images/csr/focus-areas.png"
                    alt="Focus Areas: Good Health, Sanitation, Clean Water, Quality Education, Sustainable Communities"
                    width={1000}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Current CSR Projects Section - White Background */}
      <div className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#333333] mb-8">Our Current CSR Projects</h2>
          <button className="bg-[#6db921] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#5ca01b] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1 duration-300">
            Click here to view current project
          </button>
        </div>
      </div>

      {/* Providing Access to Clean Drinking Water & Toilets - Grey Background */}
      <div className="bg-gray-100 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Providing Access to Clean Drinking Water & Toilets
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-gray-700 text-sm lg:text-base leading-relaxed text-justify">
              <p>
                &quot;Clean Water Drive&quot; has been launched by the company through its charitable trust, HPL Foundation wherein clean drinking water facility through installation of RO plants, water coolers and other such amenities would be made available in the villages near its factories at Faridabad, Ballabgarh and Palwal for the underprivileged children, women and men of the villages.
              </p>
              <p>
                Additionally, the company could also construct toilets and improve hygiene and sanitization in the schools of the villages, apart from their contribution in health and education sector.
              </p>
            </div>
          </div>

          {/* Village Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Village- Dadsiya & Gazipur",
              "Village- Dabua Gaon & Mahawatpur",
              "Village- Baroli & Adarsh Nagar",
              "Shahpur Khurd & Bapu Nagar",
              "Village- Palwal & Khajurka",
              "Village- Sehrawak & Sector-3"
            ].map((village, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#9ca3af] py-3 px-4">
                  <h3 className="text-white font-bold text-lg text-center">{village}</h3>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between items-center text-center">
                  <p className="text-gray-600 mb-6">
                    (Water Booth & Installation of RO Plant With Water Cooler Facilities & Construction of Toilets)
                  </p>
                  <button className="bg-[#6db921] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5ca01b] transition-colors flex items-center gap-2">
                    View Images
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSR Appreciation in the NEWS Section - White Background */}
      <div className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-20 max-w-8xl text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#333333] mb-12">
            CSR appreciation in the NEWS
          </h2>
          <div className="w-full flex justify-center">
            <Image
              src="/assets/images/csr/news-banner.jpg"
              alt="CSR Appreciation in the News"
              width={1200}
              height={600}
              className="w-full max-w-8xl h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Partners Section (CSR Appreciation in the NEWS) - Grey Background */}
      <div className="bg-gray-100 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-20 max-w-7xl">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#333333] mb-12 text-center">
            CSR appreciation in the NEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Surjit Wasu Memorial\nCharitable Trust (Regd.)",
                image: "/assets/images/csr/surjit-cover.png"
              },
              {
                title: "Prayas Social Welfare\nSociety (Regd.)",
                image: "/assets/images/csr/prayas-cover.png"
              },
              {
                title: "Prime Minister's Skill\nDevelopment",
                image: "/assets/images/csr/skill-cover.png"
              },
              {
                title: "Plan International\n(India Chapter)",
                image: "/assets/images/csr/plan-cover.png"
              },
              {
                title: "Gurudwara Pushp Vihar",
                image: "/assets/images/csr/gurudwara-cover.png"
              },
              {
                title: "PHD Rural\nDevelopment Foundation",
                image: "/assets/images/csr/phd-cover.png"
              }
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-[#6db921] flex flex-col hover:scale-105 transition-transform duration-300">
                <div className="flex-grow bg-[#1a3668] flex items-center justify-center p-0 min-h-[250px]">
                  <Image
                    src={partner.image}
                    alt={partner.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#6db921] py-4 px-6 flex items-center justify-center h-24">
                  <h3 className="text-white text-lg font-medium text-center whitespace-pre-line leading-tight">
                    {partner.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSR Chronicles Section */}
      <CSRSection />

    </main>
  );
}
