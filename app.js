//api publica y privada de marvel oficial creada con nuestra cuenta.

// const apiPublic = '913230280f095cfc021af9589db27af8';
// const apiPrivate = '374f83ad0294aad353f76515c7a64f3a33d3a292';




// const getData = () => {
// const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiPublic}`;
// fetch(url)
//     .then(resp => resp.json())
//     .then(json => console.log((json)))


// }

const searchType = document.querySelector('#search-type');
const results = document.querySelector('#results');
const resultsNumber = document.querySelector('.results-number');
const comicCover = document.querySelector('.comic-cover');
const comicTitle = document.querySelector('.comic-title');
const comicPublished = document.querySelector('.comic-published');
const comicWriters = document.querySelector('.comic-writers');
const comicDescription = document.querySelector('.comic-description');
const comicSection = document.querySelector('.comic-section');



const apiPublic = '7e127bd9cabb683df771ddcab140a8a8';
const apiPrivate = 'aa58f246ede578352b8489f4101cfc27483d1118'
const baseUrl = 'http://gateway.marvel.com/v1/public/';
let offset = 0;
let resultsCount = 0;

const getSearchParams = (isSearch) => {
  let searchParams = `?apikey=${apiPublic}&offset=${offset}`

  if(!isSearch){
    return searchParams
  }
  
  return searchParams // ?apikey=${apiPublic}&offset=${offset}
}


const getApiURL = (resourse, resourseId, subResourse) => {
  const isSearch = !resourseId && !subResourse;
  let url = `${baseUrl}${resourse}` //http://gateway.marvel.com/v1/public/comics

  if(resourseId){
    url += `/${resourseId}`
  }

  if(subResourse){
    url += `/${subResourse}`
  }

  url += getSearchParams(isSearch) // ?apikey=${apiPublic}&offset=${offset}
  return url; //http://gateway.marvel.com/v1/public/comics/?apikey=${apiPublic}&offset=${offset}
}

const updateresultsCount = count => {
  resultsNumber.innerHTML = count;
  resultsCount = count;
} 

const fecthUrl =  async url => {
  const response = await fetch(url)
  const json = await response.json();
  return json
}

const fetchComics = async () => {
  const {data : { 
    results, 
    total
  }} = await fecthUrl(getApiURL('comics')) //http://gateway.marvel.com/v1/public/comics/?apikey=${apiPublic}&offset=${offset}
  printComics(results)
  updateresultsCount(total)
}

// pintar los comicas
const printComics = comics => {
  if(comics.length === 0){
    results.innerHTML = '<h2 class="no-results">no hemos encontrado resultados</h2>'
  }

  for (const comic of comics) {
    const comicCard = document.createElement('div');
    comicCard.tabIndex = 0;
    comicCard.classList.add('comic');
    comicCard.onclick = () => {
      fetchComic(comic.id)
    }
    comicCard.innerHTML = `
      <div class="comic-img-container">
        <img src="${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}" alt="${comic.title}" class="comic-thumbnail" />
      </div>
      <h3 class="comic-title">${comic.title}</h3>`

    results.append(comicCard)
  }
}

const fetchComic = async comicId => {
  const {
    data : 
    {
      results : 
      [comic]
    }
  } = await fecthUrl(getApiURL('comics', comicId))

  const coverPath = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
  const releaseDate = new Intl.DateTimeFormat('es-MX').format(
    new Date(comic.dates.find(date => date.type === 'onsaleDate').date)
    )
  const writers = comic.creators.items 
  .filter(creator => creator.role === 'writer') 
  .map(creator => creator.name)
  .join(', ')
  updateComicDetails(
    coverPath,
    comic.title,
    releaseDate,
    writers,
    comic.description
  )
  showComicDetail()
}

const updateComicDetails = (img, title, releaseDate, writers, description) => {
  comicCover.src = img;
  comicTitle.innerHTML = title;
  comicPublished.innerHTML = releaseDate;
  comicWriters.innerHTML =  writers;
  comicDescription.innerHTML = description 
}

const showComicDetail = () => {
  comicSection.classList.remove('hidden')
}

const search = () => {
  if(searchType.value === 'comics'){
    fetchComics()
  }
}

const inicio = () => {
  search()
}

window.onload = inicio;