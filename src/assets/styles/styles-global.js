import { createGlobalStyle } from 'styled-components';
import Heebo from '../fonts/Heebo/Heebo-VariableFont_wght.ttf';

export default createGlobalStyle`
:root {
    --primary-color: #B22E6F;
    --secondary-color: rgb(247, 221, 231);
    --white-color: #ffffff;
    --input-background-color: rgba(0, 0, 0, 0.32);
    --shadow-color: rgba(84, 16, 95, 0.20);
    --shadow-hover-color: rgba(84, 16, 95, 0.40);
    --error-background-color:  rgba(255, 255, 255, 0.4);
    --dark-grey-color:  #333333;

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
