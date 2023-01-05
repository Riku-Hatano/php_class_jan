import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Assignment from './components/Assignment';
// import Move from './components/Move'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home></Home>
  <Assignment></Assignment>
  {/* <Move></Move> */}
  </>
);