const RAPID_API_KEY = 'cc27f3798amshbf49b3c8793130dp17a117jsncd6643b00943';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  }
};

export const imageOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  }
}

export const fetchImage = async (exerciseId) => {
  const response = await fetch(
    `https://exercisedb.p.rapidapi.com/image?resolution=1080&exerciseId=${exerciseId}`,
    imageOptions,
  );

  const blob = await response.blob(); // Get the image as a blob
  return URL.createObjectURL(blob);   // Create a URL to use in <img src="..." />
};


export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
