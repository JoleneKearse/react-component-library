import Section from "./components/Section";
import Badge from "./components/Badge/Badge";
import BadgeContainer from "./components/Badge/BadgeContainer";
import Banner from "./components/Banner/Banner";
import BannerContainer from "./components/Banner/BannerContainer";
import Card from "./components/Card/Card";

function App() {

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">React Component Library</h1>
        <nav className="site-nav">
          <ul role="list">
            <li><a href="#badges" className="nav-link">Badges</a></li>
            <li><a href="#banners" className="nav-link">Banners</a></li>
            <li><a href="#cards" className="nav-link">Cards</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#" className="nav-link">Tooltips</a></li>
            <li><a href="#" className="nav-link">Toasts</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Section title="Badges" component={Badge}>
          <BadgeContainer />
        </Section>
        <Section title="Banners" component={Banner}>
          <BannerContainer />
        </Section>
        <Section title="Cards" component={Card}>
          <Card cardImg="/cardIcon.svg" cardTitle="Easy Deployment" cardText="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis." />
        </Section>
      </main>
    </>
  )
}

export default App
