import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
// import Contact from './components/contact';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        
        <Footer />
      </div>
    )
  }
}