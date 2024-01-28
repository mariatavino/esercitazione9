import albumCard from './albumCard';
type searchType = (() => void);
type divType = Element | null;

  const search:searchType = async () => {
    let headers = new Headers({
      // sets the headers
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
    })
    let div: divType = document.querySelector('#searchResults');
    div!.innerHTML = ''
    let searchQuery: String = (document.querySelector('#searchField') as HTMLInputElement).value; // gets the value from the search box

    if (searchQuery.length > 2) {
      //if there's a value in the search box => fetch the information from rapidapi & display the result
      (document.querySelector('#searchResults') as HTMLInputElement).style.display='flex';
      (document.querySelector('#searchResults') as HTMLInputElement).style.flexWrap='wrap';
      (document.querySelector('#searchResults') as HTMLInputElement).className ='imgLinks';

      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            searchQuery,
          {
            method: 'GET',
            headers,
          }
        ) // gets the information

        if (response.ok) {
          let result = await response.json() // transforms the response to json
          let songs = result.data // gets the songs info

          for (let x = 0; x < songs.length; x++) {
            div!.innerHTML += albumCard(songs[x])
          }
        } else {
          console.log('error')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      //else just hide the section!
      (document.querySelector('#searchResults')as HTMLInputElement).style.display = 'none'
    }
  }

  export default search;