import React from 'react'
import styled from 'styled-components'

const Consulta = styled.p`
    font-family: 'Manrope-bold';
    font-size: 1.5rem;
    text-align: right;
    width: 60%;
    height: 10vh;
    margin-left: 20%;
`

const FormContainer = styled.div`
    width: 60%;
    margin-left: 20%;
    display: flex;
`

const FormInfo = styled.div`
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
`

const FormInfoH3 = styled.h3`
    font-family: 'Manrope-extralight';
    font-size: 2.5rem;
`

const FormInfoP = styled.p`
    font-family: 'Manrope-bold';
    font-size: 1.5rem;
`

const Form = styled.form`
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`

const FormName = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`
const FormNameDiv = styled.div`
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const FormNameInput = styled.input`
    width: 100%;
    height: 35px;
    border: 1px solid var(--dark);
`

const FormInputSubmit = styled.input`
    width: 30%;
    background-color: var(--dark);
    color: var(--lightGrey);
    height: 35px;
    border: 1px solid var(--dark);    
`
const FormNameTextArea = styled.textarea`
    width: 100%;
    height: 120px;
    border: 1px solid var(--dark);
`

const FormNameLabel = styled.label`
    font-family: 'Manrope-regular';
    font-size: 0.8rem;
`

export const ContactForm = () => {
  return (
    <>
        <Consulta>
            {'<'} Consulta por mail
        </Consulta>
        <FormContainer>
            <FormInfo>
                <FormInfoH3>
                    Gracias por visitar <br/> mi sitio web.
                </FormInfoH3>
                <FormInfoP>
                    Stay in touch!
                </FormInfoP>
            </FormInfo>
            <Form>
                <FormName>
                    <FormNameDiv width="50%">
                        <FormNameLabel for="name">
                            Nombre
                        </FormNameLabel>
                        <FormNameInput type="text" id="name" />
                    </FormNameDiv>
                    <FormNameDiv width="50%">
                        <FormNameLabel for="apellido">
                            Apellido
                        </FormNameLabel>
                        <FormNameInput type="text" id="apellido" />
                    </FormNameDiv>
                </FormName>
                <FormNameDiv width="100%">
                    <FormNameLabel for="email">
                        E-mail
                    </FormNameLabel>
                    <FormNameInput type="email" id="email" />
                </FormNameDiv>
                <FormNameDiv width="100%">
                    <FormNameLabel for="asunto">
                        Asunto
                    </FormNameLabel>
                    <FormNameInput type="text" id="asunto" />
                </FormNameDiv>
                <FormNameDiv width="100%">
                    <FormNameLabel for="msg">
                        Mensaje
                    </FormNameLabel>
                    <FormNameTextArea id="msg" />
                </FormNameDiv>
                <FormInputSubmit type="submit" value="Enviar" />
            </Form>
        </FormContainer>
    </>
  )
}
