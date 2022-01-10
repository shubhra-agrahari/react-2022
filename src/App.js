import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TimeTicker from './TimeTicker';

function App() {

  let elements = [];
  for(let i=0; i<10 ; i++){
    elements.push(<div>{i}</div>);
  }
  let [countFirst, setCountFirst ] = useState(0);
  let [countSecond, setCountSecond ] = useState(0);

  //changing title
  document.title = "clicked " +(countSecond +countFirst) + " times";

  const firstButtonAction = () =>{
    setCountFirst (countFirst+1);

  }
  function secondButtonAction() {
    setCountSecond( countSecond+1);

  }
    return (
    <div className="App" >
     {/* <div>{elements}</div> */}
    
     <Button onClick={firstButtonAction}>FirstButton  {countFirst}</Button>
     <Button onClick={secondButtonAction}>SecondButton  {countSecond}</Button>
    <Welcome name = "Shubhra"></Welcome>
    <TimeTicker></TimeTicker>
    </div>
  );
}

export default App;


function Welcome(props){

  return <h1>Hello, {props.name}</h1>
 }

function Button({children, onClick}) {

 return <button onClick={onClick}>{children}</button>
  
}


