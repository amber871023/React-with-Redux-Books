import useBookContext from "../hooks/useBookContext"
import BookShow from "./BookShow"

// export default function BookList({ books, onEdit, onDelete }) {
export default function BookList() {
  const { books } = useBookContext();
  const renderBooks = books.map((book) => {
    // return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    return <BookShow key={book.id} book={book} />
  })
  return <div className="book-list"> {renderBooks} </ div >

}
