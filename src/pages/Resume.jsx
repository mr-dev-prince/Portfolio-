import React from 'react'
import { useRecoilState } from 'recoil';
import { ThemeState } from '../context/atoms/themeState';

const Resume = () => {
  const themeState = useRecoilState(ThemeState);
  const theme = themeState[0];
  return <div className={`${theme} min-h-screen`}>Resume</div>;
}

export default Resume