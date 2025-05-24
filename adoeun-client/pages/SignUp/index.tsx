import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from '@pages/SignUp/styles';
import React, { useCallback, useState } from 'react';
import useInput from '@hooks/useInput';


const SignUp = () => {
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname,onChangeNickname, setNickname] = useInput('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [missMatchError, setMissMatchError] = useState(false);


  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    e.target.value === passwordCheck ? setMissMatchError(false) : setMissMatchError(true);
  }, [passwordCheck]);
  
  const onChangePasswordCheck = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCheck(e.target.value);
    e.target.value === password ? setMissMatchError(false) : setMissMatchError(true);
  }, [password]);

  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();     
    console.log(email, nickname, password, passwordCheck);
    if (missMatchError) {
      alert('비밀번호가 일치하지 않습니다.');
      
      return;
    } else {
      console.log('회원가입 성공');
    } 
    
  }, [email, nickname, password, passwordCheck]);

  return (
    <div id="container">
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
        
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <a href="/login">로그인 하러가기</a>
      </LinkContainer>
    </div>
  );
};

export default SignUp; 
