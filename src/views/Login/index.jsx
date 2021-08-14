import React, { useState } from 'react';
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
    const context = useAuth();

    async function validate() {
        if (email === '' || password === '') {
            setErrorMessage('Preencha os campos obrigatórios!');
            return false;
        }
        return true;
    }
    async function login() {
        if (validate()) {
            try {
                context.Login(email, password);
                setError(false);
            } catch (err) {
                console.log(err);
                setError(true);
            }
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
                        <Button type="button" onClick={login}>
                            Entrar
                        </Button>
                    </InputGroup>
                </Form>
                {error ? <ToastError>{errorMessage}</ToastError> : ''}
            </LoginSection>
        </Container>
    );
}
export default Login;
