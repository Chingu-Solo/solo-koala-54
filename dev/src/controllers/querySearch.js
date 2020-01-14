export default function querySearch(filter, index) {
    return index.filter(i => i.name.match(new RegExp(filter, 'iy'))).map(font => font.index);
}
