import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../contexts/auth';
import Card from '../../components/Card';
import {
    Container,
    Header,
    Logo,
    Title,
    HeaderBrand,
    InfoUser,
    Button,
    Content,
    Footer,
} from './styles';
import logo from '../../assets/img/logo-dark.png';
import api from '../../services/api';

function Books() {
    const context = useAuth();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    async function logout() {
        context.Logout();
    }
    async function loadBooks() {
        const storagedToken = localStorage.getItem('token');

        const response = await api.get('books', {
            headers: {
                Authorization: `Bearer ${storagedToken}`,
            },
            params: {
                page,
                amount: 12,
            },
        });
        setBooks(response.data.data);
    }

    useEffect(() => {
        (async () => {
            setPage(1);
            loadBooks();
        })();
    }, []);
    return (
        <Container>
            <Header>
                <HeaderBrand>
                    <Logo src={logo} alt="Logo Ioasys" />
                    <Title>Books</Title>
                </HeaderBrand>
                <HeaderBrand>
                    <InfoUser>Bem vindo, {context.user.name}!</InfoUser>
                    <Button alt="Fazer logout" type="button" onClick={logout}>
                        <FiLogOut />
                    </Button>
                </HeaderBrand>
            </Header>
            <Content>
                {books.map((book) => (
                    <Card book={book} key={book.id} />
                ))}
            </Content>
            <Footer>Footer</Footer>
        </Container>
    );
}
export default Books;
