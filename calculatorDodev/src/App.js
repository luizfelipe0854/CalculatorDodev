import { useState } from 'react';
import './App.css';

function App() {
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState(0)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  

  function calculo(){
    if(operacao === 1){
      if(num1+num2){
        setResultado(num1 + num2)
      }else{
        setResultado(0)
      }
    }else if(operacao === 2){
      if(num1-num2){
        setResultado(num1 - num2)
      }else{
        setResultado(0)
      }
    }else if(operacao === 3){
      if(num1*num2){
        setResultado(num1 * num2)
      }else{
        setResultado(0)
      }
    }else if(operacao === 4){
      if(num1/num2){
        setResultado(num1 / num2)
      }else{
        setResultado(0)
      }
    }
  }

  function limpar(){
    setResultado(0);
    setNum1("");
    setNum2("");
  }


  return (
    <div className="App">
      <div className="calculator-content">
        <section className='section-1'>
          <h1>Calculator DoDev</h1>
          <div className='result-content'><span className='result'>{resultado}</span></div>
        </section>
        <section className='inputs'>
          <div className='input-content'>
          <h5>Número 1</h5>
          <input type='number' className='numero1' value={num1} onChange={e => setNum1(Number(e.target.value))}/>
          </div>
          <div className='input-content'>
          <h5>Número 2</h5>
          <input type='number'className='numero2'value={num2}  onChange={e => setNum2(Number(e.target.value))}/>
          </div>
        </section>
        <section className='buttons'>
          <button className='button' onClick={() => {setOperacao(1); calculo()}}>+</button>
          <button className='button' onClick={() => {setOperacao(2); calculo()}}>-</button>
          <button className='button' onClick={() => {setOperacao(3); calculo()}}>x</button>
          <button className='button' onClick={() => {setOperacao(4); calculo()}}>/</button>
        </section>
        <section className='clear-content'>
          <button className='btn-clear' onClick={limpar}>Limpar</button>
        </section>
      </div>
    </div>
  );
}

export default App;
