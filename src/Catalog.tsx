import styles from "./Catalog.module.css";
import banner from "./assets/stranger-things-banner.jpg";
import logoStranger from "./assets/Stranger-Things-logo.png";

const Catalog = () => {
  return (
    <div className={styles.catalog}>
        <div className={styles.container}>
            <img className={styles.logoStranger} src={logoStranger} alt="Stranger Things Logo" />
            <div className={styles.linha}></div>
            <div className={styles.description}>Texto teste descrição</div>
            <button className={styles.button1}>Assistir</button>
            <button className={styles.button2}>Mais informações</button>
            <img className={styles.banner} src={banner} alt="Stranger Things Banner" />
        </div>
    </div>
  );
};

export default Catalog;
