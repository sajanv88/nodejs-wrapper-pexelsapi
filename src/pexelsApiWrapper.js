const Axios =  require('axios');

const endPoints = {
  SEARCH_URL: '/search',
  POPULAR_URL: '/popular',
  CURATED_URL: '/curated',
  VIDEO_SEARCH_URL: '/videos/search',
  POPULAR_VIDEO_URL: '/videos/popular',
  PHOTO_URL: '/photos'
};

class PexelsApi {
  constructor(apiKey, apiVersion) {
    this.apiVersion = apiVersion || 'v1';
    if (!apiKey) {
      throw new Error(`Pexels API key is missing`);
    }
    this.axios = Axios.create({
      baseURL: 'https://api.pexels.com/',
      headers: {'Authorization': `${apiKey}`}
    });
  }
  
  /**
   * Request a specific photo by ID and it returns a promise.
   * @param {number} id
   * @returns {Promise}
   */
  getPhotoById(id) {
    const url = `${this.apiVersion}${endPoints.PHOTO_URL}/${id}`;
    return this.axios.get(url).then(res => res.data);
  }

  /**
   * Search photos in Pexels API
   * @param {string} query Search term
   * @param {number} page Specifies the page being requested (Defaults to 1)
   * @param {number} perPage Specifies the number of items per page (Defaults to 10)
   * @returns {Promise}
   */
  searchPhotos(query, page = 1, perPage = 10) {
    if (!query) { throw new Error(`Error: query string is required.`); }
    const qs = `?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;
    const url = `${this.apiVersion}${endPoints.SEARCH_URL}${qs}`;
    return this.axios.get(url).then(res => res.data).catch(err => {throw new Error(err)});
  }

  /**
   * Random photos in Pexels API
   * @param {number} perPage Specifies the number items per page (Defaults to 1)
   * @returns {Promise}
   */
  getRandomPhotos(perPage = 1) {
    const random = Math.floor(Math.random(1, 1000));
    const url = `${this.apiVersion}${endPoints.CURATED_URL}?page=${random}&per_page=${perPage}`;
    return this.axios.get(url).then(res => res.data).catch(err => {throw new Error(err)});
  }

  /**
   * Trending photos from Pexels API
   * @param {number} page Specifies the page being requested (Defaults to 1)
   * @param {number} perPage Specifies the number items per page (Defaults to 1)
   * @returns {Promise}
   */
  getTrendingPhotos(page=1, perPage=15) {
    const url = `${this.apiVersion}${endPoints.CURATED_URL}?page=${page}&per_page=${perPage}`;
    return this.axios.get(url).then(res => res.data).catch(err => {throw new Error(err)});
  }

  /**
   * Search videos in Pexels API
   * @param {string} query Search term
   * @param {number} page Specifies the page being requested (Defaults to 1)
   * @param {number} perPage Specifies the number of items per page (Defaults to 10)
   * @returns {Promise}
   */
  searchVideos(query, page = 1, perPage = 10) {
    if (!query) { throw new Error(`Error: query string is required.`); }
    const qs = `?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`;
    const url = `${endPoints.VIDEO_SEARCH_URL}${qs}`;
    return this.axios.get(url).then(res => res.data).catch(err => { throw new Error(err) });
  }

  /**
   * Popular videos from Pexels API
   * @param {number} page Specifies the page being requested (Defaults to 1)
   * @param {number} perPage Specifies the number items per page (Defaults to 1)
   * @returns {Promise}
   */
  getPopularVideos(page=1, perPage=15) {
    const url = `${endPoints.POPULAR_VIDEO_URL}?page=${page}&per_page=${perPage}`;
    return this.axios.get(url).then(res => res.data).catch(err => {throw new Error(err) });
  }

  /**
   * Get Pexels API verison
   * @returns {string}
   */ 
  getPexelsApiVerison() {
    return this.apiVersion;
  }
}
module.exports = PexelsApi;
