import styled from 'styled-components';
import { ImQuotesLeft } from 'react-icons/im';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: none;

    z-index: 2;

    background-color: var(--input-background-color);
    height: 100%;
    width: 100%;
`;
export const Modal = styled.main`
    display: flex;
    flex-direction: column;

    overflow-y: auto;

    width: 70%;
    height: 80%;
    background-color: var(--white-color);
    padding: 15px;
    margin-left: 10%;
    color: var(--dark-grey-color);
    @media (min-width: 400px) {
        align-items: center;
        margin-left: 12%;
    }
    @media (min-width: 700px) {
        align-items: center;
        margin-left: 15%;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        height: 60%;
    }
    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        height: 55%;
    }
    @media (min-width: 1300px) {
        width: 60%;
        margin-left: 20%;
    }
    @media (min-width: 1400px) {
        width: 50%;
        margin-left: 25%;
    }
    @media (min-width: 1600px) {
        width: 40%;
        margin-left: 30%;
        height: 60%;
    }
    }
`;
export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
`;
export const Close = styled.button`
    background: var(--white-color);
    font-size: 1rem;
    border: solid 1px;
    border-radius: 20px;
    border-color: var(--input-background-color);
    width: 36px;
    height: 36px;
    cursor: pointer;
    margin-right: 20px;
    margin-top: 20px;
`;
export const Cover = styled.img`
    height: 351px;
    width: 240px;
    margin-bottom: 10px;
    @media (min-width: 1024px) {
        margin: 20px;
    }
`;
export const Subtitle = styled.span`
    color: var(--primary-color);
    display: block;
`;
export const SectionInfo = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`;
export const TitleSection = styled.h5`
    margin-top: 10px;
    margin-bottom: 10px;
`;
export const ContentInfo = styled.div`
    @media (min-width: 1024px) {
        margin: 20px;
    }
`;
export const LabelInfo = styled.label`
    font-weight: 700;
    font-size: 0.8rem;
`;
export const Info = styled.span`
    font-size: 0.8rem;
`;
export const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const SectionDescription = styled.div`
    margin-top: 20px;
`;
export const Description = styled.p`
    font-size: 0.8rem;
    text-align: justify;
`;
export const QuotesIcon = styled(ImQuotesLeft)`
    margin-right: 5px;
`;
