import logo from './logo.svg';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import FAQ from './component/FAQ'
const Board =(props)=> {
  const{products}=props
  return (
    <h3 className='board'>今日特價{products}</h3>
  )
}
const CatCafe = () => {
  return (
    <>
      <h1>傲嬌貓餐廳</h1>
      <Board products="Sushi"/>
    </>
  )
}
const DogCafe = () => {
  return (
    <>
      <h1>溫馨狗餐廳</h1>
      <Board products="狗糧"/>
    </>
  )
}
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <ul>
          
        </ul>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function NotFound() {
  return (
    <>
      <main>
        <h2>你的網址出錯囉～</h2>
      </main>
      <nav>
        <Link to="/">回到首頁</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <CatCafe />
      <DogCafe/> */}
    </div>
  );
}

export default App;
