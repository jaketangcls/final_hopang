import React from "react";

function BookCard(props) {
  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2>
            {/* Redirecting to api for now */}
          <a href={"/api/" + props.book._id}>{props.book.title}</a>
        </h2>
        <h3>{props.book.author}</h3>
        <p>
            {props.book.description}     
            <input type="button"  value="X"  className="del-button float-right"  onClick={()=> props.deleteBook()}/></p>
      </div>
    </div>
  );
}

export default BookCard;
