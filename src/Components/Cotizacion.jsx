import styled from '@emotion/styled';

const Contenedor = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif
`;
const Info = styled.p`

    font-size: 18px;

    span{
        font-weight: bold;
    }

`;
const Precio = styled.p`

    font-size: 30px;

    span{
        font-weight: bold;
    }
`;

const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length===0) return null;

    return ( 

        <Contenedor>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Volaracion las ultimas 24hrs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima Actualisacion: <span>{resultado.LASTUPDATE}</span></Info>
        </Contenedor>

     );
}
 
export default Cotizacion;