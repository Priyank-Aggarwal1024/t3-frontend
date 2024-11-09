import { useEffect, useState } from 'react';
import axios from 'axios';

const useCollections = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get('/api/collections');
        setCollections(response.data.collections);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return { collections, isLoading, error };
};

export default useCollections;
