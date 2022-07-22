export async function delFunc(id) {
  const URL = `https://destinations-api-kfernie.herokuapp.com/destinations/remove${id}`;
  await fetch(URL, {
    method: 'delete',
  }).then(response => {
    window.location.reload(true);
  });
}
