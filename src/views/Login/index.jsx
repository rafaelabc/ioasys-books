import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { useAuth } from '../../contexts/auth';
import {
    Container,
    Title,
    Logo,
    Header,
    LoginSection,
    Input,
    InputGroup,
    Form,
    Label,
    Button,
    InputGroupSubmit,
    ToastError,
} from './styles';
import logo from '../../assets/img/logo.png';

function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const context = useAuth();

    function validate() {
        if (email === '' && password === '') {
            setErrorMessage('Email e Senha são obrigatórios.');
            return false;
        }
        return true;
    }
    async function login() {
        setLoading(true);

        try {
            if (validate()) {
                await context.Login(email, password);
                setError(false);
            } else {
                setError(true);
            }
            setLoading(false);
        } catch (e) {
            setErrorMessage(e.data.errors.message);
            setError(true);
            setLoading(false);
        }
    }
    return (
        <Container>
            <LoginSection>
                <Header>
                    <Logo src={logo} alt="Logo Ioasys" />
                    <Title>Books</Title>
                </Header>
                <Form>
                    <InputGroup>
                        <InputGroupSubmit>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputGroupSubmit>
                    </InputGroup>

                    <InputGroup>
                        <InputGroupSubmit>
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                type="password"
                                id="password"
                                name="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroupSubmit>

                        {loading ? (
                            <ReactLoading
                                height={85}
                                width={36}
                                type="spin"
                                color="#f5f5f5"
                            />
                        ) : (
                            <Button
                                alt="Fazer login"
                                type="button"
                                onClick={login}
                            >
                                Entrar
                            </Button>
                        )}
                    </InputGroup>
                </Form>
                {error ? <ToastError>{errorMessage}</ToastError> : ''}
            </LoginSection>
        </Container>
    );
}
export default Login;
