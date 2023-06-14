import {useEffect, useState} from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Error from './Error';
import useMoneda from '../Hooks/useMoneda';
import useCripto from '../Hooks/useCripto';

const Boton = styled.input`

    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    transition: background-color .3s ease;
     
    &:hover{
        background-color: #326Ac0;
        cursor: pointer;
    }



`
const Form = ({getMoneda, getCripto}) => {

    const [listaCripto, getListaCripto] = useState([]);
    const [error, getError] = useState(false);

    const MONEDAS =[
        {codigo: 'USD', nombre: 'Dolar Estadounidence'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
    ]


    // utilisamos el useMoneda
    const [monedas, SelectMoneda] = useMoneda('Elige tu moneda', '',MONEDAS);
    // utilisamos el useCripto
    const [criptos, SelecCripto] = useCripto('Elige la cripto moneda', '', listaCripto);

    // llamado api
    useEffect(() =>{

        const consulta = async () =>{

            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await axios.get(url)
            getListaCripto(resultado.data.Data)
        }
        consulta();
    }, []);

        const handelSubmit = e =>{
                e.preventDefault();

                if(monedas === '' || criptos === ''){
                    getError(true)
                    return;
                }
                getError(false);

                getMoneda(monedas);
                getCripto(criptos);


            }

        

    return (

        <form 
            onSubmit={handelSubmit}
        >
            {error ? <Error mensaje='Algo a salido mal' /> : null}

        <SelectMoneda />        
        <SelecCripto/>
        
            <Boton
                type='submit'
                value='Calcular'

            />
        </form>

    );
}

export default Form;