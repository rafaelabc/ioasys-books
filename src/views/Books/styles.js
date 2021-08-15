import styled from 'styled-components';

export const Container = styled.main`
    background-image: linear-gradient(
        to right,
        var(--secondary-color),
        var(--white-color),
        var(--secondary-color)
    );
    height: 86vh;
    padding: 50px 50px 50px 50px;
    @media (min-width: 450px) {
        padding: 50px 100px 50px 100px;
    }
    @media (min-width: 570px) {
        padding: 50px 150px 50px 150px;
    }
`;
export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const HeaderBrand = styled.section`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-weight: 100;
    font-size: 1.7rem;
`;
export const Logo = styled.img`
    margin-right: 3vw;
    @media (min-width: 768px) {
        margin-right: 1vw;
    }
`;
export const InfoUser = styled.span`
    display: none;
    margin-right: 10px;
    @media (min-width: 768px) {
        display: inline;
    }
`;
export const Button = styled.button`
    background: transparent;
    font-size: 1rem;
    border: solid 1px;
    border-radius: 20px;
    border-color: var(--input-background-color);
    line-height: 20px;
    width: 36px;
    height: 36px;
    cursor: pointer;
`;

export const Content = styled.section`
    display: flex;
`;
export const Footer = styled.footer`
    display: flex;
`;
