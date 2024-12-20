import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import LoginScreen from './screens/LoginScreen';
import store from '../src/store';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, 
         createRoutesFromElements,
         Route,
         RouterProvider } from 'react-router-dom';
import FavoriteScreen from './screens/FavoriteScreen';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path="/" element={<HomeScreen/>}/>
       <Route path="/recipe/:id" element={<RecipeScreen/>}/>
       <Route path="/home" element={<HomeScreen/>}/>
       <Route path="/favorites" element={<FavoriteScreen/>}/>
       <Route path="/login" element={<LoginScreen/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/> 
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
