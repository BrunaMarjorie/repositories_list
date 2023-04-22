import { createGlobalStyle } from "styled-components";

import background from "../assets/images/background.svg";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F5F5F5;
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }
`