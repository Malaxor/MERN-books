//===============================================================================
import React from "react";
import {Link} from "react-router-dom";
import "./List.css";


export const List = ({books, deleteBook}) => {

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
      	{books.map(book => (

      		<li className="list-group-item">
      			<Link to={"/books/" + book._id}>
                <strong>
                  {book.title} by {book.author}
                </strong>
              </Link>
                <button 
                className="delete-button btn btn-primary" 
                onClick={() => deleteBook(book._id) }
              > Delete
              </button>
          </li>    
      	))}
      </ul>
    </div>
  );
};
