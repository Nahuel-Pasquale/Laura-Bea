import emailjs from "@emailjs/browser";

export const sendMail = (templateParams) => {
  let resp = 0;
  emailjs
    .send(
      "service_jvwfmee",
      "template_oaimtok",
      templateParams,
      "user_HOVYKMpW5Au7W5Ll5087U"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        resp = response.status;
        return resp;
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  return resp;
};
