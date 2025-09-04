import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Results from './components/Results';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form service like Formspree here
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="App">
      <Header />
      <Hero onFormSubmit={handleFormSubmit} formData={formData} onInputChange={handleInputChange} />
      <Services />
      <Results />
      <Process />
      <Contact onFormSubmit={handleFormSubmit} formData={formData} onInputChange={handleInputChange} />
      <Footer />
    </div>
  );
}

export default App; 