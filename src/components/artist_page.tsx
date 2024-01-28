import Player from "./navbar";
import Sidebar from "./sidebar";
import albumCard from "./albumCard";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Artist_page = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try{
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key":
        "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();

        // displaying the playButton
        let playButton: Element|null = document.querySelector("#playButton");
        playButton!.classList.remove("d-none");
        playButton!.classList.add("d-inline");

        // displaying the followButton
        let followButton:Element | null = document.querySelector("#followButton");
        followButton!.classList.remove("d-none");
        followButton!.classList.add("d-inline");

        // setting the artist name
        let titleMain:Element|null = document.querySelector(".titleMain");
        titleMain!.innerHTML = artist.name;

        // setting the followers section
        let followers = (document.querySelector("#followers")as HTMLElement);
        followers.innerText = artist.nb_fan + " followers";

        let tracksResponse = await fetch(
          // await the fetch of the artist songs
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          for (let i = 0; i < tracklist.data.length; i++) {
            let apiLoaded = (document.querySelector("#apiLoaded") as HTMLElement);
            apiLoaded.innerHTML += albumCard(tracklist.data[i]);
          }
        }
      } else {
        // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        (document.querySelector("#apiLoaded")as HTMLElement).innerHTML =
          "NOT OK" + (await response.text());
      }
    } catch (exception:any) {
      // ex.: Url is not correct, Internal Server Error
      (document.querySelector("#apiLoaded")as HTMLElement).innerHTML = exception;
    }
  };

    fetchData();
  }, [id]);

  return (
    <Container fluid>
      <Sidebar/>
      <Row className="mb-3">
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 col-md-10 col-lg-10 mt-5">
          <h2 className="titleMain"></h2>
          <div id="followers"></div>
          <div className="d-flex justify-content-center" id="button-container">
            <Button className="btn btn-success mr-2 mainButton d-none" id="playButton">
              PLAY
            </Button>
            <Button className="btn btn-outline-light mainButton d-none" id="followButton">
              FOLLOW
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <Row id="apiLoaded"></Row>
          </div>
        </Col>
      </Row>
      <Player/>
    </Container>
  );
};

export default Artist_page;
