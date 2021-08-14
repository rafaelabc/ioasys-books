import { createGlobalStyle } from 'styled-components';
import Heebo from '../fonts/Heebo/Heebo-VariableFont_wght.ttf';

export default createGlobalStyle`
:root {
    --primary-color: #B22E6F;
    --white-color: #ffffff;
    --input-background-color: rgba(0, 0, 0, 0.32);
    --error-background-color:  rgba(255, 255, 255, 0.4);
}
@font-face {
    font-family: 'Heebo';
    src: local('Heebo'), url(${Heebo})
  }

* {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Heebo';
  }

`;
