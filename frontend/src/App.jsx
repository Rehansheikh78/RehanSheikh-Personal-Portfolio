import { useState, useEffect } from 'react';
import Header from './components/Header';

import Loader from './components/Loader';
import Hero from './components/Hero';

import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App(){

  const [isLoading, setIsLoading]= useState(true);

    useEffect(() =>{
      const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1600);

    return ()=> clearTimeout(timer);
  },[]);


  return(
    <>
      {/* Header component */}
      {isLoading && <Loader />}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer/>
    </>
  );

}
 export default App;
