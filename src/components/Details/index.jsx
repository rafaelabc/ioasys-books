import React from 'react';
import { GrClose } from 'react-icons/gr';
import ReactLoading from 'react-loading';
import {
    Container,
    Modal,
    Close,
    Header,
    Cover,
    Subtitle,
    SectionInfo,
    TitleSection,
    LabelInfo,
    Info,
    SectionDescription,
    Description,
    ContentInfo,
    ContainerInfo,
    QuotesIcon,
} from './styles';

function Details({ onClose, book, loading }) {
    return (
        <Container>
            <Header>
                <Close onClick={onClose}>
                    <GrClose />
                </Close>
            </Header>

            <Modal>
                {loading ? (
                    <ReactLoading type="spin" color="#ab3fb5" />
                ) : (
                    <>
                        <Cover alt="Capa do livro" src={book.imageUrl} />
                        <ContentInfo>
                            <h2>{book.title}</h2>
                            {book.authors.map((author) => (
                                <Subtitle key={author}>{author}</Subtitle>
                            ))}
                            <SectionInfo>
                                <TitleSection>INFORMAÇÕES</TitleSection>
                                <div>
                                    <ContainerInfo>
                                        <LabelInfo>Páginas</LabelInfo>
                                        <Info>{book.pageCount}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>Editora</LabelInfo>
                                        <Info>{book.publisher}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>Publicação</LabelInfo>
                                        <Info>{book.published}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>Idioma</LabelInfo>
                                        <Info>{book.language}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>Título Original</LabelInfo>
                                        <Info>{book.title}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>ISBN-10</LabelInfo>
                                        <Info>{book.isbn10}</Info>
                                    </ContainerInfo>
                                    <ContainerInfo>
                                        <LabelInfo>ISBN-13</LabelInfo>
                                        <Info>{book.isbn13}</Info>
                                    </ContainerInfo>
                                </div>
                            </SectionInfo>
                            <SectionDescription>
                                <TitleSection>RESENHA DA EDITORA</TitleSection>
                                <Description>
                                    <QuotesIcon />

                                    {book.description}
                                </Description>
                            </SectionDescription>
                        </ContentInfo>
                    </>
                )}
            </Modal>
        </Container>
    );
}
export default Details;
