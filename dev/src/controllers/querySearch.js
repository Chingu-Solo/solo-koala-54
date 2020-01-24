export default function querySearch(filter, index) {
    const firstPass = index.filter(i => i.name.match(new RegExp(filter, 'iy'))).map(font => font.index); // Matches only cases starting with filter
    const seconfPass = index.filter(i => i.name.match(new RegExp(filter, 'ig'))).map(font => font.index); // only cases that contain a word that start with filter
    const thirdPass = index.filter(i => i.name.match(new RegExp(filter, 'i'))).map(font => font.index); // any cases that contain filter
    const queryIndex = new Set();  
    [...firstPass, ...seconfPass, ...thirdPass].forEach(i => queryIndex.add(i));
    return [...queryIndex];
}
