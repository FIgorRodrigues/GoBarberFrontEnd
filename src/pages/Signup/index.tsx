import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, AnimationContainer, Content, Background } from './style';
import Logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handlerSubmit = useCallback(async (data: SignUpRequest) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={Logo} alt="LogoGoBarber" title="LogoGoBarber" />

          <Form
            ref={formRef}
            initialData={{ name: '', email: '', password: '' }}
            onSubmit={handlerSubmit}
          >
            <h1>Faça seu cadastro</h1>

            <Input type="text" icon={FiUser} name="name" placeholder="Nome" />

            <Input
              type="email"
              icon={FiMail}
              name="email"
              placeholder="E-mail"
            />

            <Input
              type="password"
              icon={FiLock}
              name="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
