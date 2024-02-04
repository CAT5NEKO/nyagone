import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        fetch('/.netlify/functions/status')
            .then((response) => {
                if (!response.ok) {
                    console.error('Failed to fetch status:', response.status);
                }
            });
    }, []);

    return (
        <div>
            <h1>GONE!</h1>
        </div>
    );
};

export default Home;
