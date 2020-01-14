export default async function buildSearchIndex(fonts) {
    const fontNamesWithIndex = fonts.slice().map((font, i) => {
        return {name: font.family, index: i}
    });
    return fontNamesWithIndex.sort((a,b) => a.name < b.name ? -1 : 1);
}