import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    fetch('/.netlify/functions/status')
        .then((response) => {
          if (!response.ok) {
            router.push('/error');
          }
        });
  }, []);

  return (
      <div>
        <h1>THIS SITE IS GONE!</h1>
      </div>
  );
};

export default Home;
