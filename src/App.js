import React from 'react';
import Header from './Components/Header/Header';
import SecondSection from './Components/SecondSection/SecondSection';
import FirstSection from './Components/FirstSection/FirstSection';
import './App.css';
import ThirdSection from './Components/ThirdSection/ThirdSection';
import Footer from './Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
