import React, { useState } from 'react';

const Home = () => {
    const [message, setMessage] = useState('');

    const handleButtonClick = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        }
    };

    return (
    <div>
        <button onClick={handleButtonClick}>Get Message</button>
        {message && <div>{message}</div>}
    </div>
    );
};

export default Home;
