import './index.html';
import './index.scss';

import mockData from './lib/mock-data';

console.log({ mockData });

const button = document.querySelector('.btn');
// ↑ btw, don't skimp on symbols, use understandable "button" class name
// your code anyway will be automatically obfuscated for the production
// so, it is no need in this type of economy

/*

try not to overload API, or it will stop to answer you
uncomment it, when will be testing API itself
for markup and styles you can use mock data as specified above

const data = fetch(
    'https://private-anon-74061ac3bc-lampshop.apiary-mock.com/lamps',
)
    .then((response) => response.json())
    .then((data) => console.log(data)); // here you can start using it

*/
