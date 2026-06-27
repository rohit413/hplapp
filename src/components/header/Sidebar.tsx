import { useState } from "react";
import { HEADER } from "@/constants/HEADER";
import Link from "next/link";
import { ChevronDown } from "feather-icons-react";

const { MENU } = HEADER;

interface SidebarProps {
  handleToggleClick: () => void;
  navbarOpen: boolean;
}

function Sidebar({ handleToggleClick, navbarOpen }: SidebarProps) {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      aria-labelledby="slide-over-title"
      aria-modal="true"
      className="relative z-10"
      role="dialog"
    >
      <div
        className={`fixed inset-0 overflow-hidden transition-transform delay-300${
          navbarOpen ? " animate-slide-in-left" : ""
        }`}
      >
        <div
          aria-label="Close Button"
          className="absolute left-0 h-full w-full bg-black/55"
          onClick={handleToggleClick}
        />
        <div className="absolute inset-0 z-10 p-4 flex w-[85%] flex-col text-base overflow-hidden bg-white">
          <div className="flex flex-grow flex-col gap-8 overflow-y-auto pb-[14px] pt-5">
            {MENU.map(({ children, url, name, icon: Icon }, index) => (
              <div className="relative" key={name}>
                {children ? (
                  <div onClick={() => toggleMenu(index)} className="flex gap-x-3 items-center">
                    <span className="flex gap-3 hover:text-theme transition-colors cursor-pointer">
                      <Icon />
                      {name}
                    </span>
                    <ChevronDown className={`group-hover:fill-theme transition-all stroke-gray-500 stroke-2 ${openMenuIndex === index ? "rotate-180 -translate-y-0.5" : ""}`} />
                  </div>
                ) : (
                  <div
                    key={url}
                    className="flex items-center group gap-2"
                    onClick={handleToggleClick}
                  >
                    <Icon className="group-hover:text-theme transition-colors" />
                    <Link
                      className="group-hover:text-theme transition-colors"
                      href={url}
                    >
                      {name}
                    </Link>
                  </div>
                )}
                {openMenuIndex === index && !!children?.length && (
                  <div className="flex origin-top flex-col mt-2 h-auto animate-scaleY">
                    {children.map(({ name, url, icon: Icon }) => (
                      <Link
                        key={name}
                        className="py-2 pl-12 pr-4 flex font-medium text-gray-500 transition-all hover:bg-gray-200"
                        href={url}
                        onClick={handleToggleClick}
                      >
                        <Icon className="group-hover:text-theme transition-colors mr-2 size-5" />
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
