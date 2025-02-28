import { useState } from 'react';
import BookEdit from './BookEdit';
import useBookContext from "../hooks/useBookContext"

// export default function BookShow({ book, onDelete, onEdit }) {
export default function BookShow({ book }) {
  const [isEdit, setIsEdit] = useState(false)
  const { deleteBookById } = useBookContext();

  const handleDelete = () => {
    deleteBookById(book.id);
  }
  const handleEdit = () => {
    setIsEdit(!isEdit)
  }
  const handleSubmit = () => {
    setIsEdit(false);
  }

  let content = <h3>{book.title} </h3>;
  if (isEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }
  return <div className="book-show">
    <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
    <div>{content}</div>
    <div className="actions">
      <button className='edit' onClick={handleEdit} >Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  </div>
}
