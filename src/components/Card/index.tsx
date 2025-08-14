import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles.ts";
import { ThumbUpOutlined } from "@mui/icons-material";

const Card = () => {
  return (
    <>
      <CardContainer>
        <ImageBackground src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCqRg8eZEGBDoz58j93HYQQ0_KTV0t3nskLQ&s" />
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/135164952?v=4" />
            <div>
              <h4>Rubens Carius</h4>
              <p>Há 8 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              <strong>Saiba mais</strong>
            </p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #JavaScript</h4>
            <p>
              <ThumbUpOutlined /> <span>10</span>
            </p>
          </HasInfo>
        </Content>
      </CardContainer>
    </>
  );
};

export default Card;
