
import './App.css';
import CardCenter from './components/container/CardCenter';

import SortArea from './components/container/SortArea';
import NavbarComp from './components/Navbar/NavbarComp';

import StudentForm from './components/Students/StudentForm';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <StudentForm />
      <SortArea/>
      <CardCenter />
   
    </div>
  );
}

export default App;
