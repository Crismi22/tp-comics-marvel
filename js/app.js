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

const loader = document.querySelector('.loader-container');

const offLoader = () => {
    loader.classList.add('hidden');
    getComics()

}
const onLoader = () => {
    loader.classList.remove('hidden');

}
/**************
 * COMICS
 **************/
// const getParams = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params
// }
//NO CAMBIA LA VISTA  COMICS

const loadComics = async () => {
    

    // const params = getParams();
    const comicsResponse = await getComics();
    // const comicsResponse = await getComics(0, params.get('order'));


    const data = comicsResponse.data //nos trae de la paginacion "offset"
    const comics = data.results;
   

    const results = document.getElementById('comics-results');
    const backBtn = document.getElementById('back-button')
    const container = document.createElement('div');
    const row = document.createElement('div');

    results.appendChild(container)
    container.appendChild(row)
    
    container.classList.add('container');
    row.classList.add('row');
    
    offLoader();

    comics.forEach(comic => {
        // console.log(comic)
        onLoader();
        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const colum = document.createElement('div');
        const title = document.createElement('h3')

        card.addEventListener('click', () => {
            loadDetail(comic)
            onLoader()
            results.classList.add('hidden');
            backBtn.classList.remove('hidden');
            
        });

        backBtn.addEventListener('click', () => {
            results.classList.remove('hidden');
            backBtn.classList.add('hidden');
        
        })

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

const loadDetail = (comic) => {
    const comicDetail = document.getElementById('comic-details'); 
    const sectionDetail = document.querySelector('.comic-section');

    sectionDetail.classList.remove('hidden')
    comicDetail.classList.remove('hidden');

    const div = document.createElement('div');
    div.appendChild(document.createTextNode(comic.description));
    
}

// ***********
// PERSONAJES
// ***********
const loadCharacter = async () => {

    const response = await getCharacter();
    const data = response.data //nos trae de la paginacion "offset"
    const character = data.results;

    console.log(data)

    const results2 = document.getElementById('character-results');
    const container = document.createElement('div');
    const row = document.createElement('div');

    results2.appendChild(container)
    container.appendChild(row)
    
    container.classList.add('container');
    row.classList.add('row');
    results2.classList.remove('hidden')

    


    character.forEach(character => {
        console.log(character)

        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const colum = document.createElement('div');
        const title = document.createElement('h3')


        card.appendChild(cardImg);
        card.appendChild(cardBody);
        colum.appendChild(card);
        cardBody.appendChild(title);

        card.classList.add('card');
        cardImg.classList.add('card-img-top');
        cardBody.classList.add('card-body');
        colum.classList.add('col-md-3');

        row.appendChild(colum)
        cardImg.setAttribute('src', `${character.thumbnail.path}.${character.thumbnail.extension}`);


    });
}





//  **********
//   BUSQUEDA
// **********

const formSearch = document.getElementById('search-comics');

formSearch.addEventListener('submit', e => {
    e.preventDefault();
    onLoader();
    
    const orderBy = e.target['control-order-by'].value
    const searchInput = e.target.searching.value
    const searchType = e.target['search-type'].value

    
    const params = new URLSearchParams(window.location.search);

    params.set('order', orderBy);
    params.set('offset', 20);
    params.set('type', searchType);

    window.location.href = window.location.pathname +'?'+ params.toString();
    offLoader();
})







const init = () => {  
    loadComics();
    loadCharacter();
    offLoader();

}

init();

