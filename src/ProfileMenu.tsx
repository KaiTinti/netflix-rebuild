import { useState, useRef, useEffect } from "react";
import styles from "./ProfileMenu.module.css";
import profileIcon from "./assets/profile-icon.png";
import Icon from "./Icon";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.profileContainer} ref={menuRef}>

      <img
        src={profileIcon}
        alt="Perfil"
        className={styles.profileIcon}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <ul>
            <li><Icon name="person" /> Gerenciar perfis</li>
            <li><Icon name="settings" /> Configurações</li>
            <li><Icon name="account_circle" /> Conta</li>
            <li><Icon name="help" /> Ajuda</li>
            <li><Icon name="logout" /> Sair</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
