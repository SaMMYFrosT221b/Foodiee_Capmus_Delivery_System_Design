import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import LiveOrders from "./pages/live-orders/LiveOrders";
import Orders from "./pages/orders/Orders";
import Profile from "./pages/profile/Profile";
import New from "./pages/new/New";
import Items from "./pages/items/Items";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="live-orders">
              <Route index element={<LiveOrders />} />
            </Route>
            <Route path="orders">
              <Route index element={<Orders />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="items">
              <Route index element={<Items />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
