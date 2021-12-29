import React from 'react'
import './Subtotal.css'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer"
import CurrencyFormat from 'react-currency-format'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
            <>
                <p>
                    Subtotal ({basket.length} items): <strong> {value} </strong>
                </p>

                <small className="subtotal__gift">
                    <input type="checkbox" />This order contins a gift
                </small>
                <button>Proceed to checkout</button>
            </>
            )}
            decimalScale = {2}
            value = {getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            
        </div>
    )
}

export default Subtotal
