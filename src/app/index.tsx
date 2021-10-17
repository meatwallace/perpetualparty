import './styles.css';

import { render } from 'react-dom';
import { isDevelopment } from './config';
import { registerDebugUtils } from './utils/registerDebugUtils';
import { Root } from './Root';

const rootElement = document.getElementById('root');

render(<Root />, rootElement);

if (isDevelopment) {
  registerDebugUtils();
}
