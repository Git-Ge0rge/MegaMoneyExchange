import NavBar from '../../components/NavBar/NavBar';
import {Route, Routes} from "react-router-dom";
import AdminHome from '../AdminHome/AdminHome';
import ReportsAdmin from '../ReportsAdmin/ReportsAdmin';
import ContactsAdmin from '../ContactsAdmin/ContactsAdmin';
import ViewCustomerAdmin from '../ViewCustomerAdmin/ViewCustomerAdmin';
import AddCustomerAdmin from '../AddCustomerAdmin/AddCustomerAdmin';
import SendMoneyAdmin from '../SendMoneyAdmin/SendMoneyAdmin';
import ViewOrdersAdmin from '../ViewOrdersAdmin/ViewOrdersAdmin';
import OfferRateAdmin from '../OfferRateAdmin/OfferRateAdmin';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<AdminHome/>}/>
        <Route path="reports" element={<ReportsAdmin/>}/>
        <Route path="contacts" element={<ContactsAdmin/>}/>
        <Route path="view-customer/:id" element={<ViewCustomerAdmin/>}/>
        <Route path="add-customer" element={<AddCustomerAdmin/>}/>
        <Route path="send-money" element={<SendMoneyAdmin/>}/>
        <Route path="view-orders" element={<ViewOrdersAdmin/>}/>
        <Route path="offer-rate" element={<OfferRateAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;
