"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/Modal";
import { Carousel } from "@/components/Carousel";
import SectionHeadline from "@/components/common/SectionHeadline";

const events = [
  {
    title: "PLAST INDIA",
    sections: [

      {
        subtitle: "PlastIndia (2026) | Responsible innovation inspired by nature.",
        images: [
          "/assets/images/events/pi2026-1.jpg",
          "/assets/images/events/pi2026-3.jpg",
        ],
        carouselImages: [
          "/assets/images/events/pi2026-4.jpg",
          "/assets/images/events/pi2026-5.jpg",
          "/assets/images/events/pi2026-6.jpg",
          "/assets/images/events/pi2026-7.jpg",
          "/assets/images/events/pi2026-8.jpg",
          "/assets/images/events/pi2026-9.jpg",
          "/assets/images/events/pi2026-10.jpg",
          "/assets/images/events/pi2026-11.jpg",
          "/assets/images/events/pi2026-12.jpg",
        ],
      },
      {
        subtitle: "New Delhi, India (2023)",
        images: [
          "/assets/images/events/p234.jpg",
          "/assets/images/events/p232.jpg",
        ],
        carouselImages: [
          "/assets/images/events/p231.jpg",
          "/assets/images/events/p232.jpg",
          "/assets/images/events/p233.jpg",
          "/assets/images/events/p234.jpg",
        ],
      },
      {
        subtitle: "Gandhinagar, India (2018)",
        images: [
          "/assets/images/events/big03.jpg",
          "/assets/images/events/big06.jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01.jpg",
          "/assets/images/events/big02.jpg",
          "/assets/images/events/big03.jpg",
          "/assets/images/events/big04.jpg",
          "/assets/images/events/big05.jpg",
          "/assets/images/events/big06.jpg",
          "/assets/images/events/big07.jpg",
          "/assets/images/events/big08.jpg",
          "/assets/images/events/big09.jpg",
          "/assets/images/events/big10.jpg",
        ],
      },
      {
        subtitle: "New Delhi, India (2012)",
        images: [
          "/assets/images/events/big02(1).jpg",
          "/assets/images/events/big04(1).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big02(1).jpg",
          "/assets/images/events/big04(1).jpg",
          "/assets/images/events/big05(1).jpg",
          "/assets/images/events/big07(1).jpg",
          "/assets/images/events/big09(1).jpg",
          "/assets/images/events/big10(1).jpg",
          "/assets/images/events/big12(1).jpg",
          "/assets/images/events/big13(1).jpg",
          "/assets/images/events/big18.jpg",
        ],
      },
      {
        subtitle: "New Delhi, India (2010)",
        images: [
          "/assets/images/events/plastindia2010.png",
          "/assets/images/events/big08(2).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(2).jpg",
          "/assets/images/events/big02(2).jpg",
          "/assets/images/events/big03(2).jpg",
          "/assets/images/events/big04(2).jpg",
          "/assets/images/events/big06(2).jpg",
          "/assets/images/events/big07(2).jpg",
          "/assets/images/events/big08(2).jpg",
          "/assets/images/events/big12(2).jpg",
          "/assets/images/events/big16(2).jpg",
          "/assets/images/events/big21.jpg",
          "/assets/images/events/big26.jpg",
          "/assets/images/events/big28.jpg",
        ],
      },
    ],
  },
  {
    title: "K SHOW",
    sections: [
      {
        subtitle: "Dusseldorf, Germany (2019)",
        images: [
          "/assets/images/events/kshow2022a.jpeg",
          "/assets/images/events/kshow2022b.jpeg",
        ],
        carouselImages: [
          "/assets/images/events/kshow2022a.jpeg",
          "/assets/images/events/kshow2022b.jpeg",
          "/assets/images/events/kshow2022c.jpeg",
          "/assets/images/events/kshow2022d.jpeg",
          "/assets/images/events/kshow2022e.jpeg",
          "/assets/images/events/kshow2022f.jpeg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2016)",
        images: [
          "/assets/images/events/big133.jpg",
          "/assets/images/events/big144.jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(3).jpg",
          "/assets/images/events/big144.jpg",
          "/assets/images/events/big16.jpg",
          "/assets/images/events/big144.jpg",
          "/assets/images/events/big15(1).jpg",
          "/assets/images/events/big16(3).jpg",
          "/assets/images/events/big17.jpg",
          "/assets/images/events/big18(1).jpg",
          "/assets/images/events/big19.jpg",
          "/assets/images/events/big20.jpg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2013)",
        images: [
          "/assets/images/events/big04(4).jpg",
          "/assets/images/events/big06(4).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(4).jpg",
          "/assets/images/events/big02(4).jpg",
          "/assets/images/events/big03(4).jpg",
          "/assets/images/events/big04(4).jpg",
          "/assets/images/events/big06(4).jpg",
          "/assets/images/events/big07(4).jpg",
          "/assets/images/events/big08(4).jpg",
          "/assets/images/events/big10(3).jpg",
          "/assets/images/events/big11.jpg",
          "/assets/images/events/big14(2).jpg",
          "/assets/images/events/big15(1).jpg",
          "/assets/images/events/big16(3).jpg",
          "/assets/images/events/big17(1).jpg",
          "/assets/images/events/big18(2).jpg",
        ],
      },
      {
        subtitle: "Dusseldorf, Germany (2010)",
        images: [
          "/assets/images/events/big03(5).jpg",
          "/assets/images/events/big05(3).jpg",
        ],
        carouselImages: [
          "/assets/images/events/big01(4).jpg",
          "/assets/images/events/big02(5).jpg",
          "/assets/images/events/big03(5).jpg",
          "/assets/images/events/big04(5).jpg",
          "/assets/images/events/big05(3).jpg",
          "/assets/images/events/big06(4).jpg",
          "/assets/images/events/big07(5).jpg",
          "/assets/images/events/big08(4).jpg",
          "/assets/images/events/big10(3).jpg",
        ],
      },
    ],
  },
];

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = ({
    images,
    title,
  }: {
    images: string[];
    title: string;
  }) => {
    setSelectedImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
    setModalTitle("");
  };

  return (
    <>
      <section className="growthAdditivesBanner">
        <div>
          <Image
            src="/assets/images/events/hplevent2023.jpg"
            alt="Growth Additives Banner"
            width={1920}
            height={400}
            className="w-full"
          />
        </div>
      </section>
      <SectionHeadline
        description="At HPL Additives, our presence at global events and trade shows reflects our commitment to innovation, collaboration, and excellence These platforms allow us to engage with industry leaders, share breakthroughs, and build lasting relationships that drive progress in the chemical and additive sectors"
        heading="Our Events"
        title="Showcasing Innovation, Strengthening Connections."
        className="my-8 container lg:my-16"
      />
      {/* 55th National Safety Week 2026 Section */}
      <div className="container mb-8 lg:mb-16 flex flex-col lg:flex-row gap-6">
        {/* Left Side: Details Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:w-[40%] flex flex-col">
          <Image
            src="/assets/images/logo.png"
            alt="HPL Additives"
            width={160}
            height={60}
            className="mb-8 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
            55th National<br />Safety Week 2026
          </h2>
          <p className="text-gray-500 font-medium mb-6 text-lg">Empowering a Culture of Care</p>
          <p className="font-bold text-gray-900 mb-6 text-lg">4 March - 14 March 2026</p>

          <div className="bg-[#f0f9f0] text-[#2e7d32] font-semibold p-4 rounded-xl mb-8">
            Theme: "Engage, Educate & Empower People to Enhance Safety"
          </div>

          <div className="space-y-4 flex-grow">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900 text-[17px]">Awareness Campaign</h3>
              <p className="text-gray-600 text-sm mt-1">Safety banners and posters across plant premises.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900 text-[17px]">Collective Safety Pledge</h3>
              <p className="text-gray-600 text-sm mt-1">Unified commitment to a hazard-free workplace.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900 text-[17px]">Operational Readiness</h3>
              <p className="text-gray-600 text-sm mt-1">Hands-on drills to strengthen emergency response.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900 text-[17px]">Knowledge in Action</h3>
              <p className="text-gray-600 text-sm mt-1">Safety quiz, exhibition, and prize distribution.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 text-[13px] text-gray-600">
            Thank you to every employee and contractor whose participation helps make HPL a safer place to work every day.
          </div>
        </div>

        {/* Right Side: Image Grid Layer */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:w-[60%]">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 h-full content-start">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div
                key={num}
                className="rounded-xl overflow-hidden h-36 md:h-44 border border-gray-100 relative group cursor-pointer"
                onClick={() => openModal({
                  images: [
                    ...Array.from({ length: 12 }, (_, i) => `/assets/images/events/event2026/${i + 1}.jpeg`),
                    "/assets/images/events/event2026/evenVideo.mp4"
                  ],
                  title: "55th National Safety Week 2026"
                })}
              >
                <Image
                  src={`/assets/images/events/event2026/${num}.jpeg`}
                  alt={`Safety Week Event ${num}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container bg-gray-200 rounded mb-8 lg:mb-16 py-12">
        {events.map((event, index) => (
          <div key={index}>
            <div className="plastheading text-center">
              <h4 className="text-2xl lg:text-4xl text-theme font-bold">
                {event.title}
              </h4>
            </div>
            {event.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="mt-8 border-b border-gray-300 pb-12"
              >
                <p className="text-xl mt-16 font-semibold">
                  {section.subtitle}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                  {section.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="rounded-lg hover:scale-105 transition duration-300 overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${event.title} ${section.subtitle}`}
                        width={400}
                        height={300}
                        className="size-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition duration-300 size-full"
                    onClick={() =>
                      openModal({
                        images: section.carouselImages,
                        title: section.subtitle,
                      })
                    }
                  >
                    <div className="size-full relative">
                      <Image
                        src={section.carouselImages[2] || section.images[0]}
                        alt={`${event.title} ${section.subtitle}`}
                        width={400}
                        height={300}
                        className="size-full object-cover"
                      />
                      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-70 font-semibold transition-opacity">
                        <div className="text-white text-lg">View More.....</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        title={modalTitle}
        size="md"
        className="max-w-[95vw] lg:max-w-[60vw]"
        cancelHandler={closeModal}
      >
        <Carousel settings={carouselSettings}>
          {selectedImages.map((img, index) => (
            <div key={index} className="max-h-[80vh] flex items-center justify-center">
              {img.endsWith('.mp4') ? (
                <video
                  controls
                  className="max-h-[80vh] w-full object-contain"
                  style={{ maxHeight: '80vh' }}
                >
                  <source src={img} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={img}
                  alt={`${modalTitle} media ${index + 1}`}
                  width={600}
                  height={400}
                  className="size-full object-contain"
                />
              )}
            </div>
          ))}
        </Carousel>
      </Modal>
    </>
  );
}
