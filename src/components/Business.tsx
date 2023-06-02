import { FC } from 'react';

import { Button } from '.';
import { features } from '../constants';
import styles, { layout } from '../styles';

type FeatureCardProps = {
  icon: string;
  title: string;
  content: string;
  index: number;
};
const FeatureCard: FC<FeatureCardProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card cursor-pointer flex-col xs:flex-row`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-7 xs:mb-0 ms-auto me-auto xs:ms-0 xs:me-0`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-0 xs:ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 text-center xs:text-left">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1 text-center xs:text-left">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-center ms-auto me-auto`}>
        {'You, do business, '}
        <br className="sm:block hidden" />
        we&apos;ll handle the money
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center ms-auto me-auto`}>
        With the right credit card, you can improve your financial life by building credit, earning
        rewards and saving money. But with hundreds of credit cards on the market.
      </p>
      <Button styles="mt-10 ms-auto me-auto" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          content={feature.content}
          index={index}
        />
      ))}
    </div>
  </section>
);

export default Business;
