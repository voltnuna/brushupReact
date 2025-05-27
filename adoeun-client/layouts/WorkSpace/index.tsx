import React, { useCallback, useEffect, FC } from 'react';
import { useUserStore } from '@store/userStore';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { LeftBar, ProfileBadge, TopBar } from './styles';
import AvatarEditor from 'react-avatar-editor';

const WorkSpace = () => {
  const hasHydrated = useUserStore((state) => state.hasHydrated);
  if (!hasHydrated) {
    return <div>Login..</div>;
  }
  const navigate = useNavigate();
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const logout = useUserStore((state) => state.logout);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout')
      .then(() => {
        logout();
        navigate('/login');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [logout]);

  const onClickTopBar = useCallback(() => {
    console.log('Click');
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      {/* S: COMMON TOP BAR */}
      {/* S: COMMON TOP BAR INNER MENU */}
      <TopBar>
        <ProfileBadge onClick={onClickTopBar}>
          <span>사용자 프로필</span>
        </ProfileBadge>
      </TopBar>
      {/* E: COMMON TOP BAR INNER MENU */}
      {/* E: COMMON TOP BAR */}

      {/* S:WORKSPACE WRAPPER */}
      <LeftBar>
        <button type="button" onClick={onLogout}>
          LOGOUT
        </button>
      </LeftBar>

      {/* E:WORKSPACE WRAPPER */}
    </>
  );
};
export default WorkSpace;
