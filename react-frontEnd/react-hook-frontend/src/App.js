import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { AddEmployeeComponent } from './components/AddEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
          <HeaderComponent/>
          <div className='container'>
            <Routes>
                <Route exact path= "/" element = {<ListEmployeeComponent/>}> </Route>
                <Route path= "/employees" element = {<ListEmployeeComponent/>}> </Route>
                <Route path= "/add-employee" element = {<AddEmployeeComponent/>}> </Route>
                <Route path= "/edit-employee/:id" element = {<AddEmployeeComponent/>}> </Route>

            </Routes>
          </div>
          <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
