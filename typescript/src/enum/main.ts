import { MyEnum } from './models/my-enum';

let x: MyEnum = MyEnum.Yours;

console.log(`is it yours? => ${x === 'yours'}`);

console.log(`is it really yours? => ${x === MyEnum.Yours}`);
