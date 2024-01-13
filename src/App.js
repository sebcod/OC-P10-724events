/* istanbul ignore file */
import "./App.scss";
import Home from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
