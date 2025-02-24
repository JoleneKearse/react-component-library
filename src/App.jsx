import Section from "./components/Section";
import Badge from "./components/Badge/Badge";
import BadgeContainer from "./components/Badge/BadgeContainer";
import Banner from "./components/Banner/Banner";
import BannerContainer from "./components/Banner/BannerContainer";

function App() {

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">React Component Library</h1>
        <nav className="site-nav">
          <ul role="list">
            <li><a href="#badges" className="nav-link">Badges</a></li>
            <li><a href="#banners" className="nav-link">Banners</a></li>
            <li><a href="" className="nav-link">Cards</a></li>
            <li><a href="" className="nav-link">Testimonials</a></li>
            <li><a href="" className="nav-link">Tooltips</a></li>
            <li><a href="" className="nav-link">Toasts</a></li>
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
      </main>
    </>
  )
}

export default App
