const Specialties = () => {
  return (
    <section className="specialties">
      <div className="container">
        <h2>Medical Specialties</h2>
        <div className="specialties-grid">
          <div className="specialty-card">
            <h3>Cardiology</h3>
            <p>Heart and cardiovascular care</p>
          </div>
          <div className="specialty-card">
            <h3>Neurology</h3>
            <p>Brain and nervous system care</p>
          </div>
          <div className="specialty-card">
            <h3>Dermatology</h3>
            <p>Skin and aesthetic care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;
