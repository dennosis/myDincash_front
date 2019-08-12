import React from 'react';
import Footer from './components/layout/Footer.js'
import Menu from './components/layout/Menu.js'
import Header from './components/layout/Header.js'
import Content from './components/layout/Content.js'

function Main() {
  return (
    <>
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </>
  );
}

export default Main;
