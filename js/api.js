

const getComics = async (offset, orderBy) => {
  const response = await fetch(`${baseUrl}/comics?apikey=${apiPublic}&offset=0&orderBy=title`);
  // const response = await fetch(`${baseUrl}/comics?apikey=${apiPublic}&offset=${offset}&orderBy=${orderBy}title`);
  const data = response.json();
  return data
  
}
//EN LA LINEA 12 TIRA ERROR Y ME ROMPE EL CODIGO
