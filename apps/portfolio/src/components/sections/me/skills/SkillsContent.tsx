import {
  AdonisSvg,
  CSvg,
  CppSvg,
  DockerSvg,
  FigmaSvg,
  GithubSvg,
  GrafanaSvg,
  NodeSvg,
  ReactNativeSvg,
  ReactSvg,
  TypescriptSvg,
} from '@/components/icon/CSvg.tsx';
import { useMemo } from 'react';

const SkillsContent = () => {
  const technologies = useMemo(
    () => [
      {
        name: 'C++',
        icon: CppSvg,
      },
      {
        name: 'C',
        icon: CSvg,
      },
      {
        name: 'TypeScript',
        icon: TypescriptSvg,
      },
      {
        name: 'React',
        icon: ReactSvg,
      },
      {
        name: 'React Native',
        icon: ReactNativeSvg,
      },
      {
        name: 'Node.js',
        icon: NodeSvg,
      },
      {
        name: 'AdonisJs',
        icon: AdonisSvg,
      },
      {
        name: 'Grafana',
        icon: GrafanaSvg,
      },
      {
        name: 'Docker',
        icon: DockerSvg,
      },
      {
        name: 'Github',
        icon: GithubSvg,
      },
      {
        name: 'Figma',
        icon: FigmaSvg,
      },
    ],
    []
  );
  return (
    <div className="flex flex-col w-full items-center justify-center px-2 md:px-8 lg:px-16">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6
                   justify-items-center
                   gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      >
        {technologies.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="
              w-[150px] h-[130px] sm:w-[170px] sm:h-[150px]
              px-4 py-2 lg:px-8 lg:py-4
              flex flex-col items-center justify-center
               rounded-lg
              hover:text-primary hover:scale-105 hover:shadow-xl hover:dark:shadow-white/10 hover:border hover:border-accent
              transition-all duration-300
              cursor-pointer group relative
            "
          >
            <div className="text-4xl transition-all duration-300 group-hover:-translate-y-2 flex items-center justify-center">
              <tech.icon className="w-15 h-15 sm:w-20 sm-h-20" />
            </div>

            <div className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 text-center absolute bottom-2 left-0 right-0">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
