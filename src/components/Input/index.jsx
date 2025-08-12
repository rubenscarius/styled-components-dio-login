import {
  InputContainer,
  IconContainer,
  InputText,
  InputIconContainer,
  ErrorText,
} from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ letfIcon, name, errorMessage, control, ...rest }) => {
  return (
    <>
      <InputContainer>
        <IconContainer>
          {letfIcon ? (
            <InputIconContainer>{letfIcon}</InputIconContainer>
          ) : null}
        </IconContainer>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export default Input;
