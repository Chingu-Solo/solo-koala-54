import customTextGenerator from './customTextGenerator';
const getPhrase = customTextGenerator(80);

export default async function assignPhraseToEachFont(fonts) {
    if (!Array.isArray(fonts)) {
        console.info('Empty fontList passed to assignPhraseToEachFont');
        return [];
    }
    const fontsWithPhrases = fonts.map(font => {
        let phrase = getPhrase.next().value;
        let count = 0;
        while (phrase.length < 70) {
            phrase = getPhrase.next().value;
            if (count++ > 5) {
                phrase = 'default text';
                break;
            }
        }
        return {...font, phrase} 
    });
    return fontsWithPhrases
}