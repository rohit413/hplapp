"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, PlayCircle } from "feather-icons-react";
import { Modal } from "@/components/Modal";

type View = "announcement" | "video" | null;

const buttonClass =
  "inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors text-center";

export default function CdpDisclosure() {
  const [view, setView] = useState<View>(null);
  const close = () => setView(null);

  return (
    <>
      <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden border-l-4 border-[#e8194a] flex flex-col sm:flex-row">
        <button
          type="button"
          onClick={() => setView("announcement")}
          aria-label="View CDP Discloser 2026 announcement"
          className="shrink-0 sm:w-48 lg:w-56 bg-[#1d232d]"
        >
          <Image
            src="/assets/images/esg/cdp-discloser-2026-badge.jpg"
            alt="CDP Discloser 2026 badge"
            width={1600}
            height={1600}
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 192px, 100vw"
            className="w-full h-auto max-w-56 mx-auto sm:max-w-none"
          />
        </button>
        <div className="p-6 lg:p-8 flex flex-col justify-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[#e8194a]">
            CDP Discloser 2026
          </span>
          <h3 className="text-xl lg:text-2xl font-semibold mt-1 mb-3">
            We have disclosed through CDP in 2026
          </h3>
          <p className="text-gray-700 mb-6">
            HPL Additives has disclosed through CDP for 2026, continuing our commitment to transparent
            environmental reporting. Disclosure helps us measure our impact and make better decisions
            for the planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button type="button" onClick={() => setView("announcement")} className={buttonClass}>
              <ImageIcon size={16} />
              View Announcement
            </button>
            <button type="button" onClick={() => setView("video")} className={buttonClass}>
              <PlayCircle size={16} />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={view !== null}
        title={view === "video" ? "CDP Discloser 2026 – Video" : "CDP Discloser 2026"}
        size="lg"
        backdropClick
        className="w-[95vw] lg:w-auto"
        cancelHandler={close}
      >
        {/* Mount content only while open so the video stops when the modal closes */}
        {view === "announcement" && (
          <Image
            src="/assets/images/esg/cdp-discloser-2026-post.jpg"
            alt="We have disclosed through CDP in 2026 – CDP Discloser 2026"
            width={1280}
            height={1600}
            sizes="(min-width: 1024px) 560px, 95vw"
            className="mx-auto h-auto max-h-[75vh] w-auto"
          />
        )}
        {view === "video" && (
          <video
            src="/assets/images/esg/esg-event-video.mp4"
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="w-full lg:w-[960px] aspect-video max-h-[75vh] bg-black rounded"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </Modal>
    </>
  );
}
