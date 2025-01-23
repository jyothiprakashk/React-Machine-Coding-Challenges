import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const InfiniteRefObserver = useRef(null);

  const FetchData = async (limitItems) => {
    setLoading(true);
    const postData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${limitItems}&_limit=${10}`
    );
    const response = await postData.json();
    setLoading(false);
    setPosts([...posts, ...response]);
  };

  useEffect(() => {
    FetchData(page);
  }, [page]);

  const InfiniteDomFunction = useCallback(
    (node) => {
      if (isLoading) return;
      if (InfiniteRefObserver.current) InfiniteRefObserver.current.disconnect();
      InfiniteRefObserver.current = new IntersectionObserver((entry) => {
        if (entry[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) InfiniteRefObserver.current.observe(node);
    },
    [isLoading]
  );
  return (
    <div className="App">
      {posts.map((post, index) => {
        return (
          <div
            ref={posts.length === index + 1 ? InfiniteDomFunction : null}
            style={{ border: "1px solid grey", padding: "6px" }}
            key={index}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
