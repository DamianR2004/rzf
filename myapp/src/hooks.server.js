export async function handle({ event, resolve }) {
  const response = await resolve(event);
  
  response.headers.set('cache-control', 'public, max-age=300, s-maxage=300');
  
  return response;
}