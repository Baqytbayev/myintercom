import GetUsers from './components/getUsers/getUsers';
import GetPosts from './components/getPosts/getPosts';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={'/users'} element={<GetUsers />}></Route>
        <Route path={'/users/posts/:id'} element={<GetPosts />}></Route>
      </Routes>
      {/* <GetUsers/>
      <GetPosts/> */}
    </div>
  );
}

export default App;
