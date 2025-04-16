import logo from './logo.svg';
import './App.css';
import { BooksProvider } from "./BooksContext";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import SecretBooks from "./components/SecretBooks";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <BooksProvider>
      <Router>
        <Routes>
            <Route path="/" element={<Books></Books>}></Route>
            <Route path="/books" element={<Navigate to="/"/>}></Route>
            <Route path="/books/:bookId" element={<BookDetails></BookDetails>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            <Route path="/secret" element={<PrivateRoute Component={<SecretBooks/>}></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </BooksProvider>
  );
}

export default App;
