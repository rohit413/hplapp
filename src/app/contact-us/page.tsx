import ContactForm from "@/page/contactUs/form";
import Link from "next/link";
import { MapPin, Mail, Phone, Printer } from "feather-icons-react";

// Constant for office data
const officeData = {
  corporateOffice: {
    address: "HPL Additives Limited 5th Floor, Block A Vatika Mindscapes 12/3, Main Mathura Road",
    email: "hpla@hpladditives.com, careers@hpladditives.com",
    phone: "+91 129-2251300",
    fax: "+91 129-2251304 / 05",
  },
  globalOffices: [
    {
      country: "USA",
      address:
        "High Polymer Labs, Inc. 21, Sagamore Lane, Dix Hills, NY 11746, USA",
      tell: "+1 631 643 5714 | Fax: +1 631 643 5715",
      mobile: "+1 516 884 7095",
      email: "amar.singh@hpladditives.com",
    },
    {
      country: "CHINA",
      address:
        "HPL Additives Ltd. RM 403, Block 26, Diecuiyuan, HuaNan, Biguiyuan, Nancun Town, Panyu, Guangzhou",
      mobile: null,
      email: 'hpla@hpladditives.com',
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-gray-50 pb-10">
      {/* Header Section */}
      <div className="bg-[#6db921] w-full py-16 lg:py-20 px-6 lg:px-20">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide">
            Contact Us
          </h1>
          <p className="text-white text-sm lg:text-base max-w-xl text-center lg:text-right leading-relaxed font-medium">
            Reach out to HPL Additives for product inquiries, partnerships, or support. With offices in India, the USA, and China, their team is ready to connect and assist you worldwide.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 -mt-10 lg:-mt-16 relative z-10 space-y-16">

        {/* Contact Form Section */}
        <ContactForm />

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-10">
          {[
            {
              icon: MapPin,
              title: "Corporate Office",
              content: officeData.corporateOffice.address,
              href: undefined
            },
            {
              icon: Mail,
              title: "Email Address",
              content: officeData.corporateOffice.email.replace(",", "\n"),
              href: `mailto:${officeData.corporateOffice.email.split(',')[0].trim()}`
            },
            {
              icon: Phone,
              title: "Phone Number",
              content: officeData.corporateOffice.phone,
              href: `tel:${officeData.corporateOffice.phone}`
            },
            {
              icon: Printer,
              title: "Fax Address",
              content: officeData.corporateOffice.fax,
              href: undefined
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 pt-12 shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col items-center text-center group mt-8 lg:mt-0">
              <div className="absolute -top-8 w-16 h-16 rounded-full bg-[#6db921] flex items-center justify-center border-4 border-gray-50 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">{item.title}</h3>
              {item.href ? (
                <Link href={item.href} className="text-sm text-gray-600 hover:text-[#6db921] transition-colors leading-relaxed whitespace-pre-line">
                  {item.content}
                </Link>
              ) : (
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Global Offices Section */}
        <div className="bg-gray-100 rounded-3xl p-8 lg:p-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#6db921] mb-8">Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {officeData.globalOffices.map((office, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-black mb-4 uppercase">{office.country}</h3>
                <div className="text-gray-600 text-sm space-y-2 leading-relaxed">
                  <p>{office.address}</p>
                  {office.tell && <p>{office.tell}</p>}
                  {office.mobile && <p>Mobile : {office.mobile}</p>}
                  {office.email && <p>Email : {office.email}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[400px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.091266737094!2d77.3029731!3d28.4788595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc093ae899affd4a3!2sVatika%20Mindscapes!5e0!3m2!1sen!2sin!4v1602671532733!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HPL Additives Location"
          ></iframe>
        </div>

      </div>
    </main>
  );
}
