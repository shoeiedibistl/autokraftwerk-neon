import '../styles/style.scss';
import 'virtual:svg-icons-register';
import 'lazysizes';
import { select } from '../blocks/select/select';
import { accordion } from '../blocks/accordion-ui/accordion-ui';
import { inputReset } from './components/inputReset';
import { modals } from '../blocks/modals/modals';

import { stopAnim } from './components/stopAnim';

stopAnim();

document.addEventListener('DOMContentLoaded', function () {
  inputReset();
  select();
  accordion();
  modals();
});
