let array_img = ['https://static.dw.com/image/15717070_303.jpg', 
  'https://img.gazeta.ru/files3/935/12080935/Depositphotos_137835044_l-2015-pic905-895x505-18668.jpg',
  'https://www.securitylab.ru/upload/iblock/899/899ea47876e2bd8dfc568dabb3990bb2.jpg',
  'https://imgtest.mir24.tv/uploaded/images/crops/2017/June/870x489_0x3_detail_crop_196db955c5e253ed73ea89178a774496.jpg',
  'https://habrastorage.org/webt/nu/me/dk/numedkhllysbgde0ltnubvnzg9k.jpeg',
  'https://3dnews.ru/assets/external/illustrations/2021/06/06/1041343/sm.1.750.jpg',
  'https://cloud.pulse19.ru/uploads/2019/03/foto-iz-otkrytyh-istochnikov_-274.jpg',
  'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/258/132/3.jpg',
  'https://cdni.rt.com/russian/images/2018.12/article/5c04ff8d370f2c82598b45d2.jpg',
  'https://www.securitylab.ru/upload/iblock/a0f/a0f9a24cc3b44bcacddb4926339c0eba.jpg',
  'https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/245/538/6.jpg',
  'https://cdni.rt.com/russian/images/c/4/4/c44afa9a3e2e79c39fb3039077255607ade2402b_article.jpg',
  'https://cybersec.org/wp-content/uploads/2020/06/anonymous-1.jpg',
  'https://img6.eadaily.com/c590x363/o/51b/48691eeffdb054a8f066a16b6248f.jpg',
  'https://img2.ntv.ru/home/news/20161106/london27_w.jpg'];

function random_image() {
  function shuffle() {
    for (let i = array_img.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array_img[i], array_img[j]] = [array_img[j], array_img[i]];
    }
  }
  shuffle();

  function add_images() {
    let index = 0;  
    document.querySelectorAll('.container-anonimus__slide').forEach((elem) => {
    elem.style.backgroundImage = `url('${array_img[index]}')`;
    index++
  });
  }
  add_images()
  random_color()
}

function random_color() {
  setInterval(() => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hex.length)
        color += hex[random];
    }
    document.querySelectorAll('.slide__text').forEach((elem) => {
      elem.style.color = `${color}`
    })
    document.querySelector('.title').style.color = `${color}`
    document.querySelector('.title').style.textShadow = `1px 1px 7px ${color}`
  }, 1500);
}

random_image()

const slides = document.querySelectorAll('.container-anonimus__slide')

let number = 0;

slides.forEach((slide) => {
  slide.addEventListener('click', () => {
    removeClass();
    slide.classList.add('active');
    number++
    console.log(number)
    if (number == 3) {
      document.querySelector('.input').style.display = 'block'
      document.querySelector('.button').style.display = 'block'
      document.querySelector('.text_one_more').style.display = 'block'
    }
  })
})

function removeClass() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}

document.querySelector('.button').addEventListener('click', () => {
  let value = document.querySelector('.input').value
  if(value == 'Hello How Are You ?' || value == 'Hello how are you?' || value == 'hello how are you ?' || value == 'hello how are you?'){
    window.location.href = "https://www.youtube.com/watch?v=T-eBHmbUPsw"
  }
})