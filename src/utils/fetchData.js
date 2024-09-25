export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '7ef0f40671msh5041bad4adf96b2p1fa461jsnd4d2bd00344a',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '7ef0f40671msh5041bad4adf96b2p1fa461jsnd4d2bd00344a',
  },
};

// utils/api.js
export const fetchFoodNutritionByKeyword = async (keyword) => {
  const apiURL = `https://myfitnesspal2.p.rapidapi.com/searchByKeyword?keyword=${encodeURIComponent(keyword)}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '7ef0f40671msh5041bad4adf96b2p1fa461jsnd4d2bd00344a',
      'x-rapidapi-host': 'myfitnesspal2.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(apiURL, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
