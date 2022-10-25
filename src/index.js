import './index.html';
import './index.scss';

import mockData from './libs/mock-data';

console.log({ mockData });

// ↑ btw, don't skimp on symbols, use understandable "button" class name
// your code anyway will be automatically obfuscated for the production
// so, it is no need in this type of economy

/*

try not to overload API, or it will stop to answer you
uncomment it, when will be testing API itself
for markup and styles you can use mock data as specified above 
*/

const data = fetch(
    'https://private-anon-74061ac3bc-lampshop.apiary-mock.com/lamps',
)
    .then((response) => response.json())
    .then((data) => {
        document.querySelector('.bottom__text').innerText = 'Material:' + ' ' + data[0].material;
        document.querySelector('.bottom__text_size').innerText = 'Dimensions (cm):' + ' ' + data[0].height;
        document.querySelector('.bottom__text_weight').innerText = 'Net Weight:' + ' ' + data[0].weight;
        document.querySelector('.bottom__text_power').innerText = 'Electrification:' + ' ' + data[0].electrification;

        let image = document.querySelector('.bottom__picture').append(img);
        image.src = data[0].image;




        // document.querySelector('.bottom__text').innerText = data[0].name;
    }); // here you can start using it


