import styled from '@emotion/styled';


const MsjError = styled.p`

    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue' cursive;

`;

const Error = ({mensaje}) => {
    return ( 
        <MsjError>
            {mensaje}
        </MsjError>
     );
}
 
export default Error;