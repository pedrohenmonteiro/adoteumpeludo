import Button from "../Button/Button";
import Container from "../Container/Container";

export const Header = () => {
  return (
    <header className="w-full bg-indigo-400">
      <Container className="flex justify-between items-center">
        <h1 className="text-white font-bold">Adote um peludo</h1>
        <div>
          <Button>Teste</Button>
        </div>
      </Container>
    </header>
  );
};
