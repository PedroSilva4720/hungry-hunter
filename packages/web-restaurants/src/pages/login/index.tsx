import React from 'react';

import * as Styles from './styles';

import { Input } from '@compo/input/Input';
import { Button } from '@compo/button/Button';
import { Link } from '@compo/link/Link';

export const LoginComponent: React.FC<{}> = () => {
  return (
    <>
      <header></header>
      <main>
        <Styles.Container>
          <div>
            <div>
              <Styles.Title>Entrar</Styles.Title>
              <Styles.Subtitle>Gerencie seu negócio</Styles.Subtitle>
            </div>
            <Styles.FormContainer>
              <Input label='Email' type='email' />
              <Input label='Senha' type='password'>
                <Link to='' placeholder='Esqueceu a senha?' />
              </Input>
              <Button title='Entrar' />
              <Link
                to=''
                placeholder='Gostaria de ingressar nos parceiros Hungry Hunter?'
              />
            </Styles.FormContainer>
          </div>
        </Styles.Container>
      </main>
      <footer></footer>
    </>
  );
};
