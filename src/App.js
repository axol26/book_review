import "./App.css"
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/home/Home"
import Header from "./components/header/Header";
import Reviews from "./components/reviews/Reviews";

function App() {

  const [books, setBooks] = useState();
  const [book, setBook] = useState();
  const [reviews, setReviews] = useState();
  
  const getBooks = () => {
    api.get('books')
      .then(response => {
        setBooks(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.log("Error message: ", error);
      });
  }

  const getData = (bookId) => {
    api.get(`books/${bookId}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.log("Error message: ", error);
      });

    api.get(`reviews/${bookId}`)
      .then(response => {
        setReviews(response.data.reviews);
      })
      .catch(error => {
        console.log("Error message: ", error);
      });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home books = {books} />}></Route>
          <Route path="reviews/:bookId" element={<Reviews getData={getData} book={book} reviews={reviews} setReviews={setReviews} />}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
