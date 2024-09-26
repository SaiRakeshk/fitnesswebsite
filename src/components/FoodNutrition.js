import React, { useState, useEffect } from 'react';
import './FoodNutrition.css';

const FoodSearch = () => {
  const [foodName, setFoodName] = useState(''); // To store the input value
  const [searchTerm, setSearchTerm] = useState(''); // To trigger the search when submitted
  const [foodData, setFoodData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      const fetchFoodData = async () => {
        setLoading(true);
        const url = `https://food-nutrition-information.p.rapidapi.com/foods/search?query=${encodeURIComponent(searchTerm)}&pageSize=1&pageNumber=1`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '7ef0f40671msh5041bad4adf96b2p1fa461jsnd4d2bd00344a', // Your API key
            'x-rapidapi-host': 'food-nutrition-information.p.rapidapi.com',
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setFoodData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchFoodData();
    }
  }, [searchTerm]); // Trigger the effect when searchTerm is updated

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(foodName); // Set the search term to trigger the effect
  };

  return (
    <div className="container">
      <h1>Food Nutrition Search</h1>
      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <div className="input-container">
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="Enter food name"
          />
          <button type="submit">Search</button>
        </div>
      </form>

      {/* Loading State */}
      {loading && <div>Loading...</div>}

      {/* Error State */}
      {error && <div className="error">Error: {error.message}</div>}

      {/* Display Food Data */}
      {foodData && foodData.foods && foodData.foods.length > 0 ? (
        <div className="nutrition-details">
          <h2>Food: {foodData.foods[0].description}</h2>
          <p>Brand: {foodData.foods[0].brandOwner}</p>
          <p>Calories: {foodData.foods[0].foodNutrients.find((n) => n.nutrientName === 'Energy')?.value} kcal</p>
          <p>Protein: {foodData.foods[0].foodNutrients.find((n) => n.nutrientName === 'Protein')?.value} g</p>
          <p>Fat: {foodData.foods[0].foodNutrients.find((n) => n.nutrientName === 'Total lipid (fat)')?.value} g</p>
          <p>Carbohydrates: {foodData.foods[0].foodNutrients.find((n) => n.nutrientName === 'Carbohydrate, by difference')?.value} g</p>
        </div>
      ) : (
        searchTerm && !loading && <p>No food data found.</p>
      )}
    </div>
  );
};

export default FoodSearch;
