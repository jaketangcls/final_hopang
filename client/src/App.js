import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './component/AddBook'; 
import FrontPage_BookList from './component/FrontPage_BookList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage_BookList />} />
        <Route path="/create-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
