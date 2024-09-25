import React, { useState } from 'react';
import { fetchFoodNutritionByKeyword } from '../utils/fetchData';
import './FoodNutrition.css';

const FoodNutrition = () => {
  const [keyword, setKeyword] = useState('');
  const [nutritionDetails, setNutritionDetails] = useState(null);
  const [error, setError] = useState('');

  const handleFetchNutrition = async () => {
    try {
      const data = await fetchFoodNutritionByKeyword(keyword);
      const indianResult = data.find((item) => item.country_code === 'IN') || data[0];
      setNutritionDetails(indianResult);
      setError('');
    } catch (fetchError) {
      setError('Failed to fetch nutrition details. Please try again.');
      setNutritionDetails(null);
    }
  };

  return (
    <div className="container">
      <label className="label" htmlFor="food-keyword"> {/* Added htmlFor */}
        Enter Food Name:
        <input
          id="food-keyword" // Matches with htmlFor
          className="input-field"
          type="text"
          placeholder="Enter food name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>

      <button className="fetch-button" type="button" onClick={handleFetchNutrition}>
        Fetch Nutrition Details
      </button>
      {error && <p className="error">{error}</p>}
      {nutritionDetails && (
        <div className="nutrition-details">
          <h3>Nutrition Details</h3>
          <div className="nutrition-item">
            <h4>{nutritionDetails.description} (Country: {nutritionDetails.country_code})</h4>
            <table className="nutrition-table">
              <tbody>
                {/* ... nutrition data table ... */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodNutrition;
