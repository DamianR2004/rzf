import fetchJson from "$lib/fetch-json";

const baseURL = 'http://cms.bydr.studio:8055/items/';

export async function load() {
  const aboutRes = await fetchJson(`${baseURL}about`);

  return {
    about: aboutRes.data
  };
}
