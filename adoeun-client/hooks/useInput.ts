import { useCallback, useState, Dispatch, SetStateAction } from "react";

type Handler = (e: any) => void;
type ReturnTypes<T = any> = [T, Handler, Dispatch<SetStateAction<T>>];


const useInput = (initialValue: string): ReturnTypes<string> => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },[]);
    return [value, handler, setValue];
  };

  export default useInput;