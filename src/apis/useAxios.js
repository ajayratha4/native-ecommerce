import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import useSnackbar from '../components/hooks/useSnackbar';
const baseURL = 'https://test-uimx.onrender.com';
// const baseURL = 'http://192.168.4.228:8080';

const Axios = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    Authorization:
      'Bearer ' +
      'eyJhbGciOiJIUzI1NiJ9.IjYzMzQ0Y2E4NWM3MmM4YTZlNzE3YTA1YSI.nA5HZ223Te7rUfSrRYR_wGidI18xNhqEsQ1PCyDRZRQ',
  },
});

const useAxios = (path, rest = {}) => {
  const {showAlert} = useSnackbar();
  const {params, skip, body, onCompleted} = rest;
  const check = useRef(false);

  const [response, setResponse] = useState(rest?.initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const axiosFetch = async (apiParams, apiBody, apionCompleted) => {
    // const baseURL = 'http://192.168.4.228:8080';
    try {
      check.current = true;
      setLoading(true);

      if (apiBody) {
        const res = await Axios.post(path, apiBody);
        setResponse(res?.data?.data);
        if (apionCompleted) {
          apionCompleted(res?.data);
        }
      } else {
        const res = await Axios.get(path, {
          params: apiParams,
        });
        setResponse(res?.data?.data);
        if (apionCompleted) {
          apionCompleted(res?.data);
        }
      }
    } catch (err) {
      showAlert(`${err.code} ${err.message}`);
      setError(err);
      apionCompleted(null, err.response.data);
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

  const refetch = props => {
    axiosFetch(
      props?.params || params,
      props?.body || body,
      props?.onCompleted,
    );
  };

  return {response, loading, refetch, error};
};

// refetch({ params: { id: 123 } }); //params
// refetch({body:{ id: 123 }}); //body
// const { response, loading } = useAxios<SongList[]>("/songs", [], {});

export default useAxios;
