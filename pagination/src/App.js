import { useState, useEffect } from "react";
import "./App.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const PAGE_SIZES = [10, 25, 50, 75, 100];

function App() {
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((response) => {
        setPosts(response);
      });
  }, []);

  const onPrevious = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    } else {
      setPageNumber(Math.ceil(posts.length / pageSize));
    }
  };

  const onNext = () => {
    setPageNumber((prev) => prev + 1);
  };
  const totalPages = Math.ceil(posts.length / pageSize);
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const slicedPosts = posts.slice(startIndex, endIndex);

  const pages = Array.from({ length: 10 }, (_, index) => startIndex + index);

  console.log(pages, "pagespages");
  return (
    <div className="App">
      <div>
        {slicedPosts.map((post) => {
          const { title, body } = post;
          const slicedBody = body.slice(0, 200);
          return (
            <div className="postContainer">
              <div className="title">{title}</div>
              <div className="titleBody">{slicedBody}</div>
            </div>
          );
        })}
        <div className="footer">
          <div className="popOverContainer">
            <PopOver
              pageSizes={PAGE_SIZES}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
            <span className="totalPageSize">
              {pageNumber} / {totalPages}
            </span>
          </div>
          <div className="footerPagination">
            <button onClick={onPrevious} disabled={pageNumber === 1}>
              Prev
            </button>
            {[...Array(posts.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={`${pageNumber === i + 1 ? "pagination__selected" : ""} ${"paginationPages"}`}
                  onClick={() => setPageNumber(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <button onClick={onNext} disabled={pageNumber===totalPages}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const PopOver = (props) => {
  const { pageSizes, pageSize, setPageSize } = props;
  const [show, setShow] = useState(false);

  const handleSizeClick = (e) => {
    setPageSize(+e.target.textContent);
  };
  return (
    <div onClick={() => setShow(!show)}>
      <div className="popOverBlock">
        {pageSize}
        <MdKeyboardArrowDown />
      </div>
      <div
        style={{ display: show ? "block" : "none" }}
        className="popOverBlock"
      >
        <div onClick={handleSizeClick}>
          {pageSizes.map((size) => {
            return <div className="sizeShow">{size}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
