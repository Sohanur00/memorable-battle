import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Battols.css'

const Battols = () => {

    const [battols, setBottols] = useState([])

    const [cart, setCart] = useState([])





    useEffect(() => {

        fetch("Bottols.json")
            .then(res => res.json())
            .then(data => setBottols(data))

    }, [])

    const handleAddToCart = bottol => {

        const newCart = [...cart, bottol]
        setCart(newCart);

    }




    return (
        <div>

            <h2>Battols Available :{battols.length} </h2>

            <h4>cart : {cart.length}</h4>

            <div className="battle-container">
                {

                    battols.map(bottol => <Bottol

                        key={bottol.id}
                        bottol={bottol}

                        handleAddToCart={handleAddToCart}


                    ></Bottol>)

                }
            </div>

        </div>
    );
};

export default Battols;