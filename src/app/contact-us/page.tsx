import Banner from "@/components/Banner";
import ContactForm from "@/page/contactUs/form";
import Link from "next/link";
import { MapPin, Mail, Phone, Printer } from "feather-icons-react";
import type { FC, SVGProps } from "react";

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

// Info Card Component
function InfoCard({ icon: Icon, title, content, href }: { icon: FC<SVGProps<SVGSVGElement>>; title: string; content: string; href?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
        <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      {href ? (
        <Link href={href} className="text-gray-600 hover:text-green-600 transition-colors">
          {content}
        </Link>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  );
}

// Global Office Card Component
function GlobalOfficeCard({ office }: { office: typeof officeData.globalOffices[0] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      <h3 className="text-2xl font-bold text-green-600 mb-4">{office.country}</h3>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <p className="text-gray-600">{office.address}</p>
        </div>
        {office.tell && (
          <div className="flex items-center gap-3">
            <p className="text-gray-600">Tell : {office.tell}</p>
          </div>
        )}
        {office.mobile && (
          <div className="flex items-center gap-3">
            <p className="text-gray-600">Mobile : {office.mobile}</p>
          </div>
        )}
        {office.email && (
          <div className="flex items-center gap-3">
            <Link href={`mailto:${office.email}`} className="text-gray-600 hover:text-green-600 transition-colors">
            Email :  {office.email}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="">
      <Banner 
        title="Contact Us" 
        description="Reach out to HPL Additives for product inquiries, partnerships, or support. With offices in India, the USA, and China, their team is ready to connect and assist you worldwide."
      />
      <ContactForm />
      
      <div className="py-12 lg:py-20 px-6 lg:px-40 bg-gray-50">
        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard 
              icon={MapPin}
              title="Corporate Office"
              content={officeData.corporateOffice.address}
            />
            <InfoCard 
              icon={Mail}
              title="Email Address"
              content={officeData.corporateOffice.email}
              href={`mailto:${officeData.corporateOffice.email}`}
            />
            <InfoCard 
              icon={Phone}
              title="Phone Number"
              content={officeData.corporateOffice.phone}
              href={`tel:${officeData.corporateOffice.phone}`}
            />
            <InfoCard 
              icon={Printer}
              title="Fax Address"
              content={officeData.corporateOffice.fax}
            />
          </div>
        </section>

        {/* Global Offices Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Global <span className="text-green-600">Offices</span></h2>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeData.globalOffices.map((office, index) => (
              <GlobalOfficeCard key={index} office={office} />
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.091266737094!2d77.3029731!3d28.4788595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc093ae899affd4a3!2sVatika%20Mindscapes!5e0!3m2!1sen!2sin!4v1602671532733!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="HPL Additives Location"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
