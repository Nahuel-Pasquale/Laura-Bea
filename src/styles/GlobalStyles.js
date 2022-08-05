import { createGlobalStyle } from 'styled-components';
import manropeBold  from "../assets/fonts/Manrope-Bold.ttf";
import manropeExtraBold  from "../assets/fonts/Manrope-ExtraBold.ttf";
import manropeLight from "../assets/fonts/Manrope-Light.ttf";
import manropeExtraLight from "../assets/fonts/Manrope-ExtraLight.ttf";
import manropeRegular from "../assets/fonts/Manrope-Regular.ttf";
import manropeSemiBold from "../assets/fonts/Manrope-SemiBold.ttf";
import manropeMedium from "../assets/fonts/Manrope-Medium.ttf";
import robotoMonoBold from "../assets/fonts/RobotoMono-Bold.ttf";
import robotoMonoBoldItalic from "../assets/fonts/RobotoMono-BoldItalic.ttf";
import robotoMonoExtraLight from "../assets/fonts/RobotoMono-ExtraLight.ttf";
import robotoMonoExtraLightItalic from "../assets/fonts/RobotoMono-ExtraLightItalic.ttf";
import robotoMonoItalic from "../assets/fonts/RobotoMono-Italic.ttf";
import robotoMonoLight from "../assets/fonts/RobotoMono-Light.ttf";
import robotoMonoLightItalic from "../assets/fonts/RobotoMono-LightItalic.ttf";
import robotoMonoMedium from "../assets/fonts/RobotoMono-Medium.ttf";
import robotoMonoMediumItalic from "../assets/fonts/RobotoMono-MediumItalic.ttf";
import robotoMonoRegular from "../assets/fonts/RobotoMono-Regular.ttf";
import robotoMonoSemiBold from "../assets/fonts/RobotoMono-SemiBold.ttf";
import robotoMonoSemiBoldItalic from "../assets/fonts/RobotoMono-SemiBoldItalic.ttf";
import robotoMonoThin from "../assets/fonts/RobotoMono-Thin.ttf";
import robotoMonoThinItalic from "../assets/fonts/RobotoMono-ThinItalic.ttf";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Manrope-regular';
    font-style: normal;
    font-weight: normal;
    src: url(${manropeRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-bold';
    font-style: normal;
    font-weight: bold;
    src: url(${manropeBold}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-extrabold';
    font-style: normal;
    font-weight: extra-bold;
    src: url(${manropeExtraBold}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-light';
    font-style: normal;
    font-weight: light;
    src: url(${manropeLight}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-extralight';
    font-style: normal;
    font-weight: extra-light;
    src: url(${manropeExtraLight}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-semibold';
    font-style: normal;
    font-weight: semi-bold;
    src: url(${manropeSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Manrope-medium';
    font-style: normal;
    font-weight: medium;
    src: url(${manropeMedium}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-bold';
    font-style: normal;
    font-weight: bold;
    src: url(${robotoMonoBold}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-bolditalic';
    font-style: italic;
    font-weight: boldItalic;
    src: url(${robotoMonoBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-extralight';
    font-style: normal;
    font-weight: extraLight;
    src: url(${robotoMonoExtraLight}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-extralightitalic';
    font-style: italic;
    font-weight: extraLightItalic;
    src: url(${robotoMonoExtraLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-italic';
    font-style: italic;
    font-weight: italic;
    src: url(${robotoMonoItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-light';
    font-style: normal;
    font-weight: light;
    src: url(${robotoMonoLight}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-lightitalic';
    font-style: italic;
    font-weight: lightItalic;
    src: url(${robotoMonoLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-medium';
    font-style: normal;
    font-weight: medium;
    src: url(${robotoMonoMedium}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-mediumitalic';
    font-style: italic;
    font-weight: mediumItalic;
    src: url(${robotoMonoMediumItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-regular';
    font-style: normal;
    font-weight: regular;
    src: url(${robotoMonoRegular}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-semibolditalic';
    font-style: italic;
    font-weight: semiBoldItalic;
    src: url(${robotoMonoSemiBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-semibold';
    font-style: normal;
    font-weight: semiBold;
    src: url(${robotoMonoSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-thin';
    font-style: normal;
    font-weight: thin;
    src: url(${robotoMonoThin}) format('truetype');
  }
  @font-face {
    font-family: 'RobotoMono-thinitalic';
    font-style: italic;
    font-weight: thinItalic;
    src: url(${robotoMonoThinItalic}) format('truetype');
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html{
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  :root{
    --lightGrey: #f1f1ef;
    --grey: #e0dbd3;
    --cianSuave: #6b9394;
    --lightBrown: #bb996a;
    --opRed: #8c393c;
    --dark: #353333;
  }
  body{
    background-color: var(--lightGrey);
  };
  
  a{
    text-decoration: none;
    color: white;
  }
`

