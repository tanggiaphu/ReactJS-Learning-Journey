import React, { useContext, useEffect, useState } from 'react';

import styles from './HeaderCartButton.module.css'
import CartIcon from '../../Asset/Icons/CartIcon';

import CartContext from '../../store/cart-context';

function HeaderCartBtn(props) {
    const cxt = useContext(CartContext)

    const [isHighlighted, setIsHighlighted] = useState(false)

    useEffect(() => {
        setIsHighlighted(true)
        const unHighlightTimeout = setTimeout(() => {
            setIsHighlighted(false)
        }, 300)
        return () => clearTimeout(unHighlightTimeout)
    }, [cxt.mealsAmount])

    return (
        <button className={`${styles.button} ${isHighlighted && styles.bump}`} onClick={props.onShow}>
            <div className={styles.icon}>
                <CartIcon />
            </div>
            <div>
                Your Cart
            </div>
            <div className={styles.badge}> {cxt.mealsAmount} </div>
        </button >
    )
}

export default HeaderCartBtn;