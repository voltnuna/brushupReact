import React, { useCallback, useState } from 'react';
import { Container, Header, Button, Error, Form, Input, Label, LinkContainer, Success } from '@utils/components';
import useInput from '@hooks/useInput';
import axios from 'axios';

const SignUp = () => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [missMatchError, setMissMatchError] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      e.target.value === passwordCheck ? setMissMatchError(false) : setMissMatchError(true);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      e.target.value === password ? setMissMatchError(false) : setMissMatchError(true);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email, nickname, password, passwordCheck);
      if (!missMatchError && nickname) {
        console.log('회원가입 요청을 보냅니다.');
        axios
          .post('/api/users', {
            email,
            nickname,
            password,
          })
          .then((res) => {
            console.log('RES', res);
            setSignUpSuccess(true);
          })
          .catch((err) => {
            console.log('ERR', err.response.data);
            setSignUpError(err.response.data);
          })
          .finally(() => {
            console.log('FINALLY');
          });
        return;
      } else {
        alert('회원가입 폼을 정확히 작성해주세요');
      }
    },
    [email, nickname, password, passwordCheck],
  );

  return (
    <Container id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
        </Label>
        {missMatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
        {signUpError !== '' && <Error>{signUpError}</Error>}
        {signUpSuccess && <Success>회원가입을 축하합니다.</Success>}
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </Container>
  );
};

export default SignUp;
