import { useState, useEffect } from 'react';
import { useListingContext } from '../contexts/ListingContext';
import axios from '../services/instance';

const useFetchParams = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [statusCode, setStatusCode] = useState(null);
  const { page, limit } = useListingContext();

  useEffect(() => {
    axios.get(url, {
      limit: limit - 5,
      page,
    }).then((response) => {
      console.log('el data yabbbbbbb', response);
      console.log('ana geeeet', page, limit);
      setData((data) => {
        if (!data) { return response.data; }
        const tempData = {
          ...data,
        };
        tempData.data = [...tempData.data, ...response.data.data];
        return tempData;
      });
      // console.log(response.data);
      setStatusCode(response.status);
      // console.log(response.data);
      setError(null);
    }).catch((error) => {
      setError(error);
      setStatusCode(error.response.status);
      console.log(error);
    });
  }, [url, page, limit]);

  return [data, error, statusCode];
};
export default useFetchParams;
