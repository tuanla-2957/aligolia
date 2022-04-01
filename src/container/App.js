
import './App.sass'
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import Content from '../components/Content/Content';
import React from 'react';


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
