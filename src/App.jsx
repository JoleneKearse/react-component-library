import Section from "./components/Section";
import Badge from "./components/Badge/Badge";
import BadgeContainer from "./components/Badge/BadgeContainer";

function App() {

  return (
    <>
      <header className="site-header">
        <h1 className="site-title">React Component Library</h1>
        <nav className="site-nav">
          <ul role="list">
            <li><a href="#Badges" className="nav-link">Badges</a></li>
            <li><a href="" className="nav-link">Banners</a></li>
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
      </main>
    </>
  )
}

export default App
