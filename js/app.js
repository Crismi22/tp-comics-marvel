// const searchType = document.querySelector('#search-type');
// const results = document.querySelector('#results');
// const resultsNumber = document.querySelector('.results-number');
// const comicCover = document.querySelector('.comic-cover');
// const comicTitle = document.querySelector('.comic-title');
// const comicPublished = document.querySelector('.comic-published');
// const comicWriters = document.querySelector('.comic-writers');
// const comicDescription = document.querySelector('.comic-description');
// const comicSection = document.querySelector('.comic-section');
// const characterSection = document.querySelector('.character-section');
// const resultSection = document.querySelector('.results-section');
// const characterPortrait = document.querySelector('.character-portrait');
// const characterName = document.querySelector('.character-name');
// const characterDescription = document.querySelector('.character-description');
// const searchButton = document.querySelector('.search-button');
// const loaderContainer = document.querySelector('.loader-container');
// const searchInput = document.querySelector('.search-input');

// //********loader
// const loader = document.querySelector('.loader-container')

// //****paginador
// const paginaActual = document.getElementById('pagina-actual');
// const totalPaginas = document.getElementById('total-paginas');
// const firstPage = document.querySelector('.first-page');
// const previusPage = document.querySelector('.previus-page');
// const nextPage = document.querySelector('.next-page');
// const lastPage = document.querySelector('.last-page');

// //  ******************** 
// //  API MARVEL INICIAL
// //  *******************

// const apiPublic = '913230280f095cfc021af9589db27af8';
// const apiPrivate = '374f83ad0294aad353f76515c7a64f3a33d3a292';
// const baseUrl = 'https://gateway.marvel.com/v1/public';
// // const url = `http://gateway.marvel.com/v1/public/comics/?apikey=${apiPublic}&offset=${offset}`;

// // *******PAGINADOR********
// let offset = 0;
// let resultsCount = 0;


// const getSearchParams = (isSearch) => {
//     let searchParams = `?apikey=${apiPublic}&offset=${offset}`
  
//     if(!isSearch){
//       return searchParams
//     }
  
//     // console.log(isSearch)

//   if (searchType.value === 'comics') {
//     searchParams += `${searchType.value}${searchParams}`;
//   }

//   return searchParams
// };

// // getSearchParams()
// const getApiUrl = (resourse, resourseId, subResourse) => {
//     const isSearch = !resourseId && !subResourse;
//     let url = `${baseUrl}${resourse}`
//     // console.log(url)

//     if(resourseId){
//         url += `/${resourseId}`
//     }
    
//     if(subResourse){
//         url += `/${subResourse}`
//     }
    
//     url += getSearchParams(isSearch) // ?apikey=${apiPublic}&offset=${offset}
//     return url; 
// }
// const updateresultsCount = count => {
//     resultsNumber.innerHTML = count;
//     resultsCount = count;
// } 

// const fecthUrl = async url => {
//     const response = await fetch(url)
//     const json = await response.json()
//     return json 
// }

// const fetchComics = async() => {
//     const {data : {results, total}
//         } = await fecthUrl(getApiUrl('comics'))
//     console.log(results)
//     console.log(total)
//     printComics(results)

// }

// // **************************
// //         PINTAR COMICS
// // **************************

// const printComics = comics => {
//     if(comics.length === 0){
//         results.innerHTML = '<h2 class="not-results">No hemos encontrado resultados</h2>'
//     }
//     for (const comic of comics) {
//         const comicCard = document.createElement('div');
//         comicCard.tabIndex = 0;
//         comicCard.classList.add('comic');
//         comicCard.onclick = () => {
//             console.log(comic, comic.id)
//         }
//         comicCard.innerHTML = `
//         <div class="comic-img-container">
//           <img src="${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}" 
//             alt="${comic.title}" class="comic-thumbnail" />
//           </div>
//           <h3 class="comic-title">${comic.title}</h3>`
          
//         results.append(comicCard)
//     } 
// }
// const loadDetail = (comic) => {

//     const comicDetail = document.getElementById('comic-detail');
//     const title = document.createElement('h3');
//     const text = document.createElement(comic.title);
//     const div = document.createElement('div');

//     title.appendChild(text);

//     comicDetail.appendChild(title);
//     comicDetail.appendChild(comic.title)
// }

// const search = () => {
//     if(searchType.value === 'comics')
//     fetchComics()
// }


// const inicio = () => {
//    search()
// }


// window.onload = inicio

//======================================================================================//



//para el input
// const text = e.target.searching.value;

// console.log(text)
