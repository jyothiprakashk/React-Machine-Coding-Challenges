import "./App.css";
import { HeartIcon, SpinnerIcon } from "./icons";
import { useState } from "react";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const handleLikeUnlike = () => {
    setLoading(true);
    fetch("https://www.greatfrontend.com/api/questions/like-button", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: isLiked ? "unlike" : "like",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        console.log(response);
        setLiked(!isLiked);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "error while updating");
      });
  };

  return (
    <div className="App">
      <button
        onClick={handleLikeUnlike}
        className={`${isLiked ? "liked" : "unliked"}`}
      >
        {isLoading ? <SpinnerIcon /> : <HeartIcon />}
        {isLiked ? "Like" : "UnLike"}
      </button>
    </div>
  );
}

export default App;
