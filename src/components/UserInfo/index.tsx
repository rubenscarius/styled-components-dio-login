import { Container, NameText, Progress, UserPicture } from "./styles.ts";
import type { IUserInfo } from "./types.ts";

const UserInfo = ({ nome, image, percentual }: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};

export default UserInfo;
