import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([])

  const fetchBooks = useCallback(async () => {
    const res = await axios.get('http://localhost:3001/books')
    setBooks(res.data)
  }, []); // To prevent endless requests to the API

  // const stableFetchBooks = useCallback(fetchBooks, []);

  const createBook = async (title) => {
    const res = await axios.post('http://localhost:3001/books', {
      title,
    })
    const updatedBooks = [
      ...books,
      // { id: Math.round(Math.random() * 9909), title },
      res.data
    ];
    setBooks(updatedBooks)
  }

  const editBookById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/books/${id}`,
      {
        title: newTitle
      });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        // return { ...book, title: newTitle };
        return { ...book, ...res.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  }
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks
  }

  return <BookContext.Provider value={valueToShare}> {children}</BookContext.Provider>
}
export { Provider };
export default BookContext;
