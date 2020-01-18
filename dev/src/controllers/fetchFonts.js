export default async function fetchFonts() {
  const myApiKey = process.env.REACT_APP_GOOGLE_FONT_API_KEY;
  const getList = () => fetch('https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key='+myApiKey, { headers: {
    'Content-Type': 'application/json'
  } }).then(res => res.json() );
    // check localstoage for fontList stored within last 6 hours
    let fontListLastStored = localStorage.getItem('fontlistlaststored');
    let storedFontList = localStorage.getItem('fontlist');
    if (storedFontList && storedFontList.length > 0 && fontListLastStored !== null && Date.now() - parseInt(fontListLastStored) < ((1000*60*60)*6)) { 
      return JSON.parse(storedFontList);
    }
    // fetch fontlist from api and store
    else {
        return getList().then(fonts => {
            console.info('Fetched fontList from Google Fonts API');
            localStorage.setItem('fontlistlaststored', Date.now().toString());
            localStorage.setItem('fontlist', JSON.stringify(fonts.items));
            return fonts.items;
        });
    }
} 