import styles from './Badge.module.css';

const Badge = ({ badgeClass = "gray",  badgeStyle = "", children }) => {
  return (
    <div className={`${styles.badge} ${styles[badgeClass]} ${styles[badgeStyle]}`}>
      <span>
      {children}
      </span>
    </div>
  );
}

export default Badge;