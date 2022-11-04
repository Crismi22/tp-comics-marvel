//obtenemos la api y la guardamos para usar en app.js

const apiPublic = '913230280f095cfc021af9589db27af8';
const apiPrivate = '374f83ad0294aad353f76515c7a64f3a33d3a292';
const baseUrl = 'https://gateway.marvel.com/v1/public';




const getComics = async () => {
  const response = await fetch(`${baseUrl}/comics?apikey=${apiPublic}&offset=0&orderBy=title`);
  const data = response.json();
  return data
  
}
