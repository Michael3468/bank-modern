import { FC } from 'react';

import { quotes } from '../assets';

type Props = {
  content: string;
  name: string;
  title: string;
  img: string;
};

const FeedbackCard: FC<Props> = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card cursor-pointer">
    <img src={quotes} alt="double quotes" className="w-[42px] h-[27px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 text-center xs:text-left">
      {content}
    </p>

    <div className="flex flex-col xs:flex-row">
      <img
        src={img}
        alt={name}
        className="w-[48px] h-[48px] rounded-full ms-auto me-auto xs:ms-0 xs:me-0 mb-3 xs:mb-0"
      />

      <div className="flex flex-col ml-auto mr-auto xs:ml-4  text-center xs:text-left">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
