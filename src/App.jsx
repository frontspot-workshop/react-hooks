import { NavBar, CardWrapper, Pagination, BackToTop } from "./components";
import { createContext, useRef, useState } from "react";
import { DEFAULT_URL, RESOURCE_TYPE } from "./shared/constants";
import { useApi } from "./hooks";
import "./App.css";

export const dataContext = createContext([]);
export const resourceTypeContext = createContext(RESOURCE_TYPE.CHARACTER);

function App() {
  const [resourceType, setResourceType] = useState(RESOURCE_TYPE.CHARACTER);
  const [url, setUrl] = useState(DEFAULT_URL);
  const [{ data, info, isLoading, isError }] = useApi({ url });
  const ref = useRef(null);

  const handleClick = (newResourceType) => {
    setResourceType(newResourceType);
    setUrl(`https://rickandmortyapi.com/api/${newResourceType}`);
  };

  const scrollToTop = () =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });

  return (
    <main>
      <div ref={ref} />
      <resourceTypeContext.Provider value={resourceType}>
        <NavBar handleClick={handleClick} />
        <div className="title">
          <h1>Rick and Morty Universe</h1>
          <h2>{resourceType}</h2>
        </div>
        <Pagination info={info} disabled={isLoading} handleClick={setUrl} />
        {isError && <div className="error">Something went wrong...</div>}
        {isLoading ? (
          <div className="loader" />
        ) : (
          <dataContext.Provider value={data}>
            <CardWrapper />
          </dataContext.Provider>
        )}
      </resourceTypeContext.Provider>
      <BackToTop handleClick={scrollToTop} />
    </main>
  );
}

export default App;
