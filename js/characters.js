

const getCharacters = async (orderBy, offset) => {
    const response = await fetch(
      `${baseUrl}characters?orderBy=${orderBy}&offset=${offset}&apikey=${apiPublic}`
    );
  
    const data = await response.json();
  
    return data;
  };