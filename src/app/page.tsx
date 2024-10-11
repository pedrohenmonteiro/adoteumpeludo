import { Card } from "./components/Card/Card";
import Container from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { mockCards } from "./mockhome";

export default function Home() {
  return (
    <div className="">
      <Header />

      <Container>
        <div className="grid grid-cols-4 gap-3">
          {mockCards.map((card, index) => (
            <Card key={index} img={card.img} name={card.name} />
          ))}
        </div>
      </Container>
    </div>
  );
}
