import Button from "../Button/index.tsx";
import logo from "../../assets/logo-full.webp";
import type { IHeader } from "./types.ts";
import {
  Container,
  BuscarInputContainer,
  Row,
  Column,
  Wrapper,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles.ts";

const Header = ({ autenticado }: IHeader) => {
  return (
    <>
      <Wrapper>
        <Container>
          <Row>
            <img src={logo} alt="Logo da dio" />
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {autenticado ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/135164952?v=4" />
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default Header;
