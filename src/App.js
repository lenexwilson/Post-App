import logo from './logo.svg';
import './App.css';
import AddPost from './components/AddPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import ViewPost from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddPost/>}/>
        <Route path='/SearchPost' element={<SearchPost/>}/>
        <Route path='/DeletePost' element={<DeletePost/>}/>
        <Route path='/ViewPost' element={<ViewPost/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
