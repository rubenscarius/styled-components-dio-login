import Button from "../../components/Button/index.tsx";
import Card from "../../components/Card/index.tsx";
import Header from "../../components/Header/index.tsx";
import UserInfo from "../../components/UserInfo/index.tsx";
import {
  Container,
  TextContent,
  Title,
  TitleHighLight,
  Column,
} from "./styles.ts";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighLight># RANKING TOP 5 DA SEMANA</TitleHighLight>
          <UserInfo
            percentual={70}
            nome="Rubens Carius"
            image="https://avatars.githubusercontent.com/u/135164952?v=4"
          />
          <UserInfo
            percentual={14}
            nome="Rubens Carius"
            image="https://avatars.githubusercontent.com/u/135164952?v=4"
          />
          <UserInfo
            percentual={36}
            nome="Rubens Carius"
            image="https://avatars.githubusercontent.com/u/135164952?v=4"
          />
          <UserInfo
            percentual={80}
            nome="Rubens Carius"
            image="https://avatars.githubusercontent.com/u/135164952?v=4"
          />
          <UserInfo
            percentual={20}
            nome="Rubens Carius"
            image="https://avatars.githubusercontent.com/u/135164952?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
