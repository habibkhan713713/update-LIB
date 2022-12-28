const [counter, setCounter] = useState(0); // A counter used for the card carousel

let books = [
  {
    id: 1,
    name: "Pride and Prejudice",
    author: "XYZ",
    dueDate: "2022-12-12",
  },
  {
    id: 2,
    name: "Meditations",
    author: "Penguin Classic",
    dueDate: "2022-12-12",
  },
  {
    id: 3,
    name: "The fault in our stars",
    author: "ABC",
    dueDate: "2022-12-12",
  },
  {
    id: 4,
    name: "The fault in our stars v2",
    author: "ABC v2",
    dueDate: "2022-12-12",
  },
  {
    id: 5,
    name: "asdasdasda",
    author: "ABC v2",
    dueDate: "2022-12-12",
  },
  {
    id: 6,
    name: "sadajdoiqwueroiqwp",
    author: "ABC v2",
    dueDate: "2022-12-12",
  },
];

let currentBooks = () => {
  return books.slice(counter, counter + 3);
};

<div className="section">
  <button
    className="btn btn-primary btn-lg mx-3 carousel-btn"
    onClick={() => setCounter(counter + 1)}
  >
    +
  </button>
  <div className="row">
    {currentBooks().map((book) => {
      return (
        <div className="col-sm-12 col-lg-4">
          <div className="card h-100 m-auto" style={{ width: "300px" }}>
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
              alt="Card image cap"
              className="card-img-top"
            />
            <div className="card-body">
              <h4 className="card-title">{book.name}</h4>
              <p className="card-text">{book.author}</p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  <button
    className="btn btn-primary btn-lg mx-3 carousel-btn te  "
    onClick={() => setCounter(counter - 1)}
  >
    -
  </button>
</div>;
