
import AddFeature from './AddFeature';
import './App.css';
import Sum from './Sum';
import { Cards } from './views/Cards';
import { ToDOList } from './views/ToDoList';
import {Cards1} from './views/components/Cards1'
import { Table } from './views/Table';
import { Table1 } from './work/Table1';
import { useEffect, useState } from 'react';


function App() {



  

  return (
    <div>
      <header>      
       {/* <Cards/> */}
      {/* <ToDOList/> */}
      {/* <Cards1/> */}
      {/* <Table/> */}
      <Table1/>
      </header>
    </div>
  );
}

export default App;
