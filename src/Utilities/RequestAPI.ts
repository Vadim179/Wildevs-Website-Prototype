export function requestAPI(endpoint: string, requestConfig: RequestInit = {}) {
  const url = process.env.REACT_APP_API_URL + endpoint
  return fetch(url, requestConfig).then(response => response.json())
}
