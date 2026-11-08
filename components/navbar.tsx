export default function Navbar() {
  return (
    <header className="site-header shell">
      <a className="wordmark" href="#home" aria-label="Mohammad Sepehri Nia, home">ms<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#events">Events</a><a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
