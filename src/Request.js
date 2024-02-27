/* eslint-disable no-unused-vars */
const key = "1ab96d55d2f4e738fd4bde38556febb2";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`,
  requestTvTopRated: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200`,
};

export default requests;
