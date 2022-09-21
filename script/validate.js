var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate(".form", {
  colorWrong: "#FF5C00",
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
      defaultMessages:{required:"ЖОПА"}
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      minLength: "Мало текста",
      required: "Как вас зовут?"
    },
    mail: {
      required:"Укажите ваш e-mail"
    },
    tel: {
      required:"Укажите ваш номер"
    }
  }
});