import {Axios} from './index';
import {useEffect, useRef, useState} from 'react';

const useAxios = (path, rest = {}) => {
  const {params, skip, body, onCompleted} = rest;
  const check = useRef(false);

  const [response, setResponse] = useState(rest?.initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosFetch = async (apiParams, apiBody, apionCompleted) => {
    try {
      check.current = true;
      setLoading(true);

      if (apiBody) {
        const res = await Axios.post(path, apiBody);
        setResponse(res?.data);
        if (apionCompleted) {
          apionCompleted(res?.data);
        }
      } else {
        const res = await Axios.get(path, {
          params: apiParams,
        });
        setResponse(res?.data);
        if (apionCompleted) {
          apionCompleted(res?.data);
        }
      }
    } catch (err) {
      setError(err);
      apionCompleted(null, err);
    } finally {
      check.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    if (path && !check.current && !skip) {
      axiosFetch(params, body, onCompleted);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  const refetch = ({params, body, onCompleted}) => {
    axiosFetch(params, body, onCompleted);
  };

  return {response, loading, refetch, error};
};

// refetch({ params: { id: 123 } }); //params
// refetch({body:{ id: 123 }}); //body
// const { response, loading } = useAxios<SongList[]>("/songs", [], {});

export default useAxios;
