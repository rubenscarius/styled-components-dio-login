import Button from "../../components/Button/index.js";
import Header from "../../components/Header/index.js";
import bannerImage from "../../assets/banner.png";
import { Container, TextContent, Title, TitleHighLight } from "./styles.ts";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evlouindo em
            comunidade com os maiores experts.
          </TextContent>
          <Button
            title="Começar agroa"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
