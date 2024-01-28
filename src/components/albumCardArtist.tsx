interface songInfoType{
    id:Number,
    title:String,
    artist:{
        id:number,
        name:string
    }
    album: {
        id: Number,
        title: String
        cover_medium: String
    }
}
interface albumInterface{
  (songInfo:songInfoType):string
}
let albumCardArtist:albumInterface = (songInfo:songInfoType) => {
    // songInfo represents the info for the current song
    // creating the wrapper div
    return `
    <div class="mb-5">
        <a href="/album_page/${songInfo.album.id}">
          <img class="img-fluid" src=${songInfo.album.cover_medium} alt="1" />
        </a>
        <p>
          <a href="#">
            Track: "${songInfo.title.length < 16
              ? `${songInfo.title}`
              : `${songInfo.title.substring(0, 16)}...`}"
          </a><br>
          <a href="/album_page/${songInfo.album.id}">
            Album: "${songInfo.album.title.length < 16
              ? `${songInfo.album.title}`
              : `${songInfo.album.title.substring(0, 16)}...`}"
          </a>
          <a href="/artist_page/${songInfo.artist.id}">
            Artist: ${songInfo.artist.name}
          </a>
        </p>
      </div>`
  }

  export default albumCardArtist;