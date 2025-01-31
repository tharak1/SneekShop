import { BrowserRouter, Route ,Routes,useLocation} from 'react-router-dom';
import React, { useEffect } from 'react';
// import Example from './Example';
import LandingPage from './screens/LandingPage';
import ShoppingPage from './screens/ShoppingPage';
import CategoryPage from './screens/CategoryPage';
// import CartPage from './screens/CartPage';
import WishlistPage from './screens/WishlistPage';
import ProfilePage from './screens/ProfilePage';
import Ordersum5 from './components/OrderSummary';
import PrevOrdersPage from './screens/PrevOrdersPage';
import IndividualProductPage from './screens/IndividualProductPage';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import Dashboard from './screens/admin/dashboard/Dashboard';
import AddProduct from './screens/admin/page/AddProduct';
import UpdateProduct from './screens/admin/page/UpdateProduct';
import Cart from './screens/CartPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSidePanel from './screens/adminPanel/AdminSidePanel';
import AdminDashboard from './screens/adminPanel/AdminDashboard';
import AdminOrders from './screens/adminPanel/AdminOrders';
import AdminProducts from './screens/adminPanel/AdminProducts';
import AdminCustomers from './screens/adminPanel/AdminCustomers';
import AdminSettings from './screens/adminPanel/AdminSettings';
import AdminEmployeeManagement from './screens/adminPanel/AdminEmployeeManagement';
import AdminReports from './screens/adminPanel/AdminReports';
import OrderConfirmationPage from './screens/OrderConfirmationPage';

// import { AdminPanelSettings } from '@mui/icons-material';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
          <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path = "/" element = {<LandingPage/>}/>
            <Route path = "/shop" element = {<ShoppingPage/>}/>
            <Route path = "/category" element = {<CategoryPage/>}/>
            <Route path = "/cart" element = {<Cart/>}/>
            <Route path = "/wishlist" element = {<WishlistPage/>}/>
            <Route path = "/profile" element = {<ProfilePage/>}/>
            <Route path = "/summaries" element = {<Ordersum5/>}/>
            <Route path = "/prevorders" element = {<PrevOrdersPage/>}/>
            <Route path='/productPage/:id' element = {<IndividualProductPage/>}/>
            <Route path = "/login" element = {<LoginPage/>}/>
            <Route path = "/signup" element = {<SignUpPage/>}/>
            {/* <Route path = "/admin" element = {<Dashboard/>}/> */}
            <Route path = "/addproduct" element = {<AddProduct/>}/>
            {/* <Route path="/updateproduct/:productId" element={<UpdateProduct />} /> */}
            <Route path="/updateproduct" element={<UpdateProduct />} />
            <Route path='/orderconfirm' element={<OrderConfirmationPage/>}/>
            <Route path='/admin' element = {<AdminSidePanel/>} >
              
              <Route path = "/admin/dashboard" element = {<AdminDashboard/>}/>
              <Route path = "/admin/orders" element = {<AdminOrders/>}/>
              <Route path = "/admin/products" element = {<AdminProducts/>}/>
              <Route path = "/admin/customers" element = {<AdminCustomers/>}/>
              <Route path = "/admin/settings" element = {<AdminSettings/>}/>
              <Route path = "/admin/employeemanagement" element = {<AdminEmployeeManagement/>}/>
              <Route path = "/admin/reports" element = {<AdminReports/>}/>
            </Route>
          </Routes> 
          <ToastContainer/>

        </BrowserRouter>
    </div>
    // <Example />
  );
}

export default App;
