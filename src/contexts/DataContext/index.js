import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

/*
  add last data
  add data error "error on calling events"
*/

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [last, setLast] = useState(null);
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError("error on calling events"); // add error "error on calling events"
    }
  }, []);

  // add last data
  const getLastData = () => {
    try {
      setLast(
        data?.events.sort((evtA, evtB) =>
          new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
        )[0]
      );
    } catch (err) {
      setError("error on calling events");
    }
  };

  useEffect(() => {
    if (last) return;
    getData();
    getLastData();
  }, [data]);

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        error,
        last, // add last
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(DataContext);

export default DataContext;
