import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import TransactionNewForm from './Components/TransactionNewForm';
import TransactionReceipt from './Pages/TransactionReceipt';

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Nav />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/receipt" element={<TransactionReceipt />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
