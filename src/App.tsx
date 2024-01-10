import GetUsers from './components/getUsers/getUsers';
import GetPosts from './components/getPosts/getPosts';
import { Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/registrationForm/registrationForm';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RegistrationForm/>}></Route>
        <Route path={'/users'} element={<GetUsers />}></Route>
        <Route path={'/users/posts/:id'} element={<GetPosts />}></Route>
        <Route path='*' element={<h1>Нет такой страницы</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
