console.log('funciona');

async function teste() {
  const res = await fetch('http://localhost:3001/devs');
  const json = await res.json();

  console.log(json);
}

teste();
