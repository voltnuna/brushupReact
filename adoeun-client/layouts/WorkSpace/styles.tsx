import styled from '@emotion/styled';
import { Common } from '@utils/styles';

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 7rem;
  background-color: ${Common.color.primary};
  border-bottom: 1px solid #eee;
`;
export const ProfileBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 0 1.5rem;
  cursor: pointer;

  & > span {
    display: flex;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    font-size: 0;
    background-color: #eee;
  }
`;

export const LeftBar = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 20rem;
  height: 100%;
  background-color: ${Common.color.primary};
  & > button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    margin: 1rem;
    background-color: #fff;
    border-radius: 6px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    box-shadow:
      0 4px 4px 0 rgba(0, 0, 0, 0.2),
      0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
`;
