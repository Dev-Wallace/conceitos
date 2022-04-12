import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const Contador = () => {

    // let numero = 0;
    let [numero, setNumero] = useState(0)

    function somar() {
        setNumero(++numero)
        console.log(numero)
    }
    function somar5() {
        setNumero(numero+5)
        console.log(numero)
    }
    function somar10() {
        setNumero(numero+10)
        console.log(numero)
    }
    function subtrair() {
        setNumero(--numero)
        console.log(numero)
    }
    function subtrair5() {
        setNumero(numero-5)
        console.log(numero)
    }
    function subtrair10() {
        setNumero(numero-10)
        console.log(numero)
    }

    return (
        <div>
            <h1 className='mt-5'>Contador</h1>

            <Button variant="dark" onClick={subtrair10}> -10 </Button>
            <Button variant="warning" onClick={subtrair5}> -5 </Button>
            <Button variant="danger" onClick={subtrair}> - </Button>
            {'' + numero + ''}
            <Button variant="success" onClick={somar}> + </Button>
            <Button variant="primary" onClick={somar5}> +5 </Button>
            <Button variant="info" onClick={somar10}> +10 </Button>

        </div>
    )
}

export default Contador