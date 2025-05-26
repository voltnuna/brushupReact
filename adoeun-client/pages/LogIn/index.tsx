import React, { useCallback, useState } from 'react';
import { Header, Form, Label, Input, Button, LinkContainer, Error } from '@utils/components';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { useUserStore } from '@store/userStore';

const LogIn = () => {
  const [email, emailHandler, setEmail] = useInput('');
  const [password, pwHandler, setPassword] = useInput('');
  const [loginError, setLoginError] = useState('');

  const login = useUserStore((state) => state.login); // Zustand 액션
  const navigate = useNavigate(); // 로그인 성공 시 이동

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios
        .post(
          '/api/users/login',
          {
            email,
            password,
          },
          { withCredentials: true },
        )
        .then((response) => {
          console.log('로그인 성공', response.data);

          login(response.data.username); // 상태 저장
          navigate('/workspace/sleact/channel/general'); // 로그인 후 이동 경로
        })
        .catch((error) => {
          setLoginError(error.response?.data?.message || '로그인에 실패했습니다.');
          console.error('로그인 실패', error);
        })
        .finally(() => {});
    },
    [email, password, login, navigate],
  );

if(){
            navigate('/workspace/sleact/channel/general'); 
}

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <Input type="email" id="email" name="email" value={email} onChange={emailHandler} />
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <Input type="password" id="password" name="password" value={password} onChange={pwHandler} />
        </Label>
        <Button type="submit">로그인</Button>
        {loginError && <Error>{loginError}</Error>}
      </Form>
      <LinkContainer>
        <span>
          아직 회원이 아니신가요? <Link to="/signup">회원가입하기</Link>
        </span>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
