export function objectToQueryString(obj: any) {
  //TODO check object dept
  const keys = Object.keys(obj);
  const keyValuePairs = keys.map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
  });
  return keyValuePairs.join('&');
}