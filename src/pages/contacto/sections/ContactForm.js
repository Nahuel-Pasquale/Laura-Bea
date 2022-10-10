import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { sendMail } from "../../../helpers/email";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../helpers/schema";
import Input from "../../../components/input/Input";

const Consulta = styled.p`
  font-family: "Manrope-bold";
  font-size: 1.5rem;
  text-align: right;
  width: 60%;
  height: 10vh;
  margin-left: 20%;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    /* width: 80%; */
    font-size: 1rem;
    width: 80%;
    margin-left: 10%;
    margin-top: 15%;
  }
`;

const FormContainer = styled.div`
  width: 60%;
  margin-left: 20%;
  display: flex;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    /* width: 80%; */
    font-size: 1rem;
    flex-direction: column-reverse;
    width: 80%;
    margin-left: 10%;
  }
`;

const FormInfo = styled.div`
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    width: 80%;
    height: 20vh;
    margin-top: 25%;
  }
`;

const FormInfoH3 = styled.h3`
  font-family: "Manrope-extralight";
  font-size: 2.5rem;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const FormInfoP = styled.p`
  font-family: "Manrope-bold";
  font-size: 1.5rem;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Form = styled.form`
  width: 50%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media (max-width: 992px) {
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FormName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const FormInputSubmit = styled.input`
  width: 30%;
  background-color: var(--dark);
  color: var(--lightGrey);
  height: 35px;
  cursor: pointer;
  border: 1px solid var(--dark);
`;

const FormSuccess = styled.p`
  color: green;
  font-size: 1rem;
  font-family: "Manrope-regular";
`;

const FormError = styled.p`
  color: red;
  font-size: 1rem;
  font-family: "Manrope-regular";
`;

export const ContactForm = () => {
  const [isValidForm, setIsValidForm] = useState(null);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const { name, surname, email, msg } = data;
    console.log(data);
    let templateParams = {
      name: name,
      surname: surname,
      email: email,
      msg: msg,
    };
    sendMail(templateParams, setIsValidForm, reset);
  };
  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      setIsValidForm(null);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidForm]);

  return (
    <>
      <Consulta>{"<"} Consulta por mail</Consulta>
      <FormContainer>
        <FormInfo>
          <FormInfoH3>
            Gracias por visitar <br /> mi sitio web.
          </FormInfoH3>
          <FormInfoP>Estemos en contacto!</FormInfoP>
        </FormInfo>
        <Form
          autocomplete="off"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          name="contact"
        >
          <FormName>
            <Input
              id="name"
              name="name"
              width="50%"
              type="text"
              placeholder="Nombre"
              label="Nombre"
              control={control}
              error={errors.name}
            />
            <Input
              id="surname"
              name="surname"
              width="50%"
              type="text"
              placeholder="Apellido"
              label="Apellido:"
              control={control}
              error={errors.surname}
            />
          </FormName>
          <Input
            id="email"
            name="email"
            width="100%"
            type="email"
            placeholder="Email"
            label="Email:"
            control={control}
            error={errors.email}
          />
          <Input
            id="subject"
            name="subject"
            width="100%"
            type="text"
            placeholder="Asunto"
            label="Asunto:"
            control={control}
          />
          <Input
            textArea
            id="msg"
            name="msg"
            width="100%"
            type="text"
            placeholder="Mensaje"
            label="Mensaje:"
            control={control}
            error={errors.msg}
          />
          <FormInputSubmit type="submit" value="Enviar" />
          {isValidForm ? (
            <FormSuccess>El mensaje se ha enviado correctamente</FormSuccess>
          ) : isValidForm === false ? (
            <FormError>Error de servidor, intente mas tarde.</FormError>
          ) : null}
        </Form>
      </FormContainer>
    </>
  );
};
