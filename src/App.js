
import { useEffect, useState } from 'react';
import './App.css';

function App(){
  
const [repos,setRepos]=useState([{}])
useEffect(()=>{
  async function getApi(){
  const api=await fetch('https://api.github.com/users/Shawaal-Nadeem/repos')
  const json=await api.json()
  console.log(json)  
  setRepos(json);
  }
  getApi()
},[]) 
return (
  <div>
    <ul>
      <b>
        {repos.map((repoObj, ind) => {
        return (<li key={ind}>{repoObj.name}</li>)
        

      })}
      </b>

    </ul>
  </div>
);
}


export default App;
