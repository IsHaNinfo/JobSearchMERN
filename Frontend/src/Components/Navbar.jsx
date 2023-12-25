import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
  const handleMenuToggler = ()=>{
    setIsMenuOpen(isMenuOpen);
  }
    return (
    <div>Navbar</div>
  )
}

export default Navbar