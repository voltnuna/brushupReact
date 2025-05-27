import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useUserStore } from '@store/userStore';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const WorkSpace = loadable(() => import('@layouts/WorkSpace'));
const Channel = loadable(() => import('@pages/Channel'));

const App = () => {
  const hasHydrated = useUserStore((state) => state.hasHydrated);

  if (!hasHydrated) return <div>Loading...</div>;

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const username = useUserStore((state) => state.username);

  useEffect(() => {
    //S:지우기
    console.log('APP Hydrated?', hasHydrated);
    console.log('APP Username', username);
    console.log('APP isLoggedIn', isLoggedIn);
    //E:지우기
  }, [hasHydrated, username, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        {/* <Route path="/workspace" element={<WorkSpace />} /> */}
        {!isLoggedIn ? <Route path="/login" element={<LogIn />} /> : <Route path="/login" element={<WorkSpace />} />}
        <Route path="/workspace" element={<WorkSpace />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
