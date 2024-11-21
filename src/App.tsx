import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';

class MyClass implements Logable {
  toString(): string {
      return "Это строка";
  }
}

const variable = new MyClass();
console.log(variable.toString()); 

// type Nullable<T> = T | null;

// let a: Nullable<number> = null;
// console.log(a); 


function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Стили</h1>;
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Routes>
    </div>
  );
}

export default App;