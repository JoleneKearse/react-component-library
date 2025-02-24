import styles from "./Banner.module.css";

const Banner = ({ bannerMeaning = "success", bannerIcon = "/success.svg", bannerTitle = "Congratulations", bannerText }) => {
  return (

      <div className={`${styles.banner} ${styles[bannerMeaning]}`}>
            <div className={`${styles.bannerContent}`}>
              <img src={bannerIcon} alt={bannerMeaning} />
              <p>{bannerTitle}</p>
            </div>
        <div className={`${styles.bannerText}`}>{bannerText}</div>
      </div>

  );
}

export default Banner;