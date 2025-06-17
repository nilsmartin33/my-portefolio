import FlowingMenu from '@/animations/FlowingMenu/FlowingMenu.tsx';
import Title from '@/components/title/Title.tsx';

const WorkSection = () => {
  const demoItems = [
    {
      link: 'https://www.linkedin.com/company/idaaas/',
      text: 'IDAAAS',
      time: '4 months',
      date: 'February 2024 - May 2024',
      jobTitle: 'Developer C++',
      missionDescription:
        'Developing functionalities on the existing driver in C++ language to improve communication with our clusters. By using library AERON for the communication protocol, in order to meet high performance requirements. And an analysis of architecture constraints to determine and implement the optimal consistent hashing algorithm.',
    },
    {
      link: 'https://www.linkedin.com/company/idaaas/',
      text: 'IDAAAS',
      time: '6 months',
      date: 'July 2022 - December 2022',
      jobTitle: 'Developer Devops',
      missionDescription:
        'Increase the observability inside machine learning clusters in the cloud inside the SRE4 Team. By adding tools to visualize and monitor the entire data emitted',
    },
    {
      link: 'https://www.linkedin.com/company/idaaas/',
      text: 'IONIS',
      time: '1 year',
      date: 'February 2023 - January 2024',
      jobTitle: 'Pedagogical Assistant Internship',
      missionDescription:
        'Technical support and pedagogical supervision of first and second-year students at Epitech Bordeaux.',
    },
  ];

  return (
    <section id="work" className="w-full flex flex-col px-4 md:px-16 md:pt-14 md:pb-6">
      <div className="flex flex-col w-full items-center justify-center p-4 md:p-8 gap-8 md:gap-10">
        <Title title="Work" />
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
};

export default WorkSection;
