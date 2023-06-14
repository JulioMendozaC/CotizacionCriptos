import img from './cryptomonedas.png'
import styled from '@emotion/styled';
import Form from './Components/Form';

function App() {

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

  return (
    
    <Contenedor>
     <div>
     <Img 
      src={img} />
     </div>
     <div>
        <Heading>Costiza Cripto Monedas al Instante</Heading>
        <Form />
     </div>
    </Contenedor>
    
    )
}

export default App
