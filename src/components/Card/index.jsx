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

function Card({ book }) {
    const [showDetails, setShowDetails] = useState(false);
    const [bookDetails, setBookDetails] = useState({ data: [] });
    async function loadBookById() {
        const storagedToken = localStorage.getItem('token');

        await api
            .get(`books/${book.id}`, {
                headers: {
                    Authorization: `Bearer ${storagedToken}`,
                },
            })
            .then((response) => {
                setBookDetails(response.data);
                setShowDetails(true);
            });
    }
    return (
        <>
            {showDetails ? (
                <Details
                    hidden={showDetails}
                    book={bookDetails}
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
