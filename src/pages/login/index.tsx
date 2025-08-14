import Button from "../../components/Button/index.js";
import Header from "../../components/Header/index.js";
import Input from "../../components/Input/index.js";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api.js";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles.ts";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import type { IFormData } from "./types.ts";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/feed");
  };

  const handleClickSignUp = () => {
    navigate("/signup");
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        handleClickSignIn();
      } else {
        alert("Email e/ou senha inválidos");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as pincipais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu login</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
                letfIcon={<EmailOutlined />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                letfIcon={<LockOutlined />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci miha senha</EsqueciText>
              <CriarText onClick={handleClickSignUp}>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
