import styled from 'styled-components';
import background from '../../assets/img/login-background.png';

export const Container = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
`;

export const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 8vw;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

export const Title = styled.h1`
    font-weight: 100;
    font-size: 1.7rem;
    color: var(--white-color);
`;

export const Logo = styled.img`
    margin-right: 3vw;
    @media (min-width: 768px) {
        margin-right: 1vw;
    }
`;

export const Form = styled.form``;

export const InputGroup = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--input-background-color);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 10px;
    height: 35px;
    width: 200px;
    @media (min-width: 300px) {
        width: 250px;
    }
    @media (min-width: 370px) {
        width: 300px;
    }
    @media (min-width: 420px) {
        width: 368px;
    }
`;

export const InputGroupSubmit = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 0.9rem;
    line-height: 16px;
    color: var(--white-color);
    opacity: 0.5;
`;

export const Input = styled.input`
    background: none;
    line-height: 24px;
    border: none;
    color: var(--white-color);
`;

export const Button = styled.button`
    background: var(--white-color);
    font-size: 0.9rem;
    font-weight: 700;
    border: none;
    border-radius: 44px;
    line-height: 20px;
    color: var(--primary-color);
    width: 85px;
    height: 36px;
    cursor: pointer;
`;

export const ToastError = styled.div`
    &::before {
        position: absolute;
        content: '';
        top: -8px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid var(--error-background-color);
    }
    position: relative;
    background: var(--error-background-color);
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 15px;
    color: var(--white-color);
    width: 239px;
`;
