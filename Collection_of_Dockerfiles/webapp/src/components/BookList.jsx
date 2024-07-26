import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookList = ({ data }) => {
  const [kakaoBooks, setKakaoBooks] = useState([]);

  useEffect(() => {
    const fetchKakaoBooks = async () => {
      try {
        const response = await axios.get(
          "https://dapi.kakao.com/v3/search/book?target=title",
          {
            params: {
              query: "your_query_here", // Replace with your dynamic query parameter
            },
            headers: {
              Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
            },
          }
        );
        setKakaoBooks(response.data.documents);
      } catch (error) {
        console.error("Error fetching Kakao Books:", error);
      }
    };

    fetchKakaoBooks();
  }, []); // Empty dependency array to run once on component mount

  const deleteBook = async (BookId) => {
    try {
      await axios.delete(`http://localhost:5000/Books/${BookId}`);
      // Assume mutate function was previously defined for SWR
      // mutate("Books");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <Link to="/add">Add New</Link>
      <div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Book Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Book, index) => (
              <tr key={Book.id}>
                <td>{index + 1}</td>
                <td>{Book.name}</td>
                <td>{Book.price}</td>
                <td>
                  <Link to={`/edit/${Book.id}`}>Edit</Link>
                  <button onClick={() => deleteBook(Book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Display Kakao Books */}
      <div>
        <h2>Kakao Books</h2>
        <ul>
          {kakaoBooks.map((book) => (
            <li key={book.isbn}>
              <strong>{book.title}</strong> - {book.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;