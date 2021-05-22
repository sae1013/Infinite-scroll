import "./scss/App.scss";
import List from './components/List';
import Item from './components/Item';

import React,{useState,useEffect} from 'react';

const createDummy = () => {
  let arr = []
  for(let i = 0; i<16; i++){
    arr.push({id:i});
  }
  return arr;
}
function App() {

  const infiniteHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight * 1){
       
       
       if(items.length > 120){
         console.log('fetch종료'); 
         return
       }
       setItems((prevItems)=>{
        const lastId = prevItems[prevItems.length-1].id;
        let newItems = [...prevItems]
        for(let i = 1;i<11;i++){ 
          newItems.push({id:lastId+i}); 
        }
        return newItems
       }); 
    }
  }; 

  const [items,setItems] = useState(createDummy);

  useEffect(()=>{ 
    window.addEventListener('scroll',infiniteHandler);
    
    return ()=>{ // cleanUp function 
      window.removeEventListener('scroll',infiniteHandler);
    }
  });  

  return (
    <div className="App">
      <header> Infinite Scroll</header>
      <List itemlist={items}></List>
    </div>
  );
}

export default App;