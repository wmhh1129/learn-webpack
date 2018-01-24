import './index.scss'
import { wordsToSentence } from './utils/utils'
const el = document.createElement('div'),
    text = document.createTextNode(
        wordsToSentence('Welcome', 'to', 'my', 'app')
    );
el.id = 'app'

el.appendChild(text);
document.body.appendChild(el);