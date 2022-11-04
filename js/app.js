
const loadComics = async () => {
    const comicsResponse = await getComics();
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
        console.log(comic)

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

loadComics();