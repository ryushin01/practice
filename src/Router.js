import React from 'react';
import Login from './pages/Login/Login';
import Post from './pages/Post/Post';
import Loading from './pages/Loading/Loading';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Router = () => {
  const themeSwitcher = e => {
    const wrap = document.getElementById('outer-wrap');
    e.target.checked
      ? wrap.setAttribute('theme', 'darkTheme')
      : wrap.setAttribute('theme', 'lightTheme');
  };

  return (
    <div id="outer-wrap" theme="lightTheme">
      <div className="inner-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/post" element={<Post />} />
            <Route path="/loading" element={<Loading />} />
          </Routes>
        </BrowserRouter>
        <input id="theme-switcher" type="checkbox" onClick={themeSwitcher} />
      </div>
    </div>
  );
};

export default Router;
