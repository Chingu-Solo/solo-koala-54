export default async function fetchFonts() {
    const myApiKey = process.env.REACT_APP_GOOGLE_FONT_API_KEY;
    return fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key='+myApiKey, { headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      } }).then(res => res.json() );
}