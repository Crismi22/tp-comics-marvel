

const getCharacters = async (orderBy, offset) => {

  let url = `${baseUrl}/characters?apikey=${apiPublic}`

  if(orderBy) url += `orderBy=${orderBy}`
  if(offset) url += `offset=${offset}`


    const response = await fetch(
      `${baseUrl}/characters?apikey=${apiPublic}`
    );
  
    const data = await response.json();
  
    return data;
  };