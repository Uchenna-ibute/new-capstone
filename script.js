const member = {
  one:{
    name: 'Ibute Uchenna',
    occupation: 'Fashion icon and Professor in Law',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
    img: 'img/uche.jpg',
    imgAlt: 'image of Ibute uchenna',
  },
  two: {
    img: 'img/Fashion-Influences_Hero.webp',
    imgAlt: 'image of Rihanna',
    name: 'Rihanna',
    occupation: 'Actor,Screenplay Writer,Director, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem.',
  },
  three: {
    name: 'James Foster',
    occupation: 'Actor, Director, Fashion Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
    img: 'img/2796ec69-88f9-4f41-837b-144afe0e3d77.jpg',
    imgAlt: 'image of James foster',
  },
  four: {
    name: 'Zendaya',
    occupation: 'Actress, Fashion icon',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
    img: 'img/http___cdn.cnn.com_cnnnext_dam_assets_211029161314-01-zendaya-style-evolution-restricted.jpg',
    imgAlt: 'image of Zendaya',
  },
  five: {
    name: 'Karl-Lagerfield',
    occupation: 'Fashion icon and Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem?',
    img: 'img/Karl-Lagerfield-Photo-Yahoo-Finance.jpg',
    imgAlt: 'image of Karl Lagerfield',
  },
  six: {
    name: 'Oyin-Adenuga',
    occupation: 'Fashion Designer',
    details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque expedita obcaecati tempora velit aut ex quo ducimus sapiente exercitationem',
    img: 'img/Oyin-Adenuga-Emelia-Janes-Green-Nigerian-Independence-Day-Traditional-Bridal-Inspiration-LoveWeddingsNG-feat.png',
    imgAlt: 'image of Oyin Adenuga',
  },
};

  const container = document.querySelector('.card');

  function cardNow(n) {
    const card = document.createElement('div');
    card.classList.add('memb');
      const page = `
            <div class="member-image">
                <img src=${n.img} alt=${n.imgAlt} srcset="" class="m-img">
                <div class="backdrop">
                  <img src="img/chess2.webp" alt="" srcset="">
                </div>
            </div>
            <div class="m-txt">
                <h3 class="m-name">${n.name}</h3>
                <h4 class="m-job">${n.occupation}</h4>
                <div class="grey"></div>
                <p class= "m-details">${n.details}</p>
            </div>`;
      card.innerHTML = page;
      return card;
  }

  const loading = function() {
    const memberList = Object.keys(member);
    if (window.innerWidth > 698) {
      for (let i = 0; i < memberList.length; i++) {
        container.appendChild(cardNow(member[memberList[i]]));
      }
    } else {
      for (let i = 0; i < memberList.length; i++) {
        const moblie = cardNow(member[memberList[i]]);
        if (i > 1) {
          moblie.id = 'hidden-card';
          moblie.classList.toggle('cardhid');
        }
        container.appendChild(moblie);
      }
    }
  }

  const btn = document.getElementById('butto');
  const moreTxt = 'MORE <i class="fa-solid fa-chevron-down"></i>';
  const lessTxt = 'LESS <i class="fa-solid fa-chevron-up"></i>';

  btn.addEventListener("click", () => {
    const children = container.querySelectorAll('#hidden-card');
    for (let i = 0; i < children.length; i++) {
      children[i].classList.toggle('cardhid');
    }
    let more='MORE'
    if (btn.textContent === more) {
      btn.innerHTML = lessTxt;
    } else {
      btn.innerHTML = moreTxt;
    }
  });

  loading();

