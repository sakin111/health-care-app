const TopRatedDoctors = () => {
  return (
    <section className="top-rated-doctors">
      <div className="container">
        <h2>Top Rated Doctors</h2>
        <div className="doctors-grid">
          <div className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>Dr. James Wilson</h3>
            <p className="specialty">Cardiologist</p>
            <p className="rating">⭐ 4.9/5 (120 reviews)</p>
          </div>
          <div className="doctor-card">
            <div className="doctor-image">👩‍⚕️</div>
            <h3>Dr. Sarah Chen</h3>
            <p className="specialty">Neurologist</p>
            <p className="rating">⭐ 4.8/5 (95 reviews)</p>
          </div>
          <div className="doctor-card">
            <div className="doctor-image">👨‍⚕️</div>
            <h3>Dr. Michael Brown</h3>
            <p className="specialty">Dermatologist</p>
            <p className="rating">⭐ 4.7/5 (80 reviews)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;
