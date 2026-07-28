import { csv } from 'd3-fetch';

const data = await csv('./data/my.csv');

console.table(data);
