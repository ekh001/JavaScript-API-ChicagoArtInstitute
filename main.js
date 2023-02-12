// Button style from Joel's Power Rangers doc
// Note: Gets data from API
const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/8991`)
    console.log(response.data)
    return response.data    
}
// Stores it
const DOM_Elements = {
    artwork_list : '.artwork-list',
}
// Makes it a list
const create_list = ( id, title ) => {
    const html = `a href ='#' class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${title} </a>`;
    document.querySelector(DOM_Elements.artwork_list).insertAdjacentHTML('beforeend', html)
}
// Loads list
const load_data = async () => {
    const artworks = await getData();
    artworks.forEach(element => create_list(element.id, element.title))
}
// Clears list
const clear_data= () => {
    document.querySelector(DOM_Elements.artist_list).innerHTML = '';
}





// ----------------------------From https://w3collective.com/fetch-display-api-data-javascript/
// fetch("https://api.artic.edu/api/v1/artworks/8991")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     displayArtwork(data)
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));

//   function displayArtwork(data) {
//     const artwork = data.data[0];
//     const artworkDiv = document.getElementById("artwork");

//     const artistName = artwork.strData;
//     const heading = document.createElement("h1");
//     heading.innerHTML = artistName;
//     artworkDiv.appendChild(heading);
//   }


// -----------Additional resource: 
// https://www.geeksforgeeks.org/working-with-apis-in-javascript/
