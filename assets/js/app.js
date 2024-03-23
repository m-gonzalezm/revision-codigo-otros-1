const baseEndpoint = 'https://api.github.com'; // Sería posible englobar baseEndpoint y usersEndpoint si éste siempre va a ser el mismo
const usersEndpoint = `${baseEndpoint}/users`;
const nameParagraph = document.querySelector('.name'); // Se cambió el selector tag por uno de clase
const blogParagraph = document.querySelector('.blog'); // Se cambió el selector id por uno de clase
const locationParagraph = document.querySelector('.location');
/* Se cambiaron los nombres de las variables para hacerlas más legibles y descriptivas */

async function getUserData(username) { // Se agregó la palabra reservada async, por tener dentro funciones asíncronas y se cambió el nombre para mejorar la descripción de su alcance
  try {
    nameParagraph.textContent = 'cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();// Se necesita obtener la respuesta del fetch y parsearla a objeto
    /* Se removió el console.log por desuso */
    displayUser(data); // Se manda a llamar a la función para mostrar al usuario, con los datos como argumento
  } catch(err) {
    console.log('OH NO!');
    console.log(err);
    nameParagraph.innerHTML = `Algo salió mal: ${err}`
  }
}

/**
 * Se declaró nuevamente la función displayUser, incluyendo únicamente las sentencias de renderizado en el DOM
 */
function displayUser(data) {
  nameParagraph.innerHTML = `${data.name}`; // Se implementó correctamente los string template literals
  blogParagraph.innerHTML = `${data.blog}`;  // Se implementó correctamente los string template literals
  locationParagraph.innerHTML = `${data.location}`;
}

getUserData('stolinski');
/*  Se modificó la llamada a la nueva función y se adaptó el catch adentro de la función, porque estamos ocupando async await */