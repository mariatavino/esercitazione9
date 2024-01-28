export interface Album {
    title:string,
    id:number,
    cover_medium: string,
    contributors:{
        id:number,
        name:string,
    }
    tracks: {
      data: Track[];
    };
  }
  
  export interface Track {
    id: string;
    title: string;
    artist: string;
    duration:number;
  }
