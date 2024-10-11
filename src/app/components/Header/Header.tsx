import Button from "../Button/Button";
import Container from "../Container/Container";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="w-full bg-indigo-400 shadow-lg py-2">
      <Container className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-4 items-center text-white">
          <p className="">Entre</p>
          <Button>Cadastre-se</Button>
        </div>
      </Container>
    </header>
  );
};
