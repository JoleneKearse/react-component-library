import Banner from "./Banner";

const banners = [
  {
    bannerMeaning: "success",
    bannerIcon: "/success.svg",
    bannerTitle: "Operation Successful",
    bannerText: "Your request was processed successfully."
  },
  {
    bannerMeaning: "warning",
    bannerIcon: "/warning.svg",
    bannerTitle: "Attention Required",
    bannerText: "Please review the details before proceeding."
  },
  {
    bannerMeaning: "error",
    bannerIcon: "/error.svg",
    bannerTitle: "System Error",
    bannerText: "Something went wrong. Try again later."
  },
  {
    bannerMeaning: "neutral",
    bannerIcon: "/neutral.svg",
    bannerTitle: "Update Available",
    bannerText: "A new version of this application is ready to install."
  },
  {
    bannerMeaning: "success",
    bannerIcon: "/success.svg",
    bannerTitle: "Success"
  },
  {
    bannerMeaning: "warning",
    bannerIcon: "/warning.svg",
    bannerTitle: "Warning"
  },
  {
    bannerMeaning: "error",
    bannerIcon: "/error.svg",
    bannerTitle: "Error"
  },
  {
    bannerMeaning: "neutral",
    bannerIcon: "/neutral.svg",
    bannerTitle: "Information"
  }
];

const BannerContainer = () => {
  const bannersWithText = banners.filter((b) => b.bannerText);
  const bannersWithoutText = banners.filter((b) => !b.bannerText);

  return (
    <div className="bannersBox">
      {/* Left side: banners with text */}
      <div className="banners">
        {bannersWithText.map((banner, index) => (
          <Banner key={index} {...banner} />
        ))}
      </div>

      {/* Right side: banners without text */}
      <div className="banners">
        {bannersWithoutText.map((banner, index) => (
          <Banner key={index} {...banner} />
        ))}
      </div>
    </div>
  );
};

export default BannerContainer;
