import Player from "./navbar";
import Sidebar from "./sidebar";
import handleArtist from './handleArtist'
import { useEffect } from "react";
const HomePage= () => {
  let rockArtists = [
    'queen',
    'u2',
    'thepolice',
    'eagles',
    'thedoors',
    'oasis',
    'thewho',
    'bonjovi',
  ]

  let popArtists = [
    'maroon5',
    'coldplay',
    'onerepublic',
    'jamesblunt',
    'katyperry',
    'arianagrande',
  ]

  let hipHopArtists = [
    'eminem',
    'snoopdogg',
    'lilwayne',
    'drake',
    'kanyewest',
  ]

  useEffect(() => {
    const rockRandomArtists: string[] = [];
    const popRandomArtists: string[] = [];
    const hipHopRandomArtists: string[] = [];

    (document.querySelector('#searchField') as HTMLInputElement).value = '';

    while (rockRandomArtists.length < 4) {
      const artist =
        rockArtists[Math.floor(Math.random() * rockArtists.length)];
      if (!rockRandomArtists.includes(artist)) {
        rockRandomArtists.push(artist);
      }
    }

    while (popRandomArtists.length < 4) {
      const artist = popArtists[Math.floor(Math.random() * popArtists.length)];
      if (!popRandomArtists.includes(artist)) {
        popRandomArtists.push(artist);
      }
    }

    while (hipHopRandomArtists.length < 4) {
      const artist =
        hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
      if (!hipHopRandomArtists.includes(artist)) {
        hipHopRandomArtists.push(artist);
      }
    }

    rockRandomArtists.forEach((artist) =>
      handleArtist(artist, '#rockSection')
    );

    popRandomArtists.forEach((artist) =>
      handleArtist(artist, '#popSection')
    );

    hipHopRandomArtists.forEach((artist) =>
      handleArtist(artist, '#hipHopSection')
    );
  }, []);

  return (
    <div className="container-fluid">
        <Sidebar/>
        <div className="mainPage">
          <div className="row">
            <div className="mainLinks">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="searchResults" style={{ display: 'none' }}>
                <h2>Search Results</h2>
                <div className="imgLinks py-3"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div
                  className="imgLinks py-3"
                  id="rockSection"
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="imgLinks py-3"
                  id="popSection"
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="imgLinks py-3"
                  id="hipHopSection"
                ></div>
              </div>
            </div>
          </div>
        </div>
      <Player/>
    </div>
  );
};

export default HomePage;
