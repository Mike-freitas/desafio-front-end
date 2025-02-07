import React, { useEffect, useState } from 'react';
import "./service.scss";


interface ServiceItem {
    title: string;
    text: string;
}

const Service: React.FC = () => {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const API_URL = 'https://www.mdsystemweb.com.br/projects/api/v1/test/layout.php'; 
        fetch(API_URL) 
            .then(response => response.json())
            .then(data => setServices(data.service))
            .catch(error => console.error('Erro ao buscar serviços:', error));
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
    };

    return (
        <div id='servicos' className="service_container">
            <div className='service_title__container'>

                <div className="background-bar-1"></div>
                    <h1 className="service-title">Serviços</h1> 
                <div className='background-bar-2'></div>
                
            </div>

            {services.length > 0 && (
                <div className="carousel">
                    <button className="prev" onClick={prevSlide}>&#8592;</button>
                    <div className="slide">
                        <h2>{services[currentIndex].title}</h2>
                        <p>{services[currentIndex].text}</p>
                    </div>
                    <button className="next" onClick={nextSlide}>&#8594;</button>
                </div>
            )}
        </div>
    );
};

export default Service;
