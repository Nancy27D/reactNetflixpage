import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './Cards'
import Sdata from './Sdata'
import {BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
  
  <>
  <h1 className="heading">List of top 5 Netflix Series</h1>
    
  {Sdata.map((val,index)=>{
    // console.log(index);
    return(
      <Cards imgsrc={Sdata[0].imgsrc} 
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}/>
    )
  })
}
  </>,
  document.getElementById('root')
);

