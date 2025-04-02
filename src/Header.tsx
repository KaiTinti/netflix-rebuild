import styles from "./Header.module.css";
import logo from "./assets/Netflix-logo.png";
import Icon from "./Icon";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <input className={styles.logo} type="image" src={logo} alt="Netflix Logo" />
      <button className={styles.bHeader}>Início</button>
      <button className={styles.bHeader}>Séries</button>
      <button className={styles.bHeader}>Filmes</button>
      <button className={styles.bHeader}>Mais recentes</button>
      <button className={styles.bHeader}>Minha lista</button>

      <div className={styles.rightSection}>
        <Icon name="search" />
        <button className={styles.bHeader}>INFANTIL</button>
        <Icon name="featured_seasonal_and_gifts" />
        <Icon name="notifications" />
        <ProfileMenu />
      </div>
    </header>
  );
};

export default Header;
