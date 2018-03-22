export function cleanText(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}