import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/Shared/Header/SignIn/SignIn';
import Resister from './Pages/Shared/Header/Resister/Resister';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Shared/Header/SignIn/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/Services/ServiceDetails';
import AddServices from './Pages/AddServices/AddServices';
import ManageAllOrder from './ManageAllOrders/ManageAllOrder';
import CartAdded from './CartAdded/CartAdded';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/service/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
        
            <PrivateRoute path="/addservice">
              <AddServices></AddServices>
            </PrivateRoute>
            
            <Route path="/allorder">
              <ManageAllOrder></ManageAllOrder>
            </Route>

            <Route path="/cartadded">
              <CartAdded></CartAdded>
            </Route>
           

            <Route path="/signin">
              <SignIn></SignIn>
            </Route>

            <Route path="/resister">
              <Resister></Resister>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
