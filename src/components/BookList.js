
import { useContext } from "react"
import BookShow from "./BookShow"
import BookContext from "../context/books"
// export default function BookList({ books, onEdit, onDelete }) {
export default function BookList() {
  const { books } = useContext(BookContext)
  const renderBooks = books.map((book) => {
    // return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    return <BookShow key={book.id} book={book} />
  })
  return <div className="book-list"> {renderBooks} </ div >

}
