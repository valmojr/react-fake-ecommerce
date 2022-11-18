import ShoppingList from './componentes/ShoppingList';
import ShoppingCart from './componentes/Cart/ShoppingCart';
import React from 'react';
import { UserProvider } from './Providers/UserProvider';
import { AppHeader, MainApp } from './App.style';

function App() {
  return (
    <MainApp>
      <AppHeader>
        <UserProvider>
          <ShoppingList/>
          <ShoppingCart/>
        </UserProvider>
      </AppHeader>
    </MainApp>
  );
}

export default App;
