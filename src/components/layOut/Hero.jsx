import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      img: "https://cdn.pixabay.com/photo/2017/06/25/19/39/connective-tissue-2441725_1280.jpg",
      title: "Relaxation",
      subtitle: "No longer beyond your budget",
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/07/30/13/41/ai-generated-8932302_1280.jpg",
      title: "Luxury Wellness",
      subtitle: "Experience premium spa therapy",
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/07/30/13/41/ai-generated-8932307_1280.jpg",
      title: "Mind & Body Healing",
      subtitle: "Calm your mind and rejuvenate your body",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        >
          <img
            src={slide.img}
            alt="hero"
            className="w-full h-full object-cover animate-zoomSlow"
          />
        </div>
      ))}

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-[cursive]">
          {slides[current].title}
        </h1>
        <p className="text-white text-lg md:text-2xl mt-4">
          {slides[current].subtitle}
        </p>
      </div>
    </div>
  );
}
