import _ from 'lodash';
import './style.css';
import MyImage from './my-image.png';
import Data from './data.xml';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = MyImage;
    myImage.classList.add('kitty');
    element.appendChild(myImage);

    console.log(Data);

    return element;
}

document.body.appendChild(component());