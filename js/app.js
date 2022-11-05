// ***************************
//      Portada
// *************************
/* Ocultar video*/
const btnOcultar = document.getElementById('ocultar-video');
const video = document.querySelector('.video');
const image = document.querySelector('.image');

btnOcultar.addEventListener('click', () => {
    video.classList.toggle('hidden');
    image.classList.toggle('hidden')
});

/**************
 * COMICS
 **************/
// const getParams = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params
// }
//NO CAMBIA LA VISTA COMICS

const loadComics = async () => {

    // const params = getParams();
    const comicsResponse = await getComics();
    // const comicsResponse = await getComics(0, params.get('order'));


    const data = comicsResponse.data //nos trae de la paginacion "offset"
    const comics = data.results;

    console.log(data)

    const results = document.getElementById('comics-results');
    const container = document.createElement('div');
    const row = document.createElement('div');

    results.appendChild(container)
    container.appendChild(row)
    
    container.classList.add('container');
    row.classList.add('row');
    


    comics.forEach(comic => {
        // console.log(comic)

        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const colum = document.createElement('div');
        const title = document.createElement('h3')

        const texTitle = document.createTextNode(comic.title)

        card.appendChild(cardImg);
        card.appendChild(cardBody);
        colum.appendChild(card);
        cardBody.appendChild(title);
        title.appendChild(texTitle);

        card.classList.add('card');
        cardImg.classList.add('card-img-top');
        cardBody.classList.add('card-body');
        colum.classList.add('col-md-3');
        title.classList.add('comic-title');

        row.appendChild(colum)
        cardImg.setAttribute('src', `${comic.thumbnail.path}.${comic.thumbnail.extension}`);


    });
}

// ***********
// PERSONAJES
// ***********
// const loadCharacter = async () => {
    // const comicsResponse = await getCharacter();
    // const data = comicsResponse.data //nos trae de la paginacion "offset"
    // const comics = data.results;

    // console.log(data)

    // const results = document.getElementById('comics-results');
    // const container = document.createElement('div');
    // const row = document.createElement('div');

    // results.appendChild(container)
    // container.appendChild(row)
    
    // container.classList.add('container');
    // row.classList.add('row');
    


    // comics.forEach(comic => {
    //     console.log(comic)

    //     const card = document.createElement('div');
    //     const cardImg = document.createElement('img');
    //     const cardBody = document.createElement('div');
    //     const colum = document.createElement('div');
    //     const title = document.createElement('h3')

    //     const texTitle = document.createTextNode(comic.title)

    //     card.appendChild(cardImg);
    //     card.appendChild(cardBody);
    //     colum.appendChild(card);
    //     cardBody.appendChild(title);
    //     title.appendChild(texTitle);

    //     card.classList.add('card');
    //     cardImg.classList.add('card-img-top');
    //     cardBody.classList.add('card-body');
    //     colum.classList.add('col-md-3');
    //     title.classList.add('comic-title');

    //     row.appendChild(colum)
    //     cardImg.setAttribute('src', `${comic.thumbnail.path}.${comic.thumbnail.extension}`);


//     });
// }

loadComics();

// const loader = document.querySelector('.loader');

//     if(loadComics === true){
//         loader.classList.add('hidden');
//     }

//  **********
//   BUSQUEDA
// **********

const formSearch = document.getElementById('search-comics');

formSearch.addEventListener('submit', e => {
    e.preventDefault();
    
    const orderBy = e.target['control-order-by'].value
    const searchInput = e.target.searching.value
    const searchType = e.target['search-type'].value

    
    const params = new URLSearchParams(window.location.search);

    params.set('order', orderBy);
    params.set('input', searchInput);
    params.set('type', searchType);

    window.location.href = window.location.pathname +'?'+ params.toString();

})









