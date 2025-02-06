import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import brussels from './components/brussels.jpg';
import redcurry from './components/redcurry.jpg';
import alfredopasta from './components/alfredopasta.jpg';
import ramen from './components/ramen.jpeg';

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
  return (
    <div>
      <Header />
      <div className="menu">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        {menuItems.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            imageName={item.imageName}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
