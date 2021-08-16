import React, { useEffect, useState } from 'react';
import { FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAuth } from '../../contexts/auth';
import Card from '../../components/Card';
import {
    Container,
    Header,
    Logo,
    Title,
    HeaderBrand,
    Info,
    Button,
    Content,
    Footer,
} from './styles';
import logo from '../../assets/img/logo-dark.png';
import api from '../../services/api';

function Books() {
    const context = useAuth();
    const [totalPages, setTotalPages] = useState(0);
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);

    async function logout() {
        context.Logout();
    }
    async function loadBooks() {
        const storagedToken = localStorage.getItem('token');

        await api
            .get('books', {
                headers: {
                    Authorization: `Bearer ${storagedToken}`,
                },
                params: {
                    page,
                    amount: 12,
                },
            })
            .then((response) => {
                // Arredondando o total de paginas
                setTotalPages(Math.ceil(response.data.totalPages));
                setBooks(response.data.data);
            });
    }
    function next() {
        if (page + 1 <= totalPages) {
            setPage(page + 1);
        }
    }
    function prev() {
        if (page - 1 > 0) {
            setPage(page - 1);
        }
    }
    useEffect(() => {
        (async () => {
            loadBooks();
        })();
    }, [page]);
    return (
        <Container>
            <Header>
                <HeaderBrand>
                    <Logo src={logo} alt="Logo Ioasys" />
                    <Title>Books</Title>
                </HeaderBrand>
                <HeaderBrand>
                    <Info>Bem vindo, {localStorage.getItem('user')}!</Info>
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
            <Footer>
                <Info>
                    Página {page} de {totalPages}
                </Info>
                <Button
                    disabled={!books || page <= 1}
                    alt="Next Page"
                    type="button"
                    onClick={prev}
                >
                    <FiChevronLeft />
                </Button>
                <Button
                    disabled={!books || page >= totalPages}
                    alt="Next Page"
                    type="button"
                    onClick={next}
                >
                    <FiChevronRight />
                </Button>
            </Footer>
        </Container>
    );
}
export default Books;
