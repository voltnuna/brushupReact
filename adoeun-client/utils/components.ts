import styled from '@emotion/styled';
import { Common } from '@utils/styles';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  font-family:
    Slack-Larsseit,
    Helvetica Neue,
    Helvetica,
    Segoe UI,
    Tahoma,
    Arial,
    sans-serif;
  font-weight: 700;
  font-size: ${Common.fontSize.title};
  line-height: ${Common.fontSize.title};
  letter-spacing: -0.75px;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 40rem;
  max-width: 40rem;
`;

export const Label = styled.label`
  margin-bottom: 1.6rem;
  & > span {
    display: flex;
    text-align: left;
    padding-bottom: 0.8rem;
    font-size: ${Common.fontSize.subTitle};
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border-radius: 0.4rem;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition:
    border 80ms ease-out,
    box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 2rem;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 1.2rem;
  height: 4.4rem;
  padding-top: 1.1rem;
  padding-bottom: 1.3rem;
  font-size: ${Common.fontSize.subTitle};
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow:
      0 0 0 1px var(--saf-0),
      0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Button = styled.button`
  margin-bottom: 1.2rem;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: ${Common.color.primary};
  border: none;
  font-size: ${Common.fontSize.subTitle};
  font-weight: 900;
  height: 4.4rem;
  min-width: 9.6rem;
  padding: 0 1.6rem 0.3rem;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.4rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: ${Common.color.hovered};
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow:
      0 0 0 1px var(--saf-0),
      0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin: 0.8rem 0 1.6rem;
  font-weight: bold;
`;

export const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
  padding: 0 0 2rem 0;
`;

export const LinkContainer = styled.p`
  font-size: ${Common.fontSize.small};
  color: #616061;
  margin: 0 auto 0.8rem;
  width: 40rem;
  max-width: 40rem;

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;
