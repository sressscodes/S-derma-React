import React, { useEffect, useState } from 'react';
import './CSS/GetRecommendations.css'

const GetRecommendation = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    skin_type: 'Combination',
    label_filter: '',
    rating_filter: 5,
    brand_filter: '',
    price_range: '10,300',
    ingredient_input: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/get_recommendations');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [minPrice, maxPrice] = formData.price_range.split(',').map(Number);
    const filteredRecommendations = data.filter(item => {
      const price = item.Price;
      return (
        item[formData.skin_type] === 1 &&
        (formData.label_filter === '' || item.Label === formData.label_filter) &&
        (formData.brand_filter === '' || item.Brand === formData.brand_filter) &&
        (price >= minPrice && price <= maxPrice) &&
        (item.Rank >= formData.rating_filter)
      );
    });
    setRecommendations(filteredRecommendations);
    setIsSubmitted(true); // Set the form as submitted to show the output
  };

  const uniqueLabels = [...new Set(data.map(item => item.Label))];
  const uniqueBrands = [...new Set(data.map(item => item.Brand))];

  return (
    <>
    <div id="container">
      <form onSubmit={handleSubmit} id="recommendation-form">
        <h1>Fill out the form and get product recommendations as per your skin.</h1>
        <label>Select your skin type:</label>
        <select name="skin_type" value={formData.skin_type} onChange={handleChange}>
          {["Combination", "Dry", "Normal", "Oily", "Sensitive"].map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label>Select Label (Optional):</label>
        <select name="label_filter" value={formData.label_filter} onChange={handleChange}>
          <option value="">All</option>
          {uniqueLabels.map((label, index) => (
            <option key={index} value={label}>{label}</option>
          ))}
        </select>

        <label>Rating:</label>
        <select name="rating_filter" value={formData.rating_filter} onChange={handleChange}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <option key={rating} value={rating}>{'⭐'.repeat(rating)}</option>
          ))}
        </select>

        <label>Select Brand (Optional):</label>
        <select name="brand_filter" value={formData.brand_filter} onChange={handleChange}>
          <option value="">All</option>
          {uniqueBrands.map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>

        <label>Enter price range (In $):</label>
        <input
          type="text"
          name="price_range"
          value={formData.price_range}
          onChange={handleChange}
          placeholder="10,300"
        />

        <label>Enter ingredients (Optional):</label>
        <textarea
          name="ingredient_input"
          rows="4"
          cols="50"
          value={formData.ingredient_input}
          onChange={handleChange}
        />

        <button type="submit">Get Recommendation</button>
      </form>

      {/* Conditionally render output */}
      {isSubmitted && (
        <div id="output">
          {recommendations.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Label</th>
                  <th>Rating</th>
                  <th>Price($)</th>
                </tr>
              </thead>
              <tbody>
                {recommendations.map((item, index) => (
                  <tr key={index} className='column'>
                    <td>{item.Name}</td>
                    <td>{item.Brand}</td>
                    <td>{item.Label}</td>
                    <td>{item.Rank}</td>
                    <td>{item.Price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No recommendations found.</p>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default GetRecommendation;
