import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import ProductList from './component/ProductList';  // Adjust this path
import Cart from './component/Cart';  // Adjust this path
import './App.css';

function App2() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList />
   
        <Cart/>
        
      </div>
    </Provider>
  );
}

export default App2;