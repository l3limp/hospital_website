import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import Locate from './Locate';
import Landing from './Landing';
import About from './About';

import reportWebVitals from './reportWebVitals';

import { extendTheme } from '@chakra-ui/react'

import { ChakraProvider } from '@chakra-ui/react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme = {theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<App />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/landing" element = {<Landing />}/>
        <Route path="/locate" element = {<Locate />}/>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
  // <React.StrictMode>
  //   <Meow />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
