import cardsData from './data';
import CardDataParser from './dataParser';
import CardIdentifier from './Identifier';
import Widget from './widget';

const checkParameters = CardDataParser.getCheckParameters(cardsData);
const biggestFirstDigits = CardDataParser.getBiggestFirstDigits(cardsData);
const cardIdentifier = new CardIdentifier(checkParameters, biggestFirstDigits);

const widgetContainer = document.querySelector('#widget-container');

const widget = new Widget(widgetContainer, cardIdentifier);
widget.bindToDOM();
