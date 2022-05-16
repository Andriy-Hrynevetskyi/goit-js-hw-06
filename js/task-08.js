const formRef = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value !== "" && password.value !== "") {
    // const formData = new FormData(event.currentTarget);
    // event.currentTarget.reset();
    // return formData;

    const resultObj = {
      email: email.value,
      password: password.value,
    };

    event.currentTarget.reset();

    return console.log(resultObj);
  }

  return alert("Empty fields are forbidden!!!");
};

formRef.addEventListener("submit", onFormSubmit);
