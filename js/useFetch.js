export default async function useFetch(url) {
  try {
    const resp = await fetch(url),
      result = await resp.json();
    return result;
  } catch {
    return null;
  }
}
