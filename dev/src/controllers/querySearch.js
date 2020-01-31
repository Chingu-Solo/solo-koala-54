import escapeRegexMods from '../utils/escapeRegexMods';

export default function querySearch(filter, fontList) {
    const sanitisedFilter = escapeRegexMods(filter);
    const firstPass = fontList.filter(font => font.family.match(new RegExp(sanitisedFilter, 'iy'))).map(font => font.index); // Matches only cases starting with filter
    const seconfPass = fontList.filter(font => font.family.match(new RegExp(sanitisedFilter, 'ig'))).map(font => font.index); // only cases that contain a word that start with filter
    const thirdPass = fontList.filter(font => font.family.match(new RegExp(sanitisedFilter, 'i'))).map(font => font.index); // any cases that contain filter
    const queryIndex = new Set();  
    [...firstPass, ...seconfPass, ...thirdPass].forEach(i => queryIndex.add(i));
    return [...queryIndex];
}
