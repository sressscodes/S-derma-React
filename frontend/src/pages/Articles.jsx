import React, { useState } from "react";
import "./CSS/Articles.css"; // Import CSS
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

const articlesData = [
  {
    title: "The Ultimate Guide to Building Your Skincare Routine",
    link: "https://www.health.com/skincare-routine-8364021",
    img: image1,
    description: "Learn the essential steps for an effective skincare regimen tailored to your needs.",
  },
  {
    title: "10 Common Skincare Myths Debunked",
    link: "https://www.vogue.com/article/skincare-myths",
    img: image2,
    description: "Discover the truth behind popular skincare misconceptions.",
  },
  {
    title: "Morning vs Night: Do You Really Need Two Skincare Routines?",
    link: "https://www.cetaphil.com.au/skincare-tips/morning_night_skincare.html",
    img: image3,
    description: "Explore the benefits of separate routines for day and night.",
  },
  {
    title: "Professional Skincare Tips",
    link: "https://www.vogue.com/beauty/skin",
    img: image4,
    description: "Learn the essential steps for an effective skincare regimen tailored to your needs.",
  },
  {
    title: "The Ultimate Guide to Building Your Skincare Routine",
    link: "https://www.health.com/skincare-routine-8364021",
    img: image1,
    description: "Learn the essential steps for an effective skincare regimen tailored to your needs.",
  },
  {
    title: "10 Common Skincare Myths Debunked",
    link: "https://www.vogue.com/article/skincare-myths",
    img: image2,
    description: "Discover the truth behind popular skincare misconceptions.",
  },
  {
    title: "Morning vs Night: Do You Really Need Two Skincare Routines?",
    link: "https://www.cetaphil.com.au/skincare-tips/morning_night_skincare.html",
    img: image3,
    description: "Explore the benefits of separate routines for day and night.",
  },
  {
    title: "Professional Skincare Tips",
    link: "https://www.vogue.com/beauty/skin",
    img: image4,
    description: "Learn the essential steps for an effective skincare regimen tailored to your needs.",
  },
];

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articlesData.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="main-container">
      <header className="welcome-section">
        <h1>Skincare Education Hub</h1>
        <p>Explore expert advice, trusted dermatologists, and curated skincare products for your unique skin needs.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for articles, tips, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button">Search</button>
        </div>
      </header>

      <section className="articles-section">
        <h2>Featured Articles</h2>
        <div className="articles-container">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article, index) => (
              /*href=article.link*/
              <div key={index} className="article-card">
                  <img src={article.img} alt={article.title} />
                  <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default Articles;