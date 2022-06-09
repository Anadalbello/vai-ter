((d, w) => {
  const randomIntFrom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const bn = d.querySelector('.bn');
  const drum = bn.querySelector('.bn-spinwheel__drum-inner');

  const dropQ = bn.querySelector('.bn-drop__q');
  const dropInfo = bn.querySelector('.bn-drop__info');
  const dropIcon = bn.querySelector('.bn-drop__icon');
  const dropTitle = bn.querySelector('.bn-drop__title');

  const wheelEffects = (title, wallpaper) => {
      if (title === 'PERDEU TUDO') {
        document.getElementById('canelaCanela').play();
        wallpaper.classList.add('canela-canela');
        setTimeout(() => {
          wallpaper.classList.remove('canela-canela');
        }, 3000);
      } else {
        document.getElementById('coins').play();
        wallpaper.classList.add('winning');
        setTimeout(() => {
          wallpaper.classList.remove('winning');
        }, 3000);
      }
  }

  const items = [
		{
    	title: '50',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
			title: '250',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    	title: '350',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    title: '500',
    img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    	title: '1000',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    	title: '1500',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    	title: '300',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
    {
    	title: '2000',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'},
			{
    	title: '25',
    	img: 'https://app.feedz.com.br/assets/images/coins.png'
		},
		{
    	title: 'PERDEU TUDO',
    	img: 'https://app.feedz.com.br/assets/images/mood-1.png'
		}
	];
  
  items.forEach((item) => {
    const el = d.createElement('div');
    const div = d.createElement('div');
    
    el.classList.add('bn-spinwheel__sector');
    div.classList.add('bn-spinwheel__span');
    
    div.innerHTML = item.title;

    el.appendChild(div);
    drum.appendChild(el);
  });
  
  let inProgress = false;
  let x = 18;
  let currentItemIndex = 2;
  
  bn.addEventListener('click', () => {
    var wallpaper = document.getElementById("content");

    if (inProgress) {
      return;
    }
    
    inProgress = true;
    
    dropQ.classList.remove('hide');
    dropInfo.classList.remove('show');
    
    const rndSteps = randomIntFrom(20, 50);
    
    x += 36 * rndSteps;
    
    currentItemIndex = currentItemIndex - (rndSteps % 10);
    
    currentItemIndex = currentItemIndex < 0 ? 10 + currentItemIndex : currentItemIndex;
    
    drum.style.transform = `rotate(${x}deg)`;
    
    setTimeout(() => {
      inProgress = false;
      
      dropQ.classList.add('hide');
      dropInfo.classList.add('show');
      dropIcon.src = items[currentItemIndex].img;
      dropTitle.innerHTML = currentItemIndex !== 9 ? 'Valendo ' + items[currentItemIndex].title + ' Kryptocoins' : items[currentItemIndex].title;
      
      wheelEffects(items[currentItemIndex].title, wallpaper);
    }, 3000);
  });
})(document, window);
