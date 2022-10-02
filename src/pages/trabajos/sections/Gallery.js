import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0px;
  gap: 120px;
  width: 100%;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
  font-size: 1.1rem;
  text-align: center;
  font-family: "RobotoMono-regular";
  width: 65%;
  @media (max-width: 1280px) {
    width: 64%;
  }
`;

export const ImageSection = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -50px;
  padding-bottom: 70px;
  border-bottom: ${(props) => props.border};
  @media (max-width: 1280px) {
    margin-top: -10px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 50px;
    align-items: center;
    width: 80%;
  }
`;

export const ImageContainer = styled.div`
  min-width: 327.5px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1280px) {
    min-width: 277px;
  }
  @media (max-width: 992px) {
    width: 70%;
  }
`;

export const Image = styled.img`
  height: ${(props) => (props.height ? props.height : "450px")};

  @media (max-width: 1280px) {
    height: ${(props) => (props.deskHeight ? props.deskHeight : "300px")};
  }
  @media (max-width: 992px) {
    width: ${(props) => (props.width ? props.width : "80%")};
    align-self: center;
    height: unset;
  }
`;

export const ImageTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageP = styled.div`
  width: 90%;
  line-height: 2rem;
  font-size: 1.1rem;
  text-align: center;
  font-family: "RobotoMono-regular";
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ImageBg = styled.div`
  height: 450px;
  width: fit-content;
  display: flex;
  align-items: center;
  background: ${(props) => (props.whiteBg ? "white" : "")};
  @media (max-width: 1280px) {
    height: 300px;
  }
  @media (max-width: 992px) {
    width: 60%;
    align-self: center;
  }
`;

