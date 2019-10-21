import formatDistance from "date-fns/formatDistance";

export function formatSEODate(dateString, dateModified = false) {
  if (!dateString && dateModified) {
    return "";
  }
  return dateString
    ? new Date(dateString).toISOString()
    : new Date().toISOString();
}

export function formatDisplayDate(dateString) {
  return new Date(dateString).toGMTString().replace(" 00:00:00 GMT", "");
}

export function getSecondsSinceEpoch(dateString) {
  return new Date(dateString).getTime() / 1000;
}

export function getDistanceFromPost(dateString) {
  return formatDistance(new Date(dateString), new Date(), { addSuffix: true });
}

export function getDistanceFromModified(dateString) {
  if (!dateString) {
    return "";
  }
  return formatDistance(new Date(dateString), new Date(), { addSuffix: true });
}
