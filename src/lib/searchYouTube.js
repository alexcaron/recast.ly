import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/recastly/videos?q=${query}&youtube_api_key=${YOUTUBE_API_KEY}`
  }).done(callback);
};

export default searchYouTube;
