/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import './BmiCalculator.css';

const calculateBMI = (heightInCm, weight) => {
  const heightInMeters = heightInCm / 100;
  return weight / (heightInMeters * heightInMeters);
};

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState('');

  useEffect(() => {
    const userHeight = parseFloat(height);
    const userWeight = parseFloat(weight);

    if (!Number.isNaN(userHeight) && !Number.isNaN(userWeight) && userHeight > 0 && userWeight > 0) {
      const bmiValue = calculateBMI(userHeight, userWeight);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus('underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiStatus('normal-weight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiStatus('overweight');
      } else {
        setBmiStatus('obese');
      }
    } else {
      setBmi(null);
      setBmiStatus('');
    }
  }, [height, weight]);

  return (
    <div className="container">
      <label className="label" htmlFor="height">Enter Height (in centimeters):</label>
      <input
        id="height"
        className="input-field"
        type="number"
        placeholder="Enter Height in centimeters"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <label className="label" htmlFor="weight">Enter Weight (in kilograms):</label>
      <input
        id="weight"
        className="input-field"
        type="number"
        placeholder="Enter Weight in kilograms"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <p className="result">Your BMI is: {bmi !== null ? bmi : 'N/A'}</p>
      <p className="status">
        {bmiStatus && (
          <span className={bmiStatus}>
            {bmiStatus === 'underweight' && 'Underweight'}
            {bmiStatus === 'normal-weight' && 'Normal Weight'}
            {bmiStatus === 'overweight' && 'Overweight'}
            {bmiStatus === 'obese' && 'Obese'}
          </span>
        )}
      </p>
    </div>
  );
};

export default BmiCalculator;
