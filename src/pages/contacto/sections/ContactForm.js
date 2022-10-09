import React from 'react'
import styled from 'styled-components'
import { regexEmail, regexName } from '../../../config/config'
import { useForm } from '../../../hooks/useForm'

let errors = {};

const Consulta = styled.p`
    font-family: 'Manrope-bold';
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
`

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
`

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
`

const FormInfoH3 = styled.h3`
    font-family: 'Manrope-extralight';
    font-size: 2.5rem;
    @media (max-width: 992px) {

    }
    @media (max-width: 576px) {
        font-size: 1.8rem;
    }
`

const FormInfoP = styled.p`
    font-family: 'Manrope-bold';
    font-size: 1.5rem;
    @media (max-width: 992px) {

    }
    @media (max-width: 576px) {
        font-size: 1.2rem;
    }
`

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
    border: ${props => props.errors ? '1px solid red' : '1px solid var(--dark)'};
`

const FormInputSubmit = styled.input`
    width: 30%;
    background-color: var(--dark);
    color: var(--lightGrey);
    height: 35px;
    cursor: pointer;
    border: 1px solid var(--dark);    
`
const FormNameTextArea = styled.textarea`
    width: 100%;
    height: 120px;
    border: ${props => props.errors ? '1px solid red' : '1px solid var(--dark)'};
    resize: none;
`

const FormNameLabel = styled.label`
    font-family: 'Manrope-regular';
    font-size: 0.8rem;
`

const ErrorMsg = styled.p`
    color: red;
    font-family: 'Manrope-regular';
    font-size: 0.8rem;
`

const initialForm = {
    name: '',
    surname:'',
    email: '',
    subject: '',
    message: '',
}

export const validaciones = (form) => {
    let testName = regexName;
    let testEmail = regexEmail;

    if (!form.name.trim()) {
        errors.name = 'El nombre es obligatorio';
    } else if (!testName.test(form.name.trim())) {
        errors.name = 'El nombre no es válido';
    }
    if (!form.email.trim()) {
        errors.email = 'El email es obligatorio';
    } else if (!testEmail.test(form.email.trim())) {
        errors.email = 'El email no es válido';
    }
    if (!form.subject.trim()) {
        errors.subject = 'El asunto no es válido';
    }
    if (!form.message.trim()) {
        errors.message = 'El mensaje no es válido';
    }
    return errors;
}

export const ContactForm = () => {
    const { 
        form, 
        errors, 
        isLoading, 
        response, 
        handleBlur,
        handleChange, 
        handleSubmit 
    } = useForm(initialForm, validaciones);

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
            <Form id="form" onSubmit={handleSubmit}>
                <FormName>
                    <FormNameDiv width="50%">
                        <FormNameLabel htmlFor="name">
                            Nombre
                        </FormNameLabel>
                        <FormNameInput 
                            errors={errors.name === 'El nombre es obligatorio' || errors.name === 'El nombre no es válido'}
                            type="text" 
                            id="name"
                            name="name"
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={form.name} 
                            />
                        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                    </FormNameDiv>
                    <FormNameDiv width="50%">
                        <FormNameLabel htmlFor="apellido">
                            Apellido
                        </FormNameLabel>
                        <FormNameInput 
                            type="text" 
                            name="surname"
                            id="apellido"
                            onChange={handleChange} 
                            value={form.surname} 
                            />
                    </FormNameDiv>
                </FormName>
                <FormNameDiv width="100%">
                    <FormNameLabel htmlFor="email">
                        E-mail
                    </FormNameLabel>
                    <FormNameInput 
                            errors={errors.email === 'El email es obligatorio' || errors.email === 'El email no es válido'}
                            type="email" 
                            name="email"
                            id="email"
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            value={form.email} 
                            />
                    {errors.email && <ErrorMsg> {errors.email} </ErrorMsg>}
                </FormNameDiv>
                <FormNameDiv width="100%">
                    <FormNameLabel htmlFor="asunto">
                        Asunto
                    </FormNameLabel>
                    <FormNameInput 
                            errors={errors.subject === 'El asunto no es válido'}
                            type="text" 
                            name="subject"
                            id="asunto" 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            value={form.subject} 
                            />
                    {errors.subject && <ErrorMsg>{errors.subject}</ErrorMsg>}
                </FormNameDiv>
                <FormNameDiv width="100%">
                    <FormNameLabel htmlFor="msg">
                        Mensaje
                    </FormNameLabel>
                    <FormNameTextArea 
                            errors={errors.message === 'El mensaje no es válido'}
                            id="msg" 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                    {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
                </FormNameDiv>
                <FormInputSubmit type="submit" value="Enviar" />
            </Form>
        </FormContainer>
    </>
    )
}
