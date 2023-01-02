import React, { useEffect, useContext, useRef, useState } from "react";
import App from "./App";
type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

const AppContext = React.createContext<any>(null);
const Context = (props: BoxProps) => {
  const refContainer = useRef<any>(null);

  const [data, setData] = useState<any>(() => {
    const localData = localStorage.getItem("data");
    return localData ? JSON.parse(localData) : [];
  });
  const [start, setstart] = useState<number>(0);
  const [end, setEnd] = useState<number>(9);
  const [count, setCount] = useState<number>(1);
  const [detail, setDetail] = useState<any>(data[1]);

  function showNav() {
    refContainer.current.classList.toggle("active");
  }

  useEffect(() => {
    const fetchData = async () => {
      const Data = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const json = await Data.json();

      setData(json);
    };

    fetchData();
  }, [data]);
  if (data.length === 0) {
    return null;
  }
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
  const getPerson = (id: any) => {
    const user = data.find((item: any) => item.id === id);

    return user;
  };
  const handleDetail = (id: any) => {
    const user = getPerson(id);

    setDetail({ detail: user });
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
        handleDetail,
        detail,
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
