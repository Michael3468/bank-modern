import { FC } from 'react';

type Props = {
  styles: string;
};

const Button: FC<Props> = ({ styles }) => (
  <button
    type="button"
    className={`rounded-xl py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;
