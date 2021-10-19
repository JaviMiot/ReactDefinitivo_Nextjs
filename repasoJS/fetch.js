const URL = 'https://jsonplaceholder.typicode.com/users';

/* fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer DebeExistirTokenAutorizacion',
  },
  body: JSON.stringify({
    name: 'Chnachito Feliz',
    website: 'https://chanchito.com',
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
 */

const fn = async () => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer DebeExistirTokenAutorizacion',
    },
    body: JSON.stringify({
      name: 'Chnachito Feliz',
      website: 'https://chanchito.com',
    }),
  });

  const data = await response.json();
  console.log(data);
};

fn();
