import "./scss/App.scss";
import List from './components/List';
import Item from './components/Item';
import {getData} from './utils/getData';
import React,{useState,useEffect} from 'react';


function App() {
    
  const infiniteHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    
    if(items.length == entireItems.length){
      return
    }
    if(scrollTop + clientHeight >= scrollHeight * 1){ 
      setItems((prevItems)=>{
        const lastItemIdx = prevItems.length-1
        const newItems = entireItems.slice(lastItemIdx+1,lastItemIdx+8);
        const updatedItems = [...prevItems,...newItems];
        return updatedItems;
      }); 
    }
  }; 

  const [items,setItems] = useState([]);
  const [entireItems,setEntireItems] = useState([]);

  useEffect(()=>{ 
    window.addEventListener('scroll',infiniteHandler);
    
    return ()=>{ // cleanUp function 
      window.removeEventListener('scroll',infiniteHandler);
    }
  },[items]);  

  useEffect(async()=> {
    const data = await getData();
    setEntireItems(data);
    setItems(data.slice(0,9));
  },[]);

  return (
    <div className="App">
      <header> Infinite Scroll</header>
      <List itemlist={items}></List>
    </div>
  );
}

export default App;