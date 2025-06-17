import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import { useState } from 'react';

const MySlider = () => {
  const projects = [
    {
      title: 'Eido',
      description:
        'AI-powered EdTech platform with OCR integration for automated quiz and flashcard generation from scanned course materials. Full-stack entrepreneurial project built with a 6-person development team.',
      image: 'Eido-480.webp',
      link: 'https://eido-edu.com',
    },
    {
      title: 'Grafana Dashboard',
      description:
        'Custom Grafana observability stack with multi-source data ingestion (Prometheus metrics, Loki logs, Jaeger traces). Implemented advanced PromQL queries and templated variables for dynamic filtering and alerting.',
      image: 'grafana.webp',
    },
  ];

  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === projects.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return projects.length - 1;
      return index - 1;
    });
  }

  const slides = projects.map((project, index) => {
    const isCurrentSlide = index === imageIndex;
    const hasLink = project.link && project.link.trim() !== '';

    const slideContent = (
      <>
        <img
          key={`${project.title}-img-${index}`}
          srcSet={`/${project.image} 480w,
           /${project.image.replace('-480.webp', '-800.webp')} 800w,
           /${project.image.replace('-480.webp', '-1200.webp')} 1200w`}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          fetchPriority={isCurrentSlide ? 'high' : 'low'}
          loading={isCurrentSlide ? 'eager' : 'lazy'}
        />
        <div
          key={`${project.title}-content-${index}`}
          className="absolute bottom-0 left-0 right-0 bg-black/70 text-white pb-7 sm:pb-8 md:pb-10 pt-3 px-5 transform transition-all duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
        >
          <h3 className="text-sm sm:text-base font-semibold mb-1">{project.title}</h3>
          <p className="text-xs sm:text-sm opacity-90 font-light line-clamp-2">{project.description}</p>
        </div>
      </>
    );

    return {
      slide: hasLink ? (
        <a
          key={`${project.title}-${index}`}
          className="w-full h-full flex-shrink-0 flex-grow-0 block relative transition-transform duration-300 ease-in-out cursor-pointer group"
          style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          href={project.link}
          tabIndex={imageIndex === index ? 0 : -1}
          aria-label={`Ouvrir le projet ${project.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {slideContent}
        </a>
      ) : (
        <div
          key={`${project.title}-${index}`}
          className="w-full h-full flex-shrink-0 flex-grow-0 block relative transition-transform duration-300 ease-in-out group"
          style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          tabIndex={imageIndex === index ? 0 : -1}
          aria-label={`Voir le projet ${project.title}`}
        >
          {slideContent}
        </div>
      ),
      indicator: (
        <button
          type="button"
          key={`${index}-${imageIndex}`}
          className="block cursor-pointer w-6 h-6 mr-2 transition-transform duration-100 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none"
          aria-label={`View Image ${index + 1}`}
          onClick={() => setImageIndex(index)}
        >
          {index === imageIndex ? (
            <CircleDot className="stroke-white fill-black h-5 w-5" />
          ) : (
            <Circle className="stroke-white fill-black h-5 w-5" />
          )}
        </button>
      ),
    };
  });

  return (
    <div className="max-w-5xl w-full mx-auto p-4">
      <div
        aria-label="Image Slider"
        className="w-full h-full relative aspect-[10/6] rounded-lg overflow-hidden slider-container"
      >
        <div className="w-full h-full flex overflow-hidden">{slides.map(({ slide }) => slide)}</div>
        <button
          type="button"
          onClick={showPrevImage}
          className="absolute left-0 top-0 bottom-0 px-2 sm:px-4 cursor-pointer transition-colors duration-100 hover:bg-gradient-to-l hover:from-black/30 hover:to-transparent focus-visible:bg-gradient-to-l focus-visible:from-black/30 focus-visible:to-transparent focus-visible:outline-none group z-10"
          aria-label="View Previous Image"
        >
          <ChevronLeft
            className="w-8 h-8 stroke-white fill-black group-hover:animate-pulse group-focus-visible:animate-pulse drop-shadow-lg"
            aria-hidden
          />
        </button>

        <button
          type="button"
          onClick={showNextImage}
          className="absolute right-0 top-0 bottom-0 px-2 sm:px-4 cursor-pointer transition-colors duration-100 hover:bg-gradient-to-r hover:from-black/30 hover:to-transparent focus-visible:bg-gradient-to-r focus-visible:from-black/30 focus-visible:to-transparent focus-visible:outline-none group z-10"
          aria-label="View Next Image"
        >
          <ChevronRight
            className="w-8 h-8 stroke-white fill-black group-hover:animate-pulse group-focus-visible:animate-pulse drop-shadow-lg"
            aria-hidden
          />
        </button>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
          {slides.map(({ indicator }) => indicator)}
        </div>
      </div>
    </div>
  );
};

export default MySlider;
