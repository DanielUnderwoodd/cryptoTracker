import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import Body from "./components/Body/Body";
import ErrorBoundary from "./components/Error/ErrorHandler";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Body />
      </ErrorBoundary>
    </div>
  );
}

export default App;
