import React from 'react'
import styled from 'styled-components';

const Contact = styled.div`
  width: 60%;
  padding-top: 15%;
  margin-left: 20%;
  display: flex;
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 0;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const ContactInfo = styled.div`
  width: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  /* justify-content: center; */
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    width: 70%;
    height: 60vh;
    padding: 0;
    justify-content: center;
    /* gap: 30px; */
  }
`

const ContactInfoH3 = styled.h3`
  font-family: 'Manrope-extralight';
  font-size: 2.5rem;
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`
const ContactInfoH4 = styled.h4`
  font-family: 'Manrope-bold';
  font-size: 1.7rem;
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    font-size: 1.3rem;
  }
`

const ContactInfoPContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  /* justify-content: center; */
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    /* font-size: 1.3rem; */
  }
`
const ContactInfoP = styled.p`
  font-family: 'Manrope-regular';
  font-size: 1rem;
  a{
    color: var(--dark);
  }
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`

const ContactMap = styled.iframe`
  width: 50%;
  height: 50vh;
  border: none;
  @media (max-width: 992px) {
    
  }
  @media (max-width: 576px) {
    width: 100vw;
    height: 100vw;
  }
`

export const ContactSectionMap = () => {
  return (
    <>
        <Contact>
            <ContactInfo>
              <ContactInfoH3>
                Sigamos en contacto
              </ContactInfoH3>
              <ContactInfoH4>
                Seguí mi trabajo {'>'}
              </ContactInfoH4>
              <ContactInfoPContainer>
                <ContactInfoP>
                  Guillermo E. Hudson - Bs,As, Argentina.
                </ContactInfoP>
                <ContactInfoP>
                  lauragut53@gmail.com
                </ContactInfoP>
                <ContactInfoP>
                  <a href="https://instagram.com/laurabea.1/" target="_blank" rel='noreferrer'> @laurabea.1 </a>
                </ContactInfoP>
              </ContactInfoPContainer>
            </ContactInfo>
            <ContactMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6552.247061742605!2d-58.16499437394794!3d-34.80283387163328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32702303e2c75%3A0xbd1488483c4ffae4!2sAbril%20Club%20de%20Campo%20Puesto%202!5e0!3m2!1ses!2sar!4v1660050838785!5m2!1ses!2sar"></ContactMap> 
          </Contact>
    </>
  )
}
