import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { server } from "./redux/store";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";

import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

import MyOrders from "./components/myorders/MyOrders";
import OrderDetails from "./components/myorders/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";

import NotFound from "./components/layout/NotFound";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/PaymentSuccess.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

function App() {
  
  const dispatch = useDispatch();
  const { error, message, isAuthenticated} = useSelector(
     (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

   const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  // fetch news everytime the category changes
  useEffect(() => {
    async function fetchNews() {
      try {
        const url = `${server}/me`;
        const response = await axios.get(url);
        console.log(response);
        setNews(response.data);
      } catch (errorWhileFetchingNews) {
        console.log("error while fetching news", errorWhileFetchingNews);
      }
    }

    fetchNews();
  }, [category]);

   useEffect(() => {
     if (error) {
       toast.error(error);
       dispatch({
         type: "clearError",
       });
     }
     if(message){
      toast.success(message)
      dispatch({
        type:"clearMessage"
      })
     }
   }, [dispatch, error,message]);
  

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />

        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/orders" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <Toaster />
    </Router>
  );
}

export default App;
