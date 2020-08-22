import React, {useState} from 'react';
import products from './Product';


function App() {
  return (
    <div>
     <header className="header">
    <h1>Bashir <sapn className="span">e</sapn>-buy</h1>
      
  
     </header>
   
     {products.map(Products)}
     
    </div>
  );
}
function Products(props){
  return(
  <Card 
       id={props.id}
       key={props.id}
       name={props.name}
       imgUrl={props.imgURL}
       details={props.details}
       price={props.Price}
       
     />
 
  )
}

// function CartCount(props){
//    const [count, setCount] = useState(0);
//    const handleClick =() => setCount(count + 1);
//   return(
//     <div className='Count-div'>
//     <h3>Cart:</h3>
   
//  </div>
//   )
// }

function Card(props){


  const [count, setCount] = useState(0);
  const handleClick =() => setCount(count + 1);

  return(
    <div className='main-body'>
   
    <div className='card-body'>
    <div className='img'>
          <img className='image' src={props.imgUrl} />
        </div>
        <h2>{props.name}</h2>
        <p>{props.details}</p>
        <h3>{props.price}</h3>
        <div className='Count-div'><h3>Cart: {count}</h3>  console.log({count})</div>
      
        <button onClick={handleClick}>Cart</button>
        
        
       
      
    </div>

    </div>
  )
}

export default App;
