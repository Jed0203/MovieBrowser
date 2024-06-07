const Hero = ({ text, backdrop }) => {
    return (
      <div className="bg-dark">
        <header className="text-white p-5 hero-container">
          <h1 className="hero-text">{text}</h1>
        </header>
      </div>
    )
  }

export default Hero;