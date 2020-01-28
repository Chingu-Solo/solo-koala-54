export default async function fetchFonts() {
  const myApiKey = process.env.REACT_APP_GOOGLE_FONT_API_KEY;
  const list = await fetch(
    'https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key='+myApiKey, 
    {headers: { 'Content-Type': 'application/json'}});
  const listObj = await list.json();
  const listItems = await listObj.items;
  const fontListWithPhrases = await import('./assignPhraseToEachFont').then(assignPhraseToEachFont => assignPhraseToEachFont.default(listItems));
  return await fontListWithPhrases
} 