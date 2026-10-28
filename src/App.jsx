import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <h2 className="logo">SAIRAM <span>STAY</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">Book Now</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO SAIRAM STAY</p>

          <h1>Your Comfort,<br />
            Our <span>Priority.</span>
          </h1>

          <p className="hero-description">
            Experience a relaxing stay with comfortable rooms,
            warm hospitality and everything you need to feel at home.
          </p>

          <div className="hero-buttons">
            <a href="#rooms" className="primary-button">Explore Rooms ↗</a>
            <a href="#contact" className="secondary-button">Contact Us</a>
          </div>

          <div className="hero-features">
            <div><strong>24/7</strong><small>Guest Support</small></div>
            <div><strong>Comfort</strong><small>Feel at Home</small></div>
            <div><strong>Quality</strong><small>Warm Service</small></div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-overlay">
            <p>YOUR PERFECT GETAWAY</p>
            <h3>Relax. Refresh. Stay.</h3>
          </div>
        </div>
      </section>

      <section className="intro">
        <p className="section-label">A BETTER WAY TO STAY</p>
        <h2>Make Yourself at Home</h2>
        <p>
          At Sairam Stay, we believe every guest deserves comfort,
          cleanliness and a welcoming experience.
        </p>
      </section>

      <section className="rooms-section" id="rooms">
        <div className="section-heading">
          <div>
            <p className="section-label">OUR ACCOMMODATION</p>
            <h2>Rooms Made for Relaxation</h2>
          </div>
          <p>Find a comfortable space for your next stay.</p>
        </div>

        <div className="room-grid">
          <div className="room-card">
            <div className="room-image room-one">
              <span>POPULAR CHOICE</span>
            </div>
            <div className="room-info">
              <h3>Standard Room</h3>
              <p>A cozy room for a peaceful and comfortable stay.</p>
              <div className="room-bottom">
                <span>Comfortable Stay</span>
                <a href="#contact">Enquire ↗</a>
              </div>
            </div>
          </div>

          <div className="room-card">
            <div className="room-image room-two">
              <span>EXTRA COMFORT</span>
            </div>
            <div className="room-info">
              <h3>Deluxe Room</h3>
              <p>Enjoy extra space and a relaxing atmosphere.</p>
              <div className="room-bottom">
                <span>Premium Comfort</span>
                <a href="#contact">Enquire ↗</a>
              </div>
            </div>
          </div>

          <div className="room-card">
            <div className="room-image room-three">
              <span>FOR EVERYONE</span>
            </div>
            <div className="room-info">
              <h3>Family Room</h3>
              <p>A welcoming space for families travelling together.</p>
              <div className="room-bottom">
                <span>Family Friendly</span>
                <a href="#contact">Enquire ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="facilities" id="facilities">
        <div className="facilities-heading">
          <p className="section-label">MADE FOR YOUR COMFORT</p>
          <h2>Everything You Need</h2>
          <p>Thoughtful essentials for a pleasant experience.</p>
        </div>

        <div className="facility-grid">
          <div className="facility-card">
            <span>✦</span>
            <h3>Comfortable Rooms</h3>
            <p>Relax in a welcoming and peaceful environment.</p>
          </div>
          <div className="facility-card">
            <span>⌂</span>
            <h3>Homely Atmosphere</h3>
            <p>Enjoy a warm and friendly place to stay.</p>
          </div>
          <div className="facility-card">
            <span>◷</span>
            <h3>Guest Assistance</h3>
            <p>Get help with your stay and enquiries.</p>
          </div>
          <div className="facility-card">
            <span>♡</span>
            <h3>Friendly Service</h3>
            <p>We want every guest to feel welcome.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-label">PLAN YOUR NEXT STAY</p>
          <h2>We Look Forward to<br />Welcoming You.</h2>
          <p>Contact us to enquire about rooms and availability.</p>
        </div>
        <a href="mailto:info@sairamstay.example" className="primary-button">
          Send an Enquiry ↗
        </a>
      </section>

      <footer className="footer">
        <h2 className="logo">SAIRAM <span>STAY</span></h2>
        <p>A comfortable place to call home.</p>
        <p className="copyright">© 2026 Sairam Stay. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App