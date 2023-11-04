import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>This stylish shirt is perfect for any occasion. Made from high-quality fabric, it offers both comfort and durability. The classic design features a button-down collar and long sleeves, making it suitable for formal or casual wear</p>
            <p>The shirt's slim fit provides a modern and flattering look. With its versatile color and timeless appeal, this shirt is a wardrobe essential. Pair it with jeans for a relaxed weekend outfit or dress it up with trousers for a sophisticated ensemble. Upgrade your style with this versatile and fashionable shirt</p>
        </div>
    </div>
  )
}

export default DescriptionBox