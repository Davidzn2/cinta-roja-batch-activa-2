// DECIRME SI UN NUMERO ES MENOR QUE 5 O NO
/*
const numeroMenorQueCinco = new Promise(function (resolve, reject) {
  const RANDOM_NUMBER = Math.floor(Math.random() * 10);
  setTimeout(function () {
    if (RANDOM_NUMBER > 5) {
      resolve(RANDOM_NUMBER);
    } else if (RANDOM_NUMBER < 5) {
      reject(new Error(`El numero ${RANDOM_NUMBER} es menor a 5`));
    }
  });
});

numeroMenorQueCinco
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
*/
function login(receivedEmail, receivedPassword) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let email = "david@gmail.com";
      let password = "jejejej";
      if (receivedEmail == email && receivedPassword == password) {
        resolve({
          mensaje: "Bienvenido usuario",
          loggedIn: true,
        });
      } else {
        reject(new Error("tu password o email estan mal, checalo!!"));
      }
    }, 1000);
  });
}
// SI TODO ESTA BIEN
login("david@gmail.com", "jejejej")
  .then((response) => console.log(response.mensaje, response.loggedIn))
  .catch((error) => console.log(error));
// SI HAY ALGUN ERROR
login("davit@gmail.com", "jijijiji")
  .then((response) => console.log(response.mensaje, response.loggedIn))
  .catch((error) => console.log(error));

