import styles from "./Header.module.css";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 24, color = "#e8eaed" }: IconProps) => {
  return (
    <span className={styles.icon} style={{ fontSize: size, color }}>
      {name}
    </span>
  );
};

export default Icon;
