import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    } catch (error) {
      console.log("Error al leer el servicio");
    }
  };

  const handlerPreviousClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlerResetClick = () => {
    setCount(0);
  };

  const handlerNextClick = () => {
    if (count < posts.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <div className="App">
      {posts.length > 0 && (
        <Posts title={posts[count].title} description={posts[count].body} />
      )}
      <button onClick={handlerPreviousClick} disabled={count === 0}>Anterior</button>
      <button onClick={handlerResetClick} disabled={count === 0}>Reset</button>
      <button onClick={handlerNextClick} disabled={count === posts.length - 1}>Siguiente</button>
    </div>
  );
}

export default App;
