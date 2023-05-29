const controls1 = document.querySelectorAll(".control1");
let currentItem1 = 0;
const items1 = document.querySelectorAll(".item1");
const maxItems1 = items1.length;

let nome = document.querySelector('.gallery1');

controls1.forEach((control1) => {
  control1.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left1");

    if (isLeft) {
      currentItem1 -= 1;
    } else {
      currentItem1 += 1;
    }

    if (currentItem1 + 1 >= maxItems1) {
      currentItem1 = 0;
    }

    if (currentItem1 < 0) {
      currentItem1 = maxItems1 - 1;
    }

    items1.forEach((item) => item.classList.remove("current-item1"));

    items1[currentItem1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items1[currentItem1].classList.add("current-item1");
  });
});





const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items2.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item) => item.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items2[currentItem2].classList.add("current-item2");
  });
});





const controls3 = document.querySelectorAll(".control3");
let currentItem3 = 0;
const items3 = document.querySelectorAll(".item3");
const maxItems3 = items3.length;

controls3.forEach((control3) => {
  control3.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3) {
      currentItem3 = 0;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item) => item.classList.remove("current-item3"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items3[currentItem3].classList.add("current-item3");
  });
});




let titulos = {
  01: {
    titulo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Felefante-s%25C3%25B3-contra-o-por-do-sol-e-nuvens-bonitos-no-savana-parque-nacional-de-serengeti-%25C3%25A1frica-tanz%25C3%25A2nia-imag-art%25C3%25ADstico-106950644.jpg&tbnid=4REuHUyHQI3CBM&vet=12ahUKEwibidvg1ZH_AhXTFbkGHa6zDxwQMygBegUIARDWAQ..i&imgrefurl=https%3A%2F%2Fpt.dreamstime.com%2Felefante-s%25C3%25B3-contra-o-por-do-sol-e-nuvens-bonitos-no-savana-parque-nacional-de-serengeti-%25C3%25A1frica-tanz%25C3%25A2nia-imag-art%25C3%25ADstico-image106950644&docid=gD4_51Ne3-sybM&w=800&h=533&q=imag&ved=2ahUKEwibidvg1ZH_AhXTFbkGHa6zDxwQMygBegUIARDWAQ"
  }
  
};

let imgsPerfil = [
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png',
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png',
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png',
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png'
]


window.addEventListener("DOMContentLoaded", () => {
  // Obtenha a parte da query da URL atual
  var query = window.location.search;
  
  // Crie um objeto URLSearchParams com a string de query
  var params = new URLSearchParams(query);

  // Obtenha o valor do parâmetro desejado usando o método get()
  var parametro = params.get("foto");

  // Use o valor do parâmetro como desejar
  console.log(parametro);

  const teste = document.querySelector(".fotoPerfil")
  // teste.src = imgsPerfil[3]

  console.log(teste);


  if(parametro == 'n1'){
    teste.src = imgsPerfil[0]
  }else if(parametro == 'n2'){
    teste.src = imgsPerfil[1]
  }
  else if(parametro == 'n3'){
    teste.src = imgsPerfil[2]
  } else if(parametro == 'n4'){
    teste.src = imgsPerfil[3]
  }
})