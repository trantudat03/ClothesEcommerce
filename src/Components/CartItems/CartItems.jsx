import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalPrice} = useContext(ShopContext)
  return (
    <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=> {
                if(cartItems[e.id]>0) {
                    return (
                        <div>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} className='cartitems-product-icon' alt=''/>
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity' onClick={()=>{}}>{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=> {removeFromCart(e.id)}} alt=''/>
                            </div>
                            <hr/>
                        </div>
                    )
                }else{
                    return null;
                }
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtatal</p>
                            <p>${getTotalPrice()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Total</p>
                            <p>${getTotalPrice()}</p>
                        </div>
                    </div>
                    <button className=''>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>if you can pay for me?</p>
                    <div className='cartitems-promobox'>
                        <input type='text' placeholder='Promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItems