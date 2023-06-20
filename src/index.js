import _ from 'lodash';
import './styles/style.css';
import bgImg from './assets/images/travels_bg.jpg';

function component() {
	const element = document.createElement('div');
	
	// Lodash, now imported by script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// Add the image as background
	const backImg = new Image();
	backImg.src = bgImg;

	return element;
}

document.body.appendChild(component());
