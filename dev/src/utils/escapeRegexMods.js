export default function escapeRegexMods(str) {
    var output = '';
    if (str) {
        output = str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    return output
}