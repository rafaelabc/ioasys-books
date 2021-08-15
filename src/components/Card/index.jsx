import React from 'react';
import {
    Content,
    Container,
    Header,
    Footer,
    Cover,
    Title,
    Subtitle,
} from './styles';

function Card({ book }) {
    console.log(book);
    return (
        <Container>
            <Cover src={book.imageUrl} alt="Capa do livro" />
            <Content>
                <Header>
                    <Title>{book.title}</Title>
                    {book.authors.map((author) => (
                        <Subtitle>{author}</Subtitle>
                    ))}
                </Header>
                <Footer>
                    <span>{book.pageCount} páginas </span>
                    <span>Editora {book.publisher}</span>
                    <span>Publicado em {book.published}</span>
                </Footer>
            </Content>
        </Container>
    );
}
export default Card;
