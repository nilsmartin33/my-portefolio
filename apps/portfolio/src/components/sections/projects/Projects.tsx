import MySlider from '@/components/MySlider/MySlider.tsx';
import Title from '@/components/title/Title.tsx';

const Projects = () => {
  return (
    <section id="projects" className="w-full flex flex-col px-4 lg:px-16 lg:pt-14 lg:pb-6">
      <div className="flex flex-col w-full items-center justify-center p-4 lg:p-8 gap-8 lg:gap-12">
        <Title title="Projects" />
        <MySlider />
      </div>
    </section>
  );
};

export default Projects;
