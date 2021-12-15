import {useCallback, useEffect, useState} from 'react';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';

export const useQueryString = <T extends Record<string, string | string[]>>(initialValue: T): [T, (value: T) => void] => {
  const location = useLocation();
  const navigate = useNavigate();

  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    setValue({...initialValue, ...Object.fromEntries(
          new URLSearchParams(location.search)
      )})
  }, [location.search])

  const onSetValue = useCallback(
    (newValue: T) => {
      if (newValue !== value) {
        navigate({
          hash: location.hash,
          search: `?${createSearchParams(newValue)}`,
        });
      }
    },
    [value, location.hash, navigate],
  );

  return [value, onSetValue];
};
