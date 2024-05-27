import Navbar from '../../components/Navbar/Navbar';
import Contents from '../../components/Contents/Contents';
import styles from './styles.module.scss';

const Disciplines = () => {
  return (
    <section className={styles.section}>
      <h1>Дисциплины</h1>
      <div className={styles.wrapper}>
        <div className={styles.nav_wrapper}>
          <Navbar />
        </div>
        <div className={styles.wrapper_content}>
          <Contents />
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
