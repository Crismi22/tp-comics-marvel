//api publica y privada de marvel oficial creada con nuestra cuenta.

const apiPublic = '913230280f095cfc021af9589db27af8';
const apiPrivate = '374f83ad0294aad353f76515c7a64f3a33d3a292';




const getData = () => {
const url = `http://gateway.marvel.com/v1/public/comics?apikey=${apiPublic}`;
fetch(url)
    .then(resp => resp.json())
    .then(json => console.log((json)))


}