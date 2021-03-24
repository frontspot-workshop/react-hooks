import { useEffect, useReducer } from "react";

const REQUEST_STARTED = "REQUEST_STARTED";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILED = "REQUEST_FAILED";

const dataFetchReducer = (state, { type, payload }) => {
  switch (type) {
    case REQUEST_STARTED:
      return { ...state, isLoading: true, isError: false };
    case REQUEST_SUCCESS:
      return { ...state, isLoading: false, data: payload.results, info: payload.info };
    case REQUEST_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export const useApi = ({ url }) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: [],
    info: {},
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    const abortController = new AbortController();
    dispatch({ type: REQUEST_STARTED });
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();

        dispatch({ type: REQUEST_SUCCESS, payload: data });
      } catch (error) {
        if (!abortController.signal) {
          dispatch({ type: REQUEST_FAILED });
        }
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [state];
};
