import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

import Navbar from './components/Navbar';
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
   <Navbar/>
   <AddEmployee/>
   <EmployeeList/>
   <UpdateEmployee/>
   </div>
  );
}

export default App;
