const member = {
  one:{
    img: 'img/uche.jpg',
    imgAlt: 'image of Ibute uchenna',
    name: 'Ibute Uchenna',
    occupation: 'Fashion icon and Professor in Law',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  two: {
    img: 'img/Fashion-Influences_Hero.webp',
    imgAlt: 'image of Rihanna',
    name: 'Rihanna',
    occupation: 'Actor,Screenplay Writer,Director, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem.',
  },
  three: {
    img: 'img/2796ec69-88f9-4f41-837b-144afe0e3d77.jpg',
    imgAlt: 'image of James foster',
    name: 'James Foster',
    occupation: 'Actor, Director, Fashion Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  four: {
    img: 'img/http___cdn.cnn.com_cnnnext_dam_assets_211029161314-01-zendaya-style-evolution-restricted.jpg',
    imgAlt: 'image of Zendaya',
    name: 'Zendaya',
    occupation: 'Actress, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  five: {
    img: 'img/Karl-Lagerfield-Photo-Yahoo-Finance.jpg',
    imgAlt: 'image of Karl Lagerfield',
    name: 'Karl-Lagerfield',
    occupation: 'Fashion icon and Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
  },
  six: {
    img: 'img/Oyin-Adenuga-Emelia-Janes-Green-Nigerian-Independence-Day-Traditional-Bridal-Inspiration-LoveWeddingsNG-feat.png',
    imgAlt: 'image of Oyin Adenuga',
    name: 'Oyin-Adenuga',
    occupation: 'Fashion Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem',
  },
};
  const container = document.querySelector('.card');
  function cardNow(n) {
    const card = document.createElement('div');
    card.classList.add('memberC');
    const imgcontain = document.createElement('div');
    imgcontain.classList.add('member-image');
    const Img = document.createElement('img');
    Img.classList.add('m-img');
    Img.src = n.img;
    Img.alt = n.imgAlt;
    imgcontain.appendChild(Img);

    const textc = document.createElement('div');
    textc.classList.add('m-txt');

    const Head = document.createElement('h3');
    Head.classList.add('m-name');
    Head.textContent = n.name;

    const job = document.createElement('h5');
    job.classList.add('m-job');
    job.textContent = n.occupation;

    const Line = document.createElement('div');
    Line.classList.add('grey');

    const Details = document.createElement('p');
    Details.classList.add('m-details');
    Details.textContent = n.details;

    textc.appendChild(Head);
    textc.appendChild(job);
    textc.appendChild(Line);
    textc.appendChild(Details);

    card.appendChild(imgcontain);
    card.appendChild(textc);
    return card;
  }

  function CardLoad() {
    const memberList = Object.keys(member);
    if (window.innerWidth > 768) {
      for (let i = 0; i < memberList.length; i += 1) {
        container.appendChild(cardNow(member[memberList[i]]));
      }
    } else {
      for (let i = 0; i < memberList.length; i += 1) {
        const card = cardNow(member[memberList[i]]);
        if (i > 1) {
          card.id = 'hidden-card';
          card.classList.toggle('card-hidden');
        }
        container.appendChild(card);
      }
    }
  }
  CardLoad();

  const BtnToggle = document.getElementById('buttonO');
  BtnToggle.onclick = function () {
    const children = container.querySelectorAll('#hidden-card');
    for (let i = 0; i < children.length; i += 1) {
      children[i].classList.toggle('card-hidden');
    }
    if (BtnToggle.textContent === 'MORE') {
      BtnToggle.innerHTML = 'LESS<span><img src="img/up-arrow-icon.svg" alt="arrow pointing upwards"></span>';
    } else {
      BtnToggle.innerHTML = 'MORE<span><i class="fa-solid fa-angle-down"></i></span>';
    }
  };

  window.onresize = function () {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    const cardButtonToggle = document.getElementById('buttonO');
    cardButtonToggle.innerHTML = 'MORE<span><i class="fa-solid fa-angle-down"></i></span>';
    CardLoad();
  };