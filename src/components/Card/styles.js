import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--white-color);
    box-shadow: 0px 6px 24px var(--shadow-color);
    width: 260px;
    padding: 15px;
    border-radius: 4px;
    &:hover {
        box-shadow: 0px 16px 80px var(--shadow-hover-color);
    }
    @media (min-width: 400px) {
        width: 280px;
    }
    @media (min-width: 600px) {
        width: 230px;
    }
    @media (min-width: 700px) {
        width: 280px;
    }
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;
export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;
export const Title = styled.h4``;
export const Subtitle = styled.h5`
    color: var(--primary-color);
    font-weight: 100;
`;
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    color: var(--input-background-color);
    font-size: 0.9rem;
`;
export const Cover = styled.img`
    width: 81px;
    height: 122px;
`;
