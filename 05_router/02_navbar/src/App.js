import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout';
import MyPage from './pages/MyPage'
import Login from './pages/Login'
import Main from './pages/Main'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>} />
          <Route path='mypage' element={<MyPage/>} />
          <Route path='login' element={<Login/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
