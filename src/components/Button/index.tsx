import { ButtonContainer } from "./styles.ts";
import type { IButton } from "./types.js";

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
