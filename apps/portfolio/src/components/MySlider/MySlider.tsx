import { ChevronLeft, ChevronRight, Circle, CircleDot } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MySlider = () => {
  const { t } = useTranslation();
  const projects = useMemo(
    () => [
      {
        title: t('projects.project1.title'),
        description: t('projects.project1.description'),
        image: 'Eido-480.webp',
        link: 'https://eido-edu.com',
      },
      {
        title: t('projects.project2.title'),
        description: t('projects.project2.description'),
        image: 'grafana.webp',
      },
    ],
    [t]
  );

  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === projects.length - 1) return 0;
      return index + 1;
    });
  }, [projects.length]);

  const showPrevImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === 0) return projects.length - 1;
      return index - 1;
    });
  }, [projects.length]);

  const slides = useMemo(
    () =>
      projects.map((project, index) => {
        const isCurrentSlide = index === imageIndex;
        const hasLink = project.link && project.link.trim() !== '';

        const srcSet = `/${project.image} 480w, /${project.image.replace('-480.webp', '-800.webp')} 800w`;

        const slideContent = (
          <>
            <img
              key={`${project.title}-img-${index}`}
              srcSet={srcSet}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              src={`/${project.image}`}
              alt={project.title}
              className="w-full h-full object-cover"
              fetchPriority={isCurrentSlide ? 'high' : 'low'}
              loading={isCurrentSlide ? 'eager' : 'lazy'}
              decoding={isCurrentSlide ? 'sync' : 'async'}
              width="480"
              height="288"
            />
            <div
              key={`${project.title}-content-${index}`}
              className="absolute bottom-0 left-0 right-0 bg-black/70 text-white pb-4 sm:pb-6 md:pb-8 pt-2 px-3 sm:px-4 transform transition-all duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
            >
              <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1">{project.title}</h3>
              <p className="text-xs opacity-90 font-light line-clamp-2 sm:line-clamp-3">{project.description}</p>
            </div>
          </>
        );

        return {
          slide: hasLink ? (
            <a
              key={`${project.title}-${index}`}
              className="w-full h-full flex-shrink-0 flex-grow-0 block relative transition-transform duration-300 ease-in-out cursor-pointer group will-change-transform"
              style={{
                transform: `translateX(${-100 * imageIndex}%)`,
                backfaceVisibility: 'hidden',
                perspective: '1000px',
              }}
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
              className="w-full h-full flex-shrink-0 flex-grow-0 block relative transition-transform duration-300 ease-in-out group will-change-transform"
              style={{
                transform: `translateX(${-100 * imageIndex}%)`,
                backfaceVisibility: 'hidden',
                perspective: '1000px',
              }}
              tabIndex={imageIndex === index ? 0 : -1}
              aria-label={`Voir le projet ${project.title}`}
            >
              {slideContent}
            </div>
          ),
          indicator: (
            <button
              type="button"
              key={`${project.title}-indicator`}
              className="block cursor-pointer w-6 h-6 mr-2 transition-transform duration-100 hover:scale-110 focus-visible:scale-110 focus-visible:outline-none touch-manipulation"
              aria-label={`Voir l'image ${index + 1}`}
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
      }),
    [projects, imageIndex]
  );

  return (
    <div className="max-w-5xl w-full mx-auto p-2 sm:p-4">
      <div
        aria-label="Carrousel d'images"
        className="w-full h-full relative aspect-[10/6] rounded-lg overflow-hidden slider-container"
      >
        <div className="w-full h-full flex overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          {slides.map(({ slide }) => slide)}
        </div>

        <button
          type="button"
          onClick={showPrevImage}
          className="absolute left-0 top-0 bottom-0 px-1 sm:px-2 md:px-4 cursor-pointer transition-colors duration-100 hover:bg-gradient-to-l hover:from-black/30 hover:to-transparent focus-visible:bg-gradient-to-l focus-visible:from-black/30 focus-visible:to-transparent focus-visible:outline-none group z-10 touch-manipulation"
          aria-label="Image précédente"
        >
          <ChevronLeft
            className="w-6 h-6 sm:w-8 sm:h-8 stroke-white fill-black group-hover:animate-pulse group-focus-visible:animate-pulse drop-shadow-lg"
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={showNextImage}
          className="absolute right-0 top-0 bottom-0 px-1 sm:px-2 md:px-4 cursor-pointer transition-colors duration-100 hover:bg-gradient-to-r hover:from-black/30 hover:to-transparent focus-visible:bg-gradient-to-r focus-visible:from-black/30 focus-visible:to-transparent focus-visible:outline-none group z-10 touch-manipulation"
          aria-label="Image suivante"
        >
          <ChevronRight
            className="w-6 h-6 sm:w-8 sm:h-8 stroke-white fill-black group-hover:animate-pulse group-focus-visible:animate-pulse drop-shadow-lg"
            aria-hidden="true"
          />
        </button>

        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5 sm:gap-1 z-10">
          {slides.map(({ indicator }) => indicator)}
        </div>
      </div>
    </div>
  );
};

export default MySlider;
