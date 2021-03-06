/**
 * @param {String} string
 */
export default function skipSpace(string = "") {
    let first = string.search(/\S/);
    if (first === -1) return "";
    return string.slice(first);
}