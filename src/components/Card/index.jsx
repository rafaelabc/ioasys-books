import React, { useState } from 'react';
import Details from '../Details/index';

import {
    Content,
    Container,
    Header,
    Footer,
    Cover,
    Title,
    Subtitle,
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';

function Card({ book }) {
    const context = useAuth();
    const [loading, setLoading] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [bookDetails, setBookDetails] = useState({ data: [] });
    async function loadBookById() {
        setShowDetails(true);
        setLoading(true);
        const storagedToken = localStorage.getItem('token');
        try {
            await api
                .get(`books/${book.id}`, {
                    headers: {
                        Authorization: `Bearer ${storagedToken}`,
                    },
                })
                .then((response) => {
                    setBookDetails(response.data);

                    setLoading(false);
                });
        } catch (error) {
            context.Logout();
        }
    }
    return (
        <>
            {showDetails ? (
                <Details
                    hidden={showDetails}
                    book={bookDetails}
                    loading={loading}
                    onClose={() => setShowDetails(false)}
                />
            ) : (
                ''
            )}
            <Container onClick={() => loadBookById()}>
                <Cover src={book.imageUrl} alt="Capa do livro" />
                <Content>
                    <Header>
                        <Title>{book.title}</Title>
                        {book.authors.map((author) => (
                            <Subtitle key={author}>{author}</Subtitle>
                        ))}
                    </Header>
                    <Footer>
                        <span>{book.pageCount} páginas </span>
                        <span>Editora {book.publisher}</span>
                        <span>Publicado em {book.published}</span>
                    </Footer>
                </Content>
            </Container>
        </>
    );
}
export default Card;
