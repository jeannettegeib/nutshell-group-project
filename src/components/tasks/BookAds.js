import { useState, useEffect } from "react";
import "./tasks.css";

export const BookAds = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=stranger+things")
      .then((response) => response.json())
      .then((bookData) => {
        setBooks(bookData.items);
      });
  }, []);

  const randomBook = books[Math.floor(Math.random() * books.length)];
  console.log(randomBook);

  return (
    <>
      <div className="bookAd">
        <img
          src={randomBook?.volumeInfo?.imageLinks?.thumbnail}
          alt="Book Cover"
        />
      </div>
    </>
  );
};
