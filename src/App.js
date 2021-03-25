import React , {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState();

  useEffect(()=>{
 
    fetch(
      "https://jobs.github.com/positions.json?search=node"
    )
    .then(res => res.json())
    .then(data => console.log(data));
   
    
  },[]);
  console.log(title);

  // const getTitle = (data) => {
  //   data.forEach((data, i) => {
  //     console.log(data.title, i);
  //   });
  // }
  
  


  return (
    <div className="app">
      <li>{title}</li>
    </div>
  );
}

export default App;
