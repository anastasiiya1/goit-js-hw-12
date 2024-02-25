import axios from 'axios';

const apiKey = '42469793-94d748bc29f10cf193212e81f';
const url = 'https://pixabay.com/api/?';

let page = 1;

export async function fetchCards(searchQuery, page = 1) {
  try {
    const response = await axios.get(url, {
      params: {
      key: apiKey,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
    });
    if (!response.data.hits) {
      throw new Error('Failed to fetch images. Please try again later.');
    }

    if (page ===1){
      resetPage();
    }
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images. Please try again later.');
  }
}

function resetPage(){
  page = 1;
}