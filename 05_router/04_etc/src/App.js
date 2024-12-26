import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from './layouts/Layout'
import Main from './pages/Main'
import MyPage from './pages/MyPage'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Layout/>}>
          <Route index element={<Main/>} />
          <Route path="mypage" element={<MyPage/>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
