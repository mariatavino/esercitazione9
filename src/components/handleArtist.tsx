import albumCard from "./albumCard"

interface handleArtistType{
    (artistName:string,domQuerySelector:string):void
}
const handleArtist:handleArtistType = async (artistName:string, domQuerySelector:string) => {
    // artistName = "eminem", "metallica", etc...
    // domQuerySelector = "#rockSection" etc...
    let headers = new Headers({
      // sets the headers
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
          artistName,
        {
          method: 'GET',
          headers,
        }
      ) // gets the information
      if (response.ok) {
        let result = await response.json() // transforms the response to json
        let songInfo = result.data
        let div: Element | null = document.querySelector(domQuerySelector)
        div!.innerHTML += albumCard(songInfo[0]) // create a new album tyle
      } else {
        console.log('error')
      }
    } catch (err) {
      console.log(err)
    }
  }

  export default handleArtist;