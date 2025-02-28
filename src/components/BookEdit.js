import { useState, useContext } from 'react';
import BookContext from '../context/books';

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BookContext);
  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  }

  return <form className="book-edit" onSubmit={handleSubmit}>
    <label htmlFor="">Title</label>
    <input type="text" className="input" value={title} onChange={handleChange} />
    <button className="button is-primary">Save</button>
  </form>

}
