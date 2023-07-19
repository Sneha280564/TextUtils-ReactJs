
import './App.css';
// import AboutP from './components/AboutP';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title="TextUtils"/>
<div className="container my-3">
<TextForm heading  = "Enter the text to analyze below"/>
{/* <AboutP/> */}
</div>
    </>
  );
}

export default App;
