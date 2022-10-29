import emailjs from "@emailjs/browser";

export const sendMail = (templateParams, setFn, resetFn) => {
  emailjs
    .send(
      "service_x2k8unf",
      "template_0v3zpmp",
      templateParams,
      "m2y_Isxrvr4z3_4o8"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) {
          setFn(true);
          resetFn({ email: "", name: "", surname: "", subject: "", msg: "" });
        }
      },
      function (error) {
        setFn(false);
        console.log("FAILED...", error);
      }
    );
};
