import { v4 as manoUuid } from 'uuid';
import axios from 'axios';

console.log('Stuff node!');

const naujasId = manoUuid();
console.log('Sugeneruotas UUID:', naujasId);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.data))