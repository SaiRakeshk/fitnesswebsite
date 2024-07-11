// components/FoodNutrition.js
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
      const indianResult = data.find(item => item.country_code === 'IN') || data[0];
      setNutritionDetails(indianResult);
      setError('');
    } catch (error) {
      setError('Failed to fetch nutrition details. Please try again.');
      setNutritionDetails(null);
    }
  };

  return (
    <div className="container">
      <label className="label" htmlFor="food-keyword">Enter Food Name:</label>
      <input
        id="food-keyword"
        className="input-field"
        type="text"
        placeholder="Enter food name"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="fetch-button" onClick={handleFetchNutrition}>Fetch Nutrition Details</button>
      {error && <p className="error">{error}</p>}
      {nutritionDetails && (
        <div className="nutrition-details">
          <h3>Nutrition Details</h3>
          <div className="nutrition-item">
            <h4>{nutritionDetails.description} (Country: {nutritionDetails.country_code})</h4>
            <table className="nutrition-table">
              <tbody>
                <tr>
                  <th>Calcium</th>
                  <td>{nutritionDetails.nutritional_contents.calcium} mg</td>
                </tr>
                <tr>
                  <th>Carbohydrates</th>
                  <td>{nutritionDetails.nutritional_contents.carbohydrates} g</td>
                </tr>
                <tr>
                  <th>Cholesterol</th>
                  <td>{nutritionDetails.nutritional_contents.cholesterol} mg</td>
                </tr>
                <tr>
                  <th>Energy</th>
                  <td>{nutritionDetails.nutritional_contents.energy.value} {nutritionDetails.nutritional_contents.energy.unit}</td>
                </tr>
                <tr>
                  <th>Fat</th>
                  <td>{nutritionDetails.nutritional_contents.fat} g</td>
                </tr>
                <tr>
                  <th>Fiber</th>
                  <td>{nutritionDetails.nutritional_contents.fiber} g</td>
                </tr>
                <tr>
                  <th>Iron</th>
                  <td>{nutritionDetails.nutritional_contents.iron} mg</td>
                </tr>
                <tr>
                  <th>Potassium</th>
                  <td>{nutritionDetails.nutritional_contents.potassium} mg</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>{nutritionDetails.nutritional_contents.protein} g</td>
                </tr>
                <tr>
                  <th>Saturated Fat</th>
                  <td>{nutritionDetails.nutritional_contents.saturated_fat} g</td>
                </tr>
                <tr>
                  <th>Sodium</th>
                  <td>{nutritionDetails.nutritional_contents.sodium} mg</td>
                </tr>
                <tr>
                  <th>Sugar</th>
                  <td>{nutritionDetails.nutritional_contents.sugar} g</td>
                </tr>
                <tr>
                  <th>Trans Fat</th>
                  <td>{nutritionDetails.nutritional_contents.trans_fat} g</td>
                </tr>
                <tr>
                  <th>Vitamin A</th>
                  <td>{nutritionDetails.nutritional_contents.vitamin_a} IU</td>
                </tr>
                <tr>
                  <th>Vitamin C</th>
                  <td>{nutritionDetails.nutritional_contents.vitamin_c} mg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodNutrition;
