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
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  SubText,
} from "./styles.ts";
import { EmailOutlined, LockOutlined, Person } from "@mui/icons-material";

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
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

const SignUp = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?name=${formData.name}&email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        //handleClickSignIn();
      } else {
        alert("Email e/ou senha inválidos");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as pincipais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Nome completo"
                type="text"
                letfIcon={<Person />}
              />
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
              <Button
                title="Criar miinha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
            </Row>
            <Row>
              <SubText>Já tenho conta</SubText>
              <CriarText onClick={handleClickLogin}>Fazer login</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default SignUp;
