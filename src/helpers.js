export function cleanText(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export function cleanDate(str) {
	return new Date(str.replace(/ /g, "T")).toLocaleDateString();
}