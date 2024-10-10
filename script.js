const btn1 = document.querySelector('.btn-1')
const input = document.querySelector('input')
const h3 = document.querySelector('h3')

btn1.addEventListener('click', function () {
    console.log(input.value)
    if (validateEmail(input.value)){
        input.value = ''
        input.style.borderColor = "hsl(0, 15%, 80%)"
        h3.style.display = "none"
        btn1.style.setProperty('--display', 'none')
    }else{
        input.style.borderColor = "red"
        h3.style.display = "flex"
        btn1.style.setProperty('--display', 'flex')
    }
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };