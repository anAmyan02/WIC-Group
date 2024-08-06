const mainContainer = document.getElementById('less-container');

function createOption(text, withImage = true) {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'option';

  const selectDiv = document.createElement('div');
  selectDiv.className = 'select';
  if (withImage) {
    const img = document.createElement('div');

    const img1 = document.createElement('img');
    img1.src = './textures/Vector.svg';
    img1.alt = '';

    const img2 = document.createElement('img');
    img2.src = './textures/Vector (1).svg';
    img2.alt = '';
    img2.className = 'tick'

    img.appendChild(img1);
    img.appendChild(img2);
    selectDiv.appendChild(img);
  }

  const textDiv = document.createElement('div');
  textDiv.className = 'text';
  textDiv.textContent = text;

  optionDiv.appendChild(selectDiv);
  optionDiv.appendChild(textDiv);

  return optionDiv;
}

function createBox(options, boxClass, title = '') {
  const boxDiv = document.createElement('div');
  boxDiv.className = boxClass;

  options.forEach((option, index) => {
    const withImage = index < 2;
    boxDiv.appendChild(createOption(option.text, withImage));
  });

  return boxDiv;
}

const firstBoxOptions = [
    { text: 'Разбираться в криптовалюте' },
    { text: 'Пользоваться алготрейдингом' },
  ];
  
  const secondBoxOptions = [
    { text: 'Зарабатывать на рынке' },
    { text: 'Держать руку на пульсе' }
  ];
  
  const thirdBoxOptions = [
    { text: 'Грамотно инвестировать' },
    { text: 'Правильно покупать токены' }
  ];

const firstBox = createBox(firstBoxOptions, 'first-box');
const secondBox = createBox(secondBoxOptions, 'second-box');
const thirdBox = createBox(thirdBoxOptions, 'third-box');

mainContainer.appendChild(firstBox);
mainContainer.appendChild(secondBox);
mainContainer.appendChild(thirdBox);


// create orders

document.addEventListener('DOMContentLoaded', function() {
    const olsDiv = document.querySelector('.ols');

    const topics = [
        'Что такое блокчейн',
        'Что такое криптовалюты и как они применяются',
        'Предпосылки роста криптовалют',
        'Базовые подходы к майнингу',
        'Что такое блокчейн',
        'Что такое криптовалюты и как они применяются',
        'Предпосылки роста криптовалют',
        'Базовые подходы к майнингу',
        'Что такое блокчейн',
        'Что такое криптовалюты и как они применяются',
        'Предпосылки роста криптовалют',
        'Базовые подходы к майнингу',
        'Что такое блокчейн',
        'Что такое криптовалюты и как они применяются',
        'Предпосылки роста криптовалют',
        'Базовые подходы к майнингу',
        'Базовые подходы к майнингу'
    ];

    const ol = document.createElement('ol');

    topics.forEach(topic => {
        const li = document.createElement('li');
        li.textContent = topic;
        ol.appendChild(li);
    });

    olsDiv.appendChild(ol);
});



// books

document.addEventListener('DOMContentLoaded', function() {
    const booksWrapper = document.getElementById('books-wrapper');

    const booksData = [
        {
            subtitle: 'Первый модуль',
            title: 'Введение в мир криптовалюты',
            imgSrc: './textures/books/premium-icon-book-5011389 1.svg'
        },
        {
            subtitle: 'Второй модуль',
            title: 'В какие криптовалюты инвестировать',
            imgSrc: './textures/books/premium-icon-book-5011389 2.svg'
        },
        {
            subtitle: 'Третий модуль',
            title: 'Основы игры на рынке криптовалют',
            imgSrc: './textures/books/premium-icon-book-5011389 1 (1).svg'
        },
        {
            subtitle: 'Четвертый модуль',
            title: 'Покупка, вывод, обмен',
            imgSrc: './textures/books/premium-icon-book-5011389 1 (2).svg'
        }
    ];

    booksData.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';

        const bInfo = document.createElement('div');
        bInfo.className = 'b-info';

        const subtitle = document.createElement('p');
        subtitle.className = 'subtitle';
        subtitle.textContent = book.subtitle;

        const title = document.createElement('h3');
        title.className = 'title';
        title.textContent = book.title;

        bInfo.appendChild(subtitle);
        bInfo.appendChild(title);

        const img = document.createElement('img');
        img.src = book.imgSrc;
        img.alt = '';

        bookContainer.appendChild(bInfo);
        bookContainer.appendChild(img);

        booksWrapper.appendChild(bookContainer);

        // Add a break line for spacing
        booksWrapper.appendChild(document.createElement('br'));
    });
});

// boxes next to spiral

document.addEventListener('DOMContentLoaded', function() {
  const boxesContainer = document.getElementById('boxes-container');

  const boxesData = [
      {
          title: 'Конкурсы',
          desc: 'Участвуй и забирай призы',
          imgSrc: './textures/boxes/Achievement _Monochromatic 1.svg'
      },
      {
          title: 'Игры',
          desc: 'Развлекайся и зарабатывай',
          imgSrc: './textures/boxes/Slot machine_Monochromatic 1.svg'
      },
      {
          title: 'Аукционы',
          desc: 'Покупай и продавай<br>в WIC-токенах',
          imgSrc: './textures/boxes/Online shopping _Monochromatic 1.svg'
      },
      {
          title: 'Конкурсы',
          desc: 'Участвуй и забирай призы',
          imgSrc: './textures/boxes/Achievement _Monochromatic 1.svg'
      }
  ];

  const titleColors = ['#9D2E20', '#6F449E', '#337775'];

  boxesData.forEach((box, index) => {
      const boxElement = document.createElement('div');
      boxElement.className = 'box';

      const boxTitle = document.createElement('h4');
      boxTitle.className = 'title';
      boxTitle.textContent = box.title;
      boxTitle.style.color = titleColors[index % titleColors.length];

      const boxDesc = document.createElement('p');
      boxDesc.className = 'desc';
      boxDesc.innerHTML = box.desc;  // Use innerHTML to handle <br> tags

      const boxImg = document.createElement('img');
      boxImg.src = box.imgSrc;
      boxImg.alt = '';

      if (box.imgSrc === './textures/boxes/Online shopping _Monochromatic 1.svg') {
        boxImg.classList.add('third-img');
    }

      boxElement.appendChild(boxTitle);
      boxElement.appendChild(boxDesc);
      boxElement.appendChild(boxImg);

      boxesContainer.appendChild(boxElement);
  });

  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  leftArrow.addEventListener('click', () => {
      boxesContainer.scrollBy({
          left: -boxesContainer.clientWidth,
          behavior: 'smooth'
      });  
  });

  rightArrow.addEventListener('click', () => {
      boxesContainer.scrollBy({
          left: boxesContainer.clientWidth,
          behavior: 'smooth'
      });
  });
});


//  lists

document.addEventListener('DOMContentLoaded', function() {
  const listItems = [
      'Социальный обмен',
      'Краудфандинг',
      'Онлайн игры',
      'Конкурсы',
      'Хобби',
      'Займы',
      'Аукционы',
      'Страхование',
      'Добывание крипты'
  ];

  const ulElement = document.getElementById('dynamic-list');

  listItems.forEach(item => {
      const liElement = document.createElement('li');
      liElement.textContent = item;
      ulElement.appendChild(liElement);
  });
});


// items

document.addEventListener('DOMContentLoaded', function() {
  const itemsData = [
      {
          imgSrc: './textures/депозиты.svg',
          desc: 'Удобные микросчета <br> с минимальным депозитом'
      },
      {
          imgSrc: './textures/торговля роботов.svg',
          desc: 'Управление с помощью<br> торговых роботов'
      },
      {
          imgSrc: './textures/контроль из точек мира.svg',
          desc: 'Полный контроль своего<br> депозита из любой точки мира'
      }
  ];

  const itemsContainer = document.getElementById('dynamic-items');

  itemsData.forEach(itemData => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');

      const imgElement = document.createElement('img');
      imgElement.src = itemData.imgSrc;
      imgElement.alt = '';

      const descDiv = document.createElement('div');
      descDiv.classList.add('desc');
      descDiv.innerHTML = itemData.desc;

      itemDiv.appendChild(imgElement);
      itemDiv.appendChild(descDiv);
      itemsContainer.appendChild(itemDiv);
  });
});


// footer

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.top');

  const sections = [
      {
          title: "WIC Investing",
          links: ["Создать аккаунт", "О платформе", "О системе Buffet", "Дорожная карта"]
      },
      {
          title: "WIC Traders",
          links: ["О проекте", "3 пакета подключения", "Регистрация", "Торговые роботы"]
      },
      {
          title: "WIC Payment",
          links: ["Купить токены", "Обмен", "Вывод", "Регистрация"]
      },
      {
          title: "WIC Academy",
          links: ["Курсы", "Встречи с экспертами", "Лекции"]
      },
      {
          title: "WICing",
          links: ["Конкурсы", "Аукционы", "Социальный обмен", "Игры онлайн", "Краудфандинг"]
      }
  ];

  sections.forEach(section => {
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('box');

      const title = document.createElement('h5');
      title.classList.add('title');
      title.textContent = section.title;
      boxDiv.appendChild(title);

      section.links.forEach(linkText => {
          const link = document.createElement('a');
          link.href = "#"; // Update with actual href if needed
          link.textContent = linkText;
          boxDiv.appendChild(link);
      });

      container.appendChild(boxDiv);
  });
});

// offers

const offers = [
    {
        id: 'first',
        title: 'WIC Traders',
        subtitle: 'Активное наращивание<br> своего капитала',
        desc: 'Платформа Wic Traders использует различных торговых роботов, которых вы можете подключить к своей стратегии инвестирования. Подходит как начинающим, так и продвинутым инвесторам',
        link: 'Подробнее',
        left: '118vh',
        containerClass: 'planet-box'
    },
    {
        id: 'second',
        title: 'WIC Payment',
        subtitle: 'Управление финансами:<br> покупка, вывод, обмен',
        desc: 'Платформа Wic Payment обеспечивает быстрое, безопасное и удобное обращение с финансами. Вывод, обмен и пополнение счетов. Контроль за счетами.',
        link: 'Подробнее',
        left: '91.5vw',
        containerClass: 'planet-box pl-box-second'
    },
    {
        id: 'third',
        title: 'WIC Investing',
        subtitle: 'Уверенный рост<br> финансового благосостояния',
        desc: 'Платформа Wic Investing позволяет приумножать доход за счет использования интеллектуальной системы инвестиционной активности, которая зарабатвает на мировых биржах и увеличивает ваш капитал.',
        link: 'Подробнее',
        left: '52vw',
        containerClass: 'planet-box'
    },
    {
        id: 'fourth',
        title: 'WIC Academy',
        subtitle: 'Уверенный рост финансового благосостояния',
        desc: 'Платформа Wic Academy дает фундаментальные основы образования в сфере криптоинвестирования. Знания - сила, позволяющая зарабатывать на цифровых активах.',
        link: 'Подробнее',
        left: '77vw',
        containerClass: 'planet-box pl-box-second'
    },
    {
        id: 'fifth',
        title: 'WICing',
        subtitle: 'Игры, конкурсы, аукционы, социальная сеть и общение в чате<br> покупка, вывод, обмен',
        desc: 'Мы знаем, как важно живое общение с единомышленниками. Поэтому создали удобную социальную сеть для игр, конкурсов, аукционов и обмена. Добро пожаловать в WICing!',
        link: 'Подробнее',
        left: '102vw',
        containerClass: 'planet-box pl-box-second'
    }
];

const offerContainer = document.querySelector('#offer-container');

const createOfferElement = ({ id, title, subtitle, desc, link, left, containerClass }) => {
    const planetBox = document.createElement('div');
    planetBox.className = containerClass;
    planetBox.style.left = left;

    const wicOffer = document.createElement('div');
    wicOffer.className = 'wic-offer';
    wicOffer.id = id;

    const offerTitle = document.createElement('h5');
    offerTitle.className = 'title';
    offerTitle.innerHTML = title;

    const offerSubtitle = document.createElement('p');
    offerSubtitle.className = 'subtitle';
    offerSubtitle.innerHTML = subtitle;

    const offerDesc = document.createElement('p');
    offerDesc.className = 'desc';
    offerDesc.innerHTML = desc;

    const linkDiv = document.createElement('div');
    linkDiv.className = 'link';

    const linkName = document.createElement('p');
    linkName.className = 'name';
    linkName.textContent = link;

    const linkArrow = document.createElement('img');
    linkArrow.className = 'arrow';
    linkArrow.src = './textures/arrows/free-icon-right-arrow-556670 1.svg';
    linkArrow.alt = '';

    linkDiv.appendChild(linkName);
    linkDiv.appendChild(linkArrow);

    wicOffer.appendChild(offerTitle);
    wicOffer.appendChild(offerSubtitle);
    wicOffer.appendChild(offerDesc);
    wicOffer.appendChild(linkDiv);

    planetBox.appendChild(wicOffer);
    return planetBox;
};

const ofTop = document.createElement('div');
ofTop.className = 'of-top';
offerContainer.appendChild(ofTop);

const ofBottom = document.createElement('div');
ofBottom.className = 'of-bottom';
offerContainer.appendChild(ofBottom);

offers.slice(0, 2).forEach(offer => ofTop.appendChild(createOfferElement(offer)));
offers.slice(2).forEach(offer => ofBottom.appendChild(createOfferElement(offer)));

const planetBox = document.createElement('div');
planetBox.className = 'planet-box';
planetBox.id = 'planet-box';

const canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.className = 'canvas';

planetBox.appendChild(canvas);
offerContainer.appendChild(planetBox);


// planets

const container = document.querySelector('#planet-container'); 

const boxesData = [
  { id: 'planet-box1', margin: '40px' },
  { id: 'planet-box2', margin: '80px' },
  { id: 'planet-box3', margin: '120px' },
  { id: 'planet-box4', margin: '120px' },
  { id: 'planet-box5', margin: '120px' }
];

function createPlanetBox(id, margin) {
  const box = document.createElement('div');
  box.id = id;
  box.className = 'planet-box';
  box.style.margin = margin;
//   box.style.border = '2px black solid';
//   box.style.padding = '20px';

  const canvas = document.createElement('canvas');
  canvas.id = id.replace('planet-', 'canvas-');
  canvas.className = 'canvas';
  console.log(canvas);

  box.appendChild(canvas);
  return box;
}


// Create and append each box
boxesData.forEach(({ id, margin }) => {
  const planetBox = createPlanetBox(id, margin);
  container.appendChild(planetBox);
});
