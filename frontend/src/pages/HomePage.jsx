import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CSS/HomePage.css';
import image10 from '../assets/image10.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image21 from '../assets/image21.png'

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
};

const HomePage = () => {
  const dermatologists = [
    { name: "Dr. John Doe", image: image2 },
    { name: "Dr. Jane Smith", image: image3 },
    { name: "Dr. Emily Johnson", image: image4 },
    { name: "Dr. Emily Johnson", image: image10 }
  ];

  const testimonials = [
    {
      name: "Sunita S.",
      image: "image13.png",
      title: "Amazing Virtual Consultation Experience!",
      text: "I had a virtual consultation for my acne, and the dermatologist was incredibly helpful...",
      rating: 5,
    },
    {
      name: "Ramesh T.",
      image: "image12.png",
      title: "Incredible Support and Superb Results",
      text: "After struggling with rosacea for years, I finally found help through this website...",
      rating: 1,
    },
    {
      name: "Sashwat K.",
      image: "image11.png",
      title: "Very Convenient and Effective Website",
      text: "I was hesitant to try online dermatology, but I'm glad I did! The consultation was smooth...",
      rating: 4,
    },
    {
      name: "Ramesh T.",
      image: "image12.png",
      title: "Incredible Support and Superb Results",
      text: "After struggling with rosacea for years, I finally found help through this website...",
      rating: 2,
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services can I book through your platform?",
      answer:
        "You can book consultations, explore skincare products, and access our education hub.",
    },
    {
      question: "Can I reschedule or cancel my appointment?",
      answer:
        "Yes, you can easily reschedule or cancel your appointment through our platform.",
    },
    {
      question: "Is there a consultation fee?",
      answer: "No, we offer free consultations to all our users!",
    },
  ];

  return (
    <div className="w-full">
      <section className="hero-section">
        <div className="hero-text">
          <h2>Effortless Skin Care Appointments at your Fingertips.<br/><span>Book with Confidence</span></h2>
          <Link to="/book_now" className="home-book-now-btn">
            Book Now
          </Link>
        </div>
        <img src={image1} alt="Showcase" className="hero-image" />
      </section>

      <section className="section-topderma">
        <h2>Top Dermatologists</h2>
        <div className="dermatologists-container">
          {dermatologists.map((derma, index) => (
            <div key={index} className="dermatologist-card">
              <img src={derma.image} alt={derma.name} />
              <p>{derma.name}</p>
            </div>
          ))}
          <Link to="/book_now" className="view-all-link">View all</Link>
        </div>
      </section>

      <section class="dermatologist-info">
          <div class="text-container">
            <h2>Find a Dermatologist Near You</h2>
            <p>Your skin deserves the best care. Our platform connects you with highly skilled dermatologists across
              multiple locations, ensuring expert advice is just a few clicks away.</p>
            <Link to="/book_now" className="home-book-now-btn">Find Here</Link>
          </div>
          <img src={image21} alt="Dermatologist performing a procedure"/>
      </section>

      <section class="skincare-products">
        <img src={image21} alt="Dermatologist Approved Skincare"/>
        <div class="text-container">
          <h2>Shop Dermatologist Approved Skincare</h2>
          <p>Shop dermatologist-approved skincare for every skin type. Our clinically-tested products target acne, aging,
          hydration, and more. Achieve healthier, glowing skin today!</p>
          <Link to="/book_now" className="home-book-now-btn">Find Here</Link>
        </div>
      </section>

      <section class="dermatologist-info">
        <div class="text-container">
          <h2>Skincare Education Hub</h2>
          <p>Learn from top dermatologists with our Skincare Education Hub. Access articles, videos, and tutorials on skin
          types, ingredients, and routines. Stay informed on the latest skincare trends and treatment options.</p>
          <Link to="/book_now" className="home-book-now-btn">Find Here</Link>
        </div>
        <img src={image21} alt="Education Hub"/>
      </section>

      <section className="section-userreviews">
        <h2>User Reviews</h2>
        <div className="testimonials-container">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card">
              <h3>{test.title}</h3>
              <StarRating rating={test.rating} />
              <p className="user-review-text">"{test.text}"</p>
              <p className="user-review-name">— {test.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="arrow">{openFAQ === index ? "▲" : "▼"}</span>
                </div>
                {openFAQ === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
    </section>

    </div>
  );
};

export default HomePage;