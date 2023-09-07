import React from 'react'

const CartWidget = ({children}) => {
    // console.log(children)
  return (
    <>
    <div>{children}</div>
    {/* 👆 RENDERIZO LOS CHILDREN QUE SE RECIBEN POR PROP */}
    <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='icono de carrito' width={150} height={150}/>
    {/* 👆 IMAGEN DE CARRITO */}
    </>
  )
}

export default CartWidget