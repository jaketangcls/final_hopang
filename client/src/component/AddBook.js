import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [pages, setPages] = useState(""); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!title.trim() || !author.trim() || !description.trim()) {
            alert("Title, author, and description cannot be empty.");
            return;
        }

        const newBook = { title, author, description, pages: parseInt(pages, 10) };

        fetch("http://localhost:5001/api/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Book added:", data);
            navigate('/'); 
        })
        .catch(error => {
            console.error("Error adding book:", error);
        });
    };

    return (
        <div className="CreateBook">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <br /><a className="btn btn-info float-left" href="/">Show Book List</a>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Add Book</h1>
                        <p className="lead text-center">Create new book</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Title of the Book"
                                    name="title"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Author"
                                    name="author"
                                    className="form-control"
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Describe this book"
                                    name="description"
                                    className="form-control"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Number of Pages"
                                    name="pages"
                                    className="form-control"
                                    value={pages}
                                    onChange={(e) => setPages(e.target.value)}
                                />
                            </div>
                            <input type="submit" className="btn btn-info btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBook;
