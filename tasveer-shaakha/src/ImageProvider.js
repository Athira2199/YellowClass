function getApiUrl() {
    const query = '';
    const url =
      'https://api.unsplash.com/search/photos/?page=1&per_page=12&query=';
    return `${url}${query}&client_id=${process.env.UNSPLASH_API_KEY}`;
  }
export default getApiUrl
