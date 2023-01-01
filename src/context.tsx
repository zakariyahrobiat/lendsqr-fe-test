import React, { useEffect, useContext, useRef, useState } from "react";
import App from "./App";
type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const AppContext = React.createContext<any>(null);
const Context = (props: BoxProps) => {
  const refContainer = useRef<any>(null);
  const [data, setData] = useState<any>([]);
  const [start, setstart] = useState<number>(0);
  const [end, setEnd] = useState<number>(9);
  const [count, setCount] = useState<number>(1);
  function showNav() {
    refContainer.current.classList.toggle("active");
  }
  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [data]);
  if (data.length === 0) {
    return null;
  }

  const increase = () => {
    if (end < data.length - 1) {
      setstart(start + 9);
      setEnd(end + 9);
      setCount(count + 1);
    } else {
      setEnd(end);
    }
  };
  const decrease = () => {
    if (start > 0) {
      setstart(start - 9);
      setEnd(end - 9);
      setCount(count - 1);
    } else {
      setstart(start);
    }
  };

  return (
    <AppContext.Provider
      value={{
        refContainer,
        showNav,
        data,
        setData,
        start,
        end,
        count,
        increase,
        decrease,
      }}
    >
      {/* <App /> */}
      {props.children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

export { Context, AppContext };
