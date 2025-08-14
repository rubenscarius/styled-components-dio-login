import {
  InputContainer,
  IconContainer,
  InputText,
  InputIconContainer,
  ErrorText,
} from "./styles.ts";
import { Controller } from "react-hook-form";
import type { IInput } from "./types.ts";

const Input = ({ letfIcon, name, errorMessage, control, ...rest }: IInput) => {
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
