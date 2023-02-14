async function clickedEvent(img_index, item_index) {
    let track = document.getElementsByTagName('img')[img_index].attributes[2].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${track}`,{
         method: 'GET',
         headers: headers
     });

     let result = await fetch(request);

     let response = await result.json();

     console.log(response)
// ------------------------------------------------------------------------------------------
     let test = document.getElementById("test")
     test = `"${response.data.title}" is the title of the artwork. It was created by ${response.data.artist_title}, in the year ${response.data.date_display}. \nLocation: ${response.data.place_of_origin} \nMedium: ${response.data.medium_display} \nDimensions: ${response.data.dimensions}`;
     alert(test);

    // Issue 1: I am statically accessing only one p tag but I need to do it for all pics: DONE
    // Issue 2: This only displays one piece of information, how do I display multiple?: WITH A POP-UP
    // Hint 1: I can make response.data.id an fstring (response.data.artist_display): Thank you!
    // User query notation: [`${variable}`]: Tried and failed, but I think I like the alert box appearance more anyway.


}
// ----------------------------------------
 /**
  * @param id
  * @param event
  */

 function getArt(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
    }
}
