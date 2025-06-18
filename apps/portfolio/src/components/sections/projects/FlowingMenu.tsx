import FlowingMenu from '@/animations/FlowingMenu/FlowingMenu.tsx';
import Title from '@/components/title/Title.tsx';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const WorkSection = () => {
  const { t } = useTranslation();
  const demoItems = useMemo(() => {
    return [
      {
        link: 'https://www.linkedin.com/company/idaaas/',
        text: 'IDAAAS',
        time: t('work.work1.time'),
        date: t('work.work1.date'),
        jobTitle: t('work.work1.jobTitle'),
        missionDescription: t('work.work1.description'),
      },
      {
        link: 'https://www.linkedin.com/company/idaaas/',
        text: 'IDAAAS',
        time: t('work.work2.time'),
        date: t('work.work2.date'),
        jobTitle: t('work.work2.jobTitle'),
        missionDescription: t('work.work2.description'),
      },
      {
        link: 'https://www.linkedin.com/company/idaaas/',
        text: 'IONIS',
        time: t('work.work3.time'),
        date: t('work.work3.date'),
        jobTitle: t('work.work3.jobTitle'),
        missionDescription: t('work.work3.description'),
      },
    ];
  }, [t]);

  return (
    <section id="work" className="w-full flex flex-col px-4 md:px-16 md:pt-14 md:pb-6">
      <div className="flex flex-col w-full items-center justify-center p-4 md:p-8 gap-8 md:gap-10">
        <Title title={t('title.work')} />
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
};

export default WorkSection;
