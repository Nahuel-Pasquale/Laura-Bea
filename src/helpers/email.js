import emailjs from "@emailjs/browser";

export const sendMail = (templateParams, setFn, resetFn) => {
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
        if (response.status === 200) {
          setFn(true);
          resetFn({ email: "", name: "", surname: "", msg: "" });
        }
      },
      function (error) {
        setFn(false);
        console.log("FAILED...", error);
      }
    );
};
