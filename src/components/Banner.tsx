interface BannerProps {
  title?: string;
  description?: string;
}

export default function Banner({ title, description }: BannerProps) {
  return (
    <div className="bg-theme px-4 lg:px-20 font-semibold text-2xl lg:text-4xl text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h1 className="text-left">{title}</h1>
        {description && (
          <p className="text-sm lg:text-[17px] font-normal text-white/90 text-left lg:text-left max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
