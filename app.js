const searchType = document.querySelector('#search-type');
const results = document.querySelector('#results');
const resultsNumber = document.querySelector('.results-number');
const comicCover = document.querySelector('.comic-cover');
const comicTitle = document.querySelector('.comic-title');
const comicPublished = document.querySelector('.comic-published');
const comicWriters = document.querySelector('.comic-writers');
const comicDescription = document.querySelector('.comic-description');
const comicSection = document.querySelector('.comic-section');

//  ********************
//  API MARVEL INICIAL
//  *******************

const apiPublic = '913230280f095cfc021af9589db27af8';
const apiPrivate = '374f83ad0294aad353f76515c7a64f3a33d3a292';
const baseUrl = 'http://gateway.marvel.com/v1/public/';
// const url = `http://gateway.marvel.com/v1/public/comics/?apikey=${apiPublic}&offset=${offset}`;

// *******PAGINADOR********
let offset = 0;
let resultsCount = 0;


const getSearchParams = (isSearch) => {
    let searchParams = `?apikey=${apiPublic}&offset=${offset}`
  
    if(!isSearch){
      return searchParams
    }
  
    console.log(isSearch)

  if (searchType.value === 'comics') {
    searchParams += `${searchType.value}${searchParams}`;
  }

  return searchParams
};

// getSearchParams()
const getApiUrl = (resourse, resourseId, subResourse) => {
    const isSearch = !resourseId && !subResourse;
    let url = `${baseUrl}${resourse}`
    console.log(url)

    if(resourseId){
        url += `/${resourseId}`
    }
    
    if(subResourse){
        url += `/${subResourse}`
    }
    
    url += getSearchParams(isSearch) // ?apikey=${apiPublic}&offset=${offset}
    return url; 
}

const fecthUrl = async url => {

    const response = await fetch(url)
    console.log(response)
}

const fetchComics = async() => {
    const data = fecthUrl(getApiUrl('comics'))
}

const search = () => {
    if(searchType.value === 'comics')
    fetchComics()
}


const inicio = () => {
   search()
}


window.onload = inicio