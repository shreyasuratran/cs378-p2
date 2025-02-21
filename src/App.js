import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import brussels from './components/brussels.jpg';
import redcurry from './components/redcurry.jpg';
import alfredopasta from './components/alfredopasta.jpg';
import ramen from './components/ramen.jpeg';
import { useState } from 'react';
 //import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Brussel Sprouts',
    description: 'Roasted Brussels Sprouts with Fried Onions',
    imageName: brussels,
    price: 4.99,
  },
  {
    id: 2,
    title: 'Red Curry',
    description: 'Tofu with Spicy Red Curry',
    imageName: redcurry,
    price: 11.99,
  },
  {
    id: 3,
    title: 'Basil Alfredo Pasta',
    description: 'Rigatoni Pasta with Basil and Alfredo Sauce',
    imageName: alfredopasta,
    price: 10.99,
  },
  {
    id: 4,
    title: 'Veggie Ramen',
    description: 'Spinach Noodles with Vegetables and Creamy Broth',
    imageName: ramen,
    price: 4.99,
  }
];


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] ?? 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      if (!prevCart[id]) return prevCart;

      const updatedCart = {...prevCart };

      if(updatedCart[id] > 0) updatedCart[id]--;
      if (updatedCart[id] === 0) delete updatedCart[id];
      
      return updatedCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [id, quantity]) =>{
      const item = menuItems.find(item => item.id === parseInt(id));
      return total + (item.price * quantity);
    }, 0).toFixed(2);
  };

  const clearCart = () => {
    setCart({});
  };

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert("No items in cart.");
      return;
    }
    let orderSummary = "Order Summary:\n";
    menuItems.forEach(item => {
      if (cart[item.id]) {
        orderSummary += `${item.title}: ${cart[item.id]}\n`;
      }
    });
    alert(orderSummary + `\nTotal: $${getTotalPrice()}`);
  };

  return (
    <div>
      <Header />
      <div className="menu">
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            quantity={cart[item.id] ?? 0}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="cart-summary">
  <h2>Your Cart</h2>

  {Object.keys(cart).length > 0 ? (
    <>
      {menuItems.map(item => (
        cart[item.id] > 0 && (
          <div className="cart-item" key={item.id}>
            <span>{item.title} x {cart[item.id]}</span>
            <span>${(item.price * cart[item.id]).toFixed(2)}</span>
          </div>
        )
      ))}

      <h3 className="cart-total">Total: ${getTotalPrice()}</h3>

      <div className="cart-buttons">
        <button className="cart-button" onClick={clearCart}>Clear All</button>
        </div>
        </>
          ) : (
           <p className="empty-cart">Your cart is empty.</p>
          )}

          <button className="cart-button order-button" onClick={handleOrder}>Order</button>
       </div>
    </div>
  );
}

export default App;
