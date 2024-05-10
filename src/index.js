const themsDark = document.querySelector('.thems__dark');
const themsLight = document.querySelector('.thems__light');

themsDark.addEventListener('click', function() {
    const mainRight = document.querySelector('.main__right');
    mainRight.style.backgroundImage = 'url(images/bg__main__right_dark.png)';
})

themsLight.addEventListener('click', function() {
    const mainRight = document.querySelector('.main__right');
    mainRight.style.backgroundImage = 'url(./images/bg__main__right.png)';
})

const swichItemOne = document.querySelector('#swichItemOne');
const swichItemTwo = document.querySelector('#swichItemTwo');
const swichItemThree = document.querySelector('#swichItemThree');

const url = 'https://private-anon-dc20360ec3-lampshop.apiary-mock.com/lamps';

swichItemOne.addEventListener('click', async function getProduct () {
    try {
        
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);



            const material = document.querySelector('.bottom__text');
            material.textContent = 'Material:' + ' ' + data[0].material; 

            const size = document.querySelector('.bottom__text_size');
            size.textContent = 'Dimensions (cm):' + ' ' + data[0].height + ' ' + 'x' + ' ' + data[0].width; 
            const weight = document.querySelector('.bottom__text_weight');
            weight.textContent = 'Net Weight:' + ' ' + data[0].weight; 

            const electrification = document.querySelector('.bottom__text_power');
            electrification.textContent = ' Electrification:' + ' ' + data[0].electrification;


            const picture = document.querySelector('.bottom__picture');
            if (picture.getElementsByTagName('img').length>0) {
                return
            }
            const image = document.createElement('img');
            image.src = data[0].image;
            picture.appendChild(image);

            const pictureRight = document.querySelector('.right');
            if (pictureRight.getElementsByTagName('img').length>0) {
                return
            }

            const imageRight = document.createElement('img');
            imageRight.src = data[0].image;
            imageRight.className = 'imageRight'
            pictureRight.appendChild(imageRight);



    } catch (error) {
        console.log(error);
    }
} )




