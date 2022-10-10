import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .required("Campo requerido")
    .uppercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
  surname: Yup.string()
    .required("Campo requerido")
    .uppercase()
    .trim()
    .transform((str) => str.replace(/ {2,}/g, " ")),
  email: Yup.string()
    .required("Campo requerido")
    .email("Email invalido")
    .lowercase(),
  msg: Yup.string().required("Campo requerido").lowercase().trim(),
});
