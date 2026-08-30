import { Briefcase, Mail, MapPin } from "feather-icons-react";
import { ElementType } from "react";

interface Requirement {
  icon: ElementType;
  text: string;
}

interface JobOpeningCardProps {
  title: string;
  highlight: string;
  experience: string;
  location: string;
  industry: string;
  email: string;
  requirements: Requirement[];
}

export default function JobOpeningCard({
  title,
  highlight,
  experience,
  location,
  industry,
  email,
  requirements,
}: JobOpeningCardProps) {
  const applyHref = `mailto:${email}?subject=${encodeURIComponent(
    `Application for ${title} ${highlight}`
  )}`;
  return (
    <div className="rounded-xl shadow-xl overflow-hidden bg-white">
      <div className="bg-theme px-6 py-3 flex flex-wrap items-center justify-between gap-2">
        <span className="text-white font-bold tracking-wide">HIRING!</span>
        <span className="bg-black/80 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
          JOIN OUR GROWING TEAM
        </span>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {title} <span className="text-theme">{highlight}</span>
          </h3>
          <span className="inline-flex items-center gap-2 bg-theme text-white text-sm font-semibold px-4 py-2 rounded-full">
            Experience: {experience}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {requirements.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="shrink-0 bg-theme text-white rounded-full p-2">
                <Icon className="w-4 h-4" />
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="text-theme w-5 h-5 shrink-0" />
            {location}
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Briefcase className="text-theme w-5 h-5 shrink-0" />
            {industry}
          </div>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-gray-700 hover:text-theme transition"
          >
            <Mail className="text-theme w-5 h-5 shrink-0" />
            {email}
          </a>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={applyHref}
            className="bg-theme text-white px-8 py-2 rounded-md hover:bg-theme-dark transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
