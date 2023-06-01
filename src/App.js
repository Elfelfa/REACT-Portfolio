import './App.css';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  const [page, setPage] = useState('aboutMe');

  const changePage = () => {
    switch (page) {
      case 'aboutMe': {
        return <AboutMe />
      };
      case 'projects': {
        return <Projects />
      };
      case 'contactMe': {
        return <ContactMe />
      };
    };
  };

  const handlePage = (page) => {setPage(page)};

  return (
    <div className="App">
      <Header handlePage={handlePage}/>
      {changePage()}
      <Footer />
    </div>
  );
}

export default App;
