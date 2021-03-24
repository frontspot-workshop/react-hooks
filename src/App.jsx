import { NavBar, CardWrapper, Pagination } from "./components";
import "./App.css";
import { useState } from "react";
import { DEFAULT_URL, RESOURCE_TYPE } from "./shared/constants";
import {useApi} from './hooks';

function App() {
  const [resourceType, setResourceType] = useState(RESOURCE_TYPE.CHARACTER);
  const [url, setUrl] = useState(DEFAULT_URL);
  const [{data, info,isLoading, isError}] = useApi({url});

  const handleClick = (newResourceType) => {
    setResourceType(newResourceType);
    setUrl(`https://rickandmortyapi.com/api/${newResourceType}`);
  };

  return (
    <main>
      <NavBar handleClick={handleClick} selectedType={resourceType} />
      <div className="title">
        <h1>Rick and Morty Universe</h1>
      </div>
      <Pagination info={info} disabled={isLoading} handleClick={setUrl} />
      {isError && <div className="error">Something went wrong...</div>}
      {isLoading ? (
        <div className="loader" />
      ) : (
        <CardWrapper data={data} selectedType={resourceType} />
      )}
    </main>
  );
}

export default App;
