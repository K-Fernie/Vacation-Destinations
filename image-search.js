//access key: C6L_DP5y54cCQkGgwYtfcDq0gdm059TKAP3BZScVWek
//request endpoint: https://api.unsplash.com/search/photos?query=${city}&?{location}&client_id=accesskey
export function imageURL(city) {
  //removing white space so city can be placed in the query
  city = city.replace(/\s+/g, '');
  const accessKey = 'C6L_DP5y54cCQkGgwYtfcDq0gdm059TKAP3BZScVWek';
  const URL = `https://api.unsplash.com/search/photos?query=${city}&client_id=${accessKey}`;
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      //returns the regular image
      return data.results[0].urls.regular;
    });
}
