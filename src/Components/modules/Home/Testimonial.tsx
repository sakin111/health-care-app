const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Patient Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>Exceptional service and care. Found the perfect doctor for my needs!</p>
            <p className="author">- John Doe</p>
          </div>
          <div className="testimonial-card">
            <p>The AI matching system is incredibly accurate. Highly recommended!</p>
            <p className="author">- Jane Smith</p>
          </div>
          <div className="testimonial-card">
            <p>Best healthcare platform I have used. Professional and efficient</p>
            <p className="author">- Mike Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
