import {useState, useEffect} from 'react'
import axios from 'axios'
import img from './cryptomonedas.png'
import styled from '@emotion/styled';
import Form from './Components/Form';
import Cotizacion from './Components/Cotizacion';
import Spiner from './Components/Spiner';


const Contenedor = styled.div`

max-width:900px;
margin: 0 auto;

@media(min-width: 922px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem
}
`

const Img = styled.img`

max-width: 100%;
margin: 80px 0 30pc 0;
`

const Heading = styled.h1`

font-family: 'Bebas Neue', cursive;
color: #fff;
text-align: left;
font-weight: 700;
font-size: 50px;
margin: 80px 0 50px 0;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #66a2fe;
  display: block;
}


`

function App() {

  const [moneda, getMoneda]= useState('')
  const [cripto, getCripto]= useState('')
  const [resultado, getResultado]= useState('')
  const [spiner, getSpiner]= useState(false)

  useEffect(() =>{

    const Cotizacion = async () => {
      
      
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

     const resultado = await axios.get(url);

     getSpiner(true)

     setTimeout(() =>{

      getSpiner(false)
      getResultado(resultado.data.DISPLAY[cripto] [moneda]);

     }, 2000)



    }

    Cotizacion()
  }, [moneda, cripto]);


  const Compo = (spiner) ?  <Spiner/> : <Cotizacion resultado={resultado} />


  return (
    
    <Contenedor>
     <div>
     <Img 
      src={img} />
     </div>
     <div>
        <Heading>Costiza Cripto Monedas al Instante</Heading>
        <Form 
          getMoneda={getMoneda}
          getCripto={getCripto}
        />
        {Compo}
     </div>

    </Contenedor>
    
    )
}

export default App
