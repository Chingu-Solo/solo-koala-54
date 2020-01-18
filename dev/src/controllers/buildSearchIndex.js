export default async function buildSearchIndex(fonts) {
    if (!Array.isArray(fonts)) {
        console.info('Empty fontList passed to buildSearchIndex');
        return [];
    }
    const fontNamesWithIndex = fonts.slice().map((font, i) => {
        return {name: font.family, index: i}
    });
    return fontNamesWithIndex.sort((a,b) => a.name < b.name ? -1 : 1);
}