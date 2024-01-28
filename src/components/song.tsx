interface trackType{
    title:string,
    duration:number

}

function song(track:trackType) {
    return `
        <div class="py-3 trackHover">
            <a href="#" class="card-title trackHover px-3" style="color:white" >${
              track.title
            }</a>
            <small class="duration" style="color:white">${Math.floor(
              (track.duration) / 60 // setting the duration minutes
            )}:${
      (track.duration) % 60 < 10
        ? "0" + ((track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
        : (track.duration) % 60
    }</small>
        </div>`;
  }

  export default song;