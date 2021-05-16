import 'whatwg-fetch';

export function get(endpoint: string) {
  return fetch(endpoint).then((response) => response.json());
}
