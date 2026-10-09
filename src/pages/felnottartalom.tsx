import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Mivan = () => {
  type elatkozottauto = {
    nev: string;
    desc: string;
    src: string;
  };
  const cursedlista: Array<elatkozottauto> = [
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/a-suzuki-swift-transformed-into-a-little-tikes-cozy-coupe-v0-j9o06rhgr5gg1.png",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/a0a80toai7j21.jpg",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/he-l-i-f-t-v0-f2agyjazbdj21.png",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/ize.png",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/lsslbz0eu8l31.jpg",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/m9cwok0sajj21.jpg",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/red-bull-ladaderbi-budapest-purman-2024.png",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/roundjpg.png",
    },
    {
      nev: "swih",
      desc: "gyors",
      src: "src/assets/red bull/y46kkv4qhfc41.jpg",
    },
  ];

  const forLoop = (n: number) => {
    const genyo: Array<React.JSX.Element> = [];
    for (let i: number = 0; i < n; i++) {
      genyo.push(
        generateKorhinta(
          cursedlista[Math.round(Math.random() * 8)],
          cursedlista[Math.round(Math.random() * 8)],
          cursedlista[Math.round(Math.random() * 8)],
        ),
      );
    }
    return genyo;
  };

  const generateKorhinta = (
    a: elatkozottauto,
    b: elatkozottauto,
    c: elatkozottauto,
  ) => {
    return (
      <>
        <Col xs="4">
          <Card>
            <Card.Body>
              <Carousel>
                <Carousel.Item>
                  <img src={a.src} style={{ height: "300px" }} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={b.src} style={{ height: "300px" }} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={c.src} style={{ height: "300px" }} alt="" />
                </Carousel.Item>
              </Carousel>
              <Card.Text>{a.desc}</Card.Text>
              <Button variant="danger">tesomsz ezt NE vedd meg</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  };

  return (
    <>
      <Container>
        <Row>{forLoop(6)}</Row>
      </Container>
    </>
  );
};
export default Mivan;
