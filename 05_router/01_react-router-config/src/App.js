import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  
  /*
    기본 세팅
    0. npx create-react-app ./
    1. src 폴더에 App.js랑 index.js 빼고 나머지 파일은 지운다.
    2. App.js 및 index.js 에서 필요한 코드를 빼고 지운다.
    3. npm install react-router-dom@6으로 라우터 라이브러리를 추가한다.

    BrouserRouter: 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
    Routes: Route들을 묶어주는 단위(컴포넌트)
    Route: url 요청 주소와 컴포넌트를 매핑해 주는 단위(컴포넌트)
  */
    
  return (
    <>
      <BrowserRouter>
      <a href="/">test | </a>
      <a href="/about">test | </a>
      <a href="/menu">test</a>

        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
