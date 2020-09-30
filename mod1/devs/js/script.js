// Estado da aplicação
let allDevs = [];
let filteredDevs = [];
let countDevs = 0;

let countDevsDiv = null;
let devsDiv = null;

let searchDevInput = null;
let filterDiv = null;

let checksDiv = null;

// Início da aplicação
window.addEventListener('load', () => {
  countDevsDiv = document.querySelector('#countDevsDiv');
  devsDiv = document.querySelector('#devsDiv');

  searchDevInput = document.querySelector('#searchDevInput');
  filterDiv = document.querySelectorAll('#filterDiv input');

  checksDiv = document.querySelectorAll('#checksDiv input');

  fetchAllDevs();
});

async function fetchAllDevs() {
  const res = await fetch('http://localhost:3001/devs');
  const json = await res.json();

  allDevs = json.map((dev) => {
    let langs = [];
    const devLangs = dev.programmingLanguages;
    devLangs.forEach((lang) => {
      langs.push(lang.language);
    });

    const { name, picture } = dev;
    return {
      name: name,
      picture: picture,
      languages: langs,
      searchName: cleanName(name),
    };
  });

  filteredDevs = allDevs;
  countDevs = filteredDevs.length;

  console.log(filteredDevs);
  console.log(countDevs);

  addInputsEvents();
  render();
}

function cleanName(name) {
  return name
    .trim()
    .replace(/ +/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function nameIsIn(name, devName) {
  const res = devName.indexOf(name);

  if (res >= 0) {
    return true;
  } else {
    return false;
  }
}

function searchDevs() {
  const name = cleanName(searchDevInput.value);

  filteredDevs = allDevs.filter((dev) => nameIsIn(name, dev.searchName));

  filterLangs();
}

function isOrRadioChecked() {
  const orRadio = document.querySelector('#orRadio');

  return orRadio.checked;
}

function getLangsChecked() {
  let res = [];

  checksDiv.forEach((check) => {
    if (check.checked) {
      res.push(check.id);
    }
  });

  return res;
}

function langCheckSome(devLangsArr, checkedLangsArray) {
  const found = devLangsArr.some((r) => checkedLangsArray.includes(r));

  return found;
}

function langCheckEvery(devLangsArr, checkedLangsArray) {
  const lenA = devLangsArr.length;
  const lenB = checkedLangsArray.length;

  if (lenA !== lenB) {
    return false;
  }

  const every = checkedLangsArray.every((r) => devLangsArr.includes(r));

  return every;
}

function filterLangs() {
  let arrayLangsChecked = [];

  arrayLangsChecked = getLangsChecked();

  if (isOrRadioChecked()) {
    //prettier-ignore
    filteredDevs = filteredDevs.filter((dev) => langCheckSome(dev.languages, arrayLangsChecked));
  } else {
    //prettier-ignore
    filteredDevs = filteredDevs.filter((dev) => langCheckEvery(dev.languages, arrayLangsChecked));
  }

  countDevs = filteredDevs.length;
  render();
}

function addInputsEvents() {
  searchDevInput.addEventListener('input', () => {
    searchDevs();
  });

  filterDiv.forEach((filter) => {
    filter.addEventListener('click', () => {
      searchDevs();
    });
  });
}

function render() {
  renderCountDevsDiv();
  renderDevsDiv();
}

function renderCountDevsDiv() {
  const countDevsHTML = '<p>' + countDevs + ' dev(s) encontrado(s)</p>';

  countDevsDiv.innerHTML = countDevsHTML;
}

function renderDevsDiv() {
  let devsHTML = `
  <div class="row">`;

  filteredDevs.forEach((dev) => {
    let langsHTML = '';
    dev.languages.forEach((lang) => {
      langsHTML += `
        <img src="./img/${lang}.png" alt="langs" width="25" height="25">
      `;
    });

    const { name, picture } = dev;

    const devHTML = `
      <div class="dev col s4">
        <div><img src="${picture}" alt="profile" width="50" height="50"></div>
        <div class="devInfo">
          <div>${name}</div>
          <div>${langsHTML}</div>
        </div>
      </div>
    `;

    devsHTML += devHTML;
  });

  devsHTML += `
  </div>`;

  devsDiv.innerHTML = devsHTML;
}
