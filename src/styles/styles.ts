import styled, { createGlobalStyle, css } from "styled-components";
import fundo from "../assets/img/fundo.png"

export const colors = {
    // Text color
    corTextoPrincipal: '#E66767',

    // Background-color
    corFundoPrincipal: '#FFF8F2',

    // Tag colors
    corFundoTag: '#E66767',
    corTextoTag: '#FFEBD9',

    // Card Color
    corFundoCardRest: '#fff',

    corFundoCardPrato: '#E66767',
    corTextoCardPrato: "#FFEBD9",
    
    CorFundoBotaoPrato: "#FFEBD9",
    CorTextoBotaoPrato:'#E66767',

    //Banner
    corTextoBanner: "#fff",

}

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${colors.corFundoPrincipal};
    }
`

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
`

export const Background = css`
    background-image: url(${fundo});
    height: 300px;
    width: 100%;

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`