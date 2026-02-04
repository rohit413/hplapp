import { CSR_SECTION } from "@/constants/HOME_PAGE";
import { ArrowRight } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";

const { heading, title, description, image, buttonText, buttonLink } =
  CSR_SECTION;

interface CSRSectionProps {
  className?: string;
}

export default function CSRSection({ className }: CSRSectionProps) {
  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-20 max-w-8xl text-center">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#333333] mb-12">
          CSR Chronicles
        </h2>

        <Image
          src={image}
          alt="CSR Banner"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
