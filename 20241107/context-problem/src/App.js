import Alarm from "./Components/Alarm";
import CartTotal from "./Components/CartTotal";
import Email from "./Components/Email";
import UpdateButton from "./Components/UpdateButton";
import { AlarmProvider } from "./Context/AlarmContext";
import { CartProvider } from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <CartProvider>
        <CartTotal />
        <UpdateButton />
      </CartProvider>
      <AlarmProvider>
        <Alarm />
      </AlarmProvider>
      <UserProvider>
        <Email />
      </UserProvider>
    </>
  );
}
export default App;
