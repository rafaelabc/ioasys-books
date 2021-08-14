import styled from 'styled-components';
import background from '../../assets/img/login-background.png';

export const Container = styled.div`
    background: url(${background});
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

export const LoginSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 8vw;
`;
export const Title = styled.h1`
    color: var(--white-color);
    font-weight: 100;
    font-size: 1.7rem;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;
export const Input = styled.input`
    background: none;
    border: none;
    color: var(--white-color);
    line-height: 24px;
`;
export const Form = styled.form``;

export const Button = styled.button`
    background: var(--white-color);
    border-radius: 44px;
    font-size: 0.9rem;
    line-height: 20px;
    font-weight: 700;
    color: var(--primary-color);
    border: none;
    cursor: pointer;
    width: 85px;
    height: 36px;
`;

export const InputGroupSubmit = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InputGroup = styled.div`
    background-color: var(--input-background-color);
    backdrop-filter: blur(2px);
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    height: 35px;
    width: 200px;
    justify-content: space-between;
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
export const Label = styled.label`
    color: var(--white-color);
    opacity: 0.5;
    line-height: 16px;
    font-size: 0.9rem;
`;
export const Logo = styled.img`
    margin-right: 3vw;
    @media (min-width: 768px) {
        margin-right: 1vw;
    }
`;
export const ToastError = styled.div`
    &::before {
        content: '';
        position: absolute;
        top: -8px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid var(--error-background-color);
    }
    padding: 15px;
    background: var(--error-background-color);
    border-radius: 4px;
    position: relative;
    font-weight: 700;
    font-size: 0.9rem;
    width: 239px;
    color: var(--white-color);
`;
