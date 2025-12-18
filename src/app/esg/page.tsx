/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { File } from 'feather-icons-react';

const ESGPage = () => {
  return (
    <div>
      <div className="text-center py-4 bg-[#6db921] text-white font-extrabold mb-8">
        <p className="text-2xl font-medium">Building value with integrity and accountability</p>
      </div>
      <div className="container mx-auto mt-8 lg:mt-16 px-4 gap-8 space-y-8">
        <div id="overview" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Overview/ESG at a Glance</h2>
          <p className="mb-6 text-gray-700">
            HPL Additives' ESG drive centres on robust policies, certified management systems (ISO 9001/14001/45001) and transparent reporting (ESG and CDP), backed by third-party GHG assurance. It advances responsible operations via climate, energy, water, waste, supply-chain and human-rights policies; TfS/Eco Vadis audits; and proactive regulatory compliance. Community programs under the HPL Foundation deliver clean water, sanitation and affordable diagnostics in the vicinity of our operational sites. The company emphasizes resource efficiency, safety and stakeholder engagement to balance growth with environmental and social responsibility across India and beyond.
          </p>
          <p className="mb-6 text-gray-700">For more information, please read our latest Sustainability Report.</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("1.HPLA Sustainability Report - FY 2024-25.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Sustainability Report</Link>
          </div>
        </div>

        <div id="environment" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Environment</h2>
          <p className="mb-6 text-gray-700">
            We anchor every decision in environmental protection. We operate an ISO 14001–certified EMS, pursue resource efficiency, and uphold strict waste, climate, and sustainable-supply-chain policies. Beyond our gates, the HPL Foundation advances clean water and sanitation in neighbouring communities. This stewardship—balancing growth with environmental responsibility—guides how we run our plants today and design the products of tomorrow.
          </p>
          <p className="mb-6 text-gray-700">For more information, please read our latest CDP report and Sustainability Report.</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("2.CDP report 2025.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />CDP Report 2025</Link>
            <Link href={`/pdf/${encodeURIComponent("3.CDP Report 2024.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />CDP Report 2024</Link>
            <Link href={`/pdf/${encodeURIComponent("1.HPLA Sustainability Report - FY 2024-25.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Sustainability Report</Link>
          </div>
        </div>

        <div id="people" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">People</h2>
          <p className="mb-6 text-gray-700">
            At HPL, our people are our strength. We run an ISO 45001–driven safety system and rigorously track TRIR/LTIFR to prevent harm, while investing significant training hours for skills and safe work practices. We foster an inclusive, merit-based workplace and uphold dignity at work. Our ongoing certification program for SA 8000 is a testimony of our commitment to continually improve our people centric practices. Our Human Rights Policy guides due diligence across operations and suppliers, alongside stakeholder engagement and sustainable supply-chain standards. This commitment—training, safety, diversity, and rights—anchors how we care for every colleague, every day.
          </p>
          <p className="mb-6 text-gray-700">For more information, please read our Human Rights and Human Resource policies and our Sustainability Report.</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("1.HPLA Sustainability Report - FY 2024-25.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Sustainability Report</Link>
            <Link href={`/pdf/${encodeURIComponent("15.Human Rights Policy.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Human Rights Policy</Link>
            <Link href={`/pdf/${encodeURIComponent("24.Living Wage Practice.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Living Wage Practice</Link>
            <Link href={`/pdf/${encodeURIComponent("25.Fair Labour Practice.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Fair Labour Practice</Link>
          </div>
        </div>

        <div id="csr" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">CSR</h2>
          <p className="mb-6 text-gray-700">
            As HPL, CSR means improving everyday life around our plants. Through the HPL Foundation, we install RO drinking-water systems and gender-segregated toilets across villages in Haryana and Punjab, and support free diagnostics and healthcare at the Pushp Vihar Gurudwara centre. We also back skill-development initiatives, aligning our focus on water, sanitation, health and education with long-term community engagement. Our goal is clear: expand access, raise living standards, and deliver measurable local impact alongside responsible growth.
          </p>
          <p className="mb-6 text-gray-700">For more information, please read our CSR Policy and visit our CSR Page</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("29.CSR POLICY - HPLA  - amended.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />CSR Policy</Link>
            <Link href="/csr" className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center">CSR Page</Link>
          </div>
        </div>

        <div id="ethics" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Ethics</h2>
          <p className="mb-6 text-gray-700">
            As HPL, we anchor our business in ethics, transparency, and robust governance. Our Board—supported by independent directors—oversees strategy, risk, and compliance. We enforce clear policies on corporate governance, anti-bribery/anti-corruption, human rights, stakeholder engagement, and a sustainable supply chain, with ISO-backed management systems. We commit to lawful, responsible conduct across all operations and disclosures, including AGM notices and annual returns, reinforced by ESG reporting and external assurance. This framework safeguards integrity, accountability, and long-term value for all stakeholders.
          </p>
          <p className="mb-6 text-gray-700">For more information, please visit our Code of conduct / Ethics Policy and latest Sustainability Report.</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("1.HPLA Sustainability Report - FY 2024-25.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Sustainability Report</Link>
            <Link href={`/pdf/${encodeURIComponent("26.Code of Conduct- HPL.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Code of Conduct</Link>
            <Link href={`/pdf/${encodeURIComponent("27.Corporate Governance Policy.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Corporate Governance Policy</Link>
            <Link href={`/pdf/${encodeURIComponent("28.Anti Bribery and Anticorruption Policy.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Anti Bribery and Anticorruption Policy</Link>
          </div>
        </div>

        <div id="sustainable-procurement" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Sustainable Procurement</h2>
          <p className="mb-6 text-gray-700">
            As HPL, we build sustainability into procurement. Our Sustainable Supply Chain Policy sets expectations on ethics, environment, and social standards for all suppliers, reinforced by Supplier Code of Conduct, Anti-Bribery, Human Rights policies, Green Procurement Policy and active stakeholder engagement. We prioritise compliant, safe chemistry and work with partners who meet our quality, safety and transparency requirements. This approach helps us secure resilient materials, reduce lifecycle impacts, and create shared value across our value chain.
          </p>
          <p className="mb-6 text-gray-700">For more information, please visit our -Green Procurement Policy and Supplier's code of conduct</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("21.HPL's Green Procurement Policy.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Green Procurement Policy</Link>
            <Link href={`/pdf/${encodeURIComponent("22.HPL's Supplier Code of Conduct.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Supplier Code of Conduct</Link>
            <Link href={`/pdf/${encodeURIComponent("23.Sustainable Supply Chain Policy.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Sustainable Supply Chain Policy</Link>
          </div>
        </div>

        <div id="product-stewardship" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Product Stewardship</h2>
          <p className="mb-6 text-gray-700">
            We build product stewardship into every molecule—from design to delivery. Our Product Safety & Quality Policy, ISO-backed systems, and global regulatory compliance, ensure safe, lawful additives. We drive continuous improvement to cut lifecycle risks and enhance traceability—so our chemistries protect people, the environment, and our customers' reputation.
          </p>
          <p className="mb-6 text-gray-700">For more information, please visit our product carbon footprint reports. <a href="#reports-policies" className="text-green-600 hover:underline">Click here to visit all PCF Reports</a>.</p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href={`/pdf/${encodeURIComponent("4.HPL_PCF_Independent Limited Assurance Statement.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />PCF Assurance Statement</Link>
            <Link href={`/pdf/${encodeURIComponent("5.Independent Limited Assurance Statement -FY 2024-25.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Assurance Statement FY 2024-25</Link>
            <Link href={`/pdf/${encodeURIComponent("6.Independent-Limited-Assurance-Statement-FY 2021-22  FY 2022-23  FY 2023-24.pdf")}`} className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center"><File size={16} className="inline mr-2" />Assurance Statement FY 2021-24</Link>
          </div>
        </div>

        <div id="reports-policies" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Reports & Policies</h2>
          <p className="mb-6 text-gray-700">
            At HPL, policies and disclosures are the backbone of trust. We maintain a suite—Circular Economy; Environment, Energy, Water & Wastewater; Health & Safety; Human Rights; Sustainable Supply Chain; Anti-Bribery; Corporate Governance; Stakeholder Engagement—and publish AGM notices and annual returns. ESG and CDP reporting is backed by independent GHG assurance. ISO 9001/14001/45001 certifications and the Product Safety & Quality Policy anchor disciplined execution. Together, these documents demonstrate transparent, accountable, performance-led operations for stakeholders.
          </p>
          <p className="mb-6 text-gray-700">For more information, please <Link href="/about-policies-notice" className="text-green-600 hover:underline">click here</Link> to visit Report and Policy page.</p>
        </div>

        <div id="grievance-speak-up" className="bg-gray-100 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-4">Grievance & Speak-Up</h2>
          <p className="mb-6 text-gray-700">
            As HPL, we promote a speak-up culture where concerns are welcomed and acted on. Our Stakeholder Engagement and Human Rights policies provide clear avenues for employees, suppliers, and communities to raise issues confidentially and without fear of retaliation. Reports are reviewed promptly, investigated fairly, and corrective actions tracked to closure. Anyone can reach us directly via our published contact channels and web form, ensuring accessibility and transparency. Speaking up helps us strengthen integrity, safety, and trust across our value chain.
          </p>
          <p className="mb-6 text-gray-700">
            For grievances, email: <a href="mailto:grievance.hpla@hpladditives.com" className="text-green-600 hover:underline">grievance.hpla@hpladditives.com</a>
          </p>
          <div className="flex flex-col sm:flex-row justify-end sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href="/contact-us" className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ESGPage;