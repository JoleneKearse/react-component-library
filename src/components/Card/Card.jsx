import styles from "./Card.module.css";

const Card = ({ cardImg = "/cardIcon.svg", cardTitle, cardText }) => {
  return (
    <div className={styles.card}>
      <img src={cardImg} alt="" className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{cardTitle}</h3>
      <p className={styles.cardText}>{cardText}</p>
    </div>
  );
}

export default Card;