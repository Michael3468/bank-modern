import { Button } from '.';
import { card } from '../assets';
import styles, { layout } from '../styles';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} md:text-left text-center`}>
      <h2 className={styles.heading2}>Find a better card deal in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 ms-auto me-auto md:ms-0`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
        tortor.ç Aliquet ultrices ac, ametau
      </p>
      <Button styles="mt-10 ms-auto me-auto md:ms-0" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%]" />
    </div>
  </section>
);

export default CardDeal;
