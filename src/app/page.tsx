import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { mockCards } from "./mockhome";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className="card-container">
        {mockCards.map((card, index) => (
          <Card key={index} img={card.img} name={card.name} />
        ))}
      </div>
    </div>
  );
}
