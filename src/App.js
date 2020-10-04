import React, { useState } from 'react';
import Accordion from "./Accordion"
import './App.css';
import Dropdown from './Dropdown';
import Header from './Header';
import Route from './Route';
import Search from './Search';
import Translate from './Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options=[
  {
    label: 'The Color Red',
    value: 'Red'
  },

  {
    label: 'The Color Blue',
    value: 'Blue'
  },
  {
    label: 'The Color Green',
    value: 'Green'
  }
]






function App() {

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;




  
//   const[showDropdown, setShowDropdown]=useState(true);
 
//   return (
//     <div className="App">
//     {/* <Accordion items={items}/> */}
//     {/* <Search/> */}
// <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>

// {showDropdown ?
//  <Dropdown selected={selected} onSelectedChange={setSelected} options={options}/>:null
// }
//     </div>
//   );
// }