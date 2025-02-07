import React, { useState, useEffect } from 'react';
import './about.scss';




interface AboutData {
  label: string;
  description: string;
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData[]>([]);
  const [selectedSection, setSelectedSection] = useState<string>('Missão');

  useEffect(() => {
    const API_URL = 'https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php'; 
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setAboutData(data.about))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };

  const selectedData = aboutData.find((item) => item.label === selectedSection);

  return (
    <div id='sobre-nos' className="about-container">
    <div className="title-container">
      <div className="background-bar-1"></div>
      <h1 className="about-title">Sobre nós</h1>
      <div className="background-bar-2"></div>
    </div>
    
    <div className="tabs">
      {aboutData.map((item) => (
        <label 
          key={item.label} 
          className={`tab-label ${item.label === selectedSection ? 'selected' : ''}`} 
          onClick={() => handleSectionChange(item.label)}
        >
          {item.label}
        </label>
      ))}
    </div>
  
    {selectedData && (
      <div className="section-content">
        <div className="section-description">
          {Array(3).fill(null).map((_, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: selectedData.description }} />
          ))}
        </div>
      </div>
    )}
  </div>
  
  );
};

export default About;
