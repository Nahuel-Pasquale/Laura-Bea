import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const FormNameDiv = styled.div`
  width: ${(props) => props.width};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  @media (max-width: 475px) {
    width: 100%;
  }
`;

const FormNameInput = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid var(--dark);
  font-family: "Roboto";
  padding-left: 5px;
`;

const FormNameTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: 1px solid var(--dark);
  resize: none;
  font-family: "Roboto";
  padding: 5px 5px;
`;

const FormNameLabel = styled.label`
  font-family: "Manrope-regular";
  font-size: 0.8rem;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  font-family: "Manrope-regular";
`;

const Input = ({
  id,
  width,
  type,
  placeholder,
  label,
  textArea,
  error,
  control,
  name,
  rules,
}) => {
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue: "",
  });

  const selectedInput = textArea ? (
    <FormNameTextArea
      {...field}
      id={id}
      placeholder={placeholder}
      name={name}
      label={label}
    />
  ) : (
    <FormNameInput
      {...field}
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      label={label}
    />
  );

  return (
    <FormNameDiv width={width}>
      <FormNameLabel htmlFor={id}>{label}</FormNameLabel>
      {selectedInput}
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </FormNameDiv>
  );
};

export default Input;
