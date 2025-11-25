const Steps = () => {
  return (
    <section className="steps">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search</h3>
            <p>Find doctors by specialty or location</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Compare</h3>
            <p>Review profiles and ratings</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Book</h3>
            <p>Schedule your appointment</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Visit</h3>
            <p>Receive quality care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
