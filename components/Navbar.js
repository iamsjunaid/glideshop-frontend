import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { IoCloseOutline, IoBagHandleOutline, IoTrashOutline } from 'react-icons/io5'
import { HiOutlinePlus, HiOutlineMinus } from 'react-icons/hi'
import { BiUserCircle } from 'react-icons/bi'

const Navbar = ({ cart, addToCart, deleteItemFromCart, clearCart, subTotal }) => {
  const [cartPopup, setCartPopup] = useState(false)

  const handleCartPopup = () => {
    setCartPopup(!cartPopup)
  }

  return (
    <div>
      <header className="body-font shadow-md sticky top-0 z-10">
        <div className="container mx-auto py-8 md:py-0 flex flex-wrap flex-col md:flex-row items-center relative">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={500}
              height={187}
              className="w-32 rounded-lg"
            />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/tshirts" className="mr-5 hover:text-[#9a4747]">
              Tshirts
            </Link>
            <Link href="/hoodies" className="mr-5 hover:text-[#9a4747]">
              Hoodies
            </Link>
            <Link href="/mugs" className="mr-5 hover:text-[#9a4747]">
              Mugs
            </Link>
            <Link href="/stickers" className="mr-5 hover:text-[#9a4747]">
              Stickers
            </Link>
          </nav>
          <Link href="/login">
            <BiUserCircle className="absolute left-4 top-12 md:static w-6 h-6 cursor-pointer hover:text-[#9a4747] " />
          </Link>
          <BsCart3 className="absolute top-12 right-4 md:static w-6 h-6 ml-2 cursor-pointer hover:text-[#9a4747]" onClick={handleCartPopup} />
          <span className="bg-[#9a4747] rounded-full absolute top-10 right-2 sm:top-1 sm:-right-2 text-sm w-5 h-5 text-center text-white">{Object.keys(cart).length}</span>
        </div>
      </header>
      {cartPopup && (
        <div className={`cart blur-0 bg-[#fff] z-20 text-center p-4 w-full sm:w-1/4 absolute right-0 sm:top-12 top-36 backdrop-filter backdrop-blur text-black h-fit transform transition-transform ease-in-out duration-500 border-2 rounded-md border-[#9a4747] shadow-md ${cartPopup ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="grid grid-rows-3 gap-4 content-between">
            <div className="flex justify-between align-middle">
              <h1 className="font-bold text-2xl underline">Your Cart</h1>
              <IoCloseOutline className="text-2xl cursor-pointer hover:text-[#9a4747]" onClick={handleCartPopup} />
            </div>

            <ol className="list-decimal items-center">

              {Object.keys(cart).length === 0 && (<p className="text-xl">Your cart is empty!</p>)}

              {Object.keys(cart).map((k) => {
                return (
                  <li key={k} className="flex justify-between items-center border-b-2 border-[#9a4747] py-2">
                    <div className="flex flex-col">
                      <h1 className="font-bold">{cart[k].name}</h1>
                      <h2 className="text-sm">{cart[k].size} {cart[k].variant}</h2>
                    </div>

                    <div className="flex items-center">
                      <HiOutlineMinus className="text-xl cursor-pointer hover:text-[#9a4747]" onClick={() => deleteItemFromCart(k)} />
                      <h1 className="mx-2">{cart[k].qty}</h1>
                      <HiOutlinePlus className="text-xl cursor-pointer hover:text-[#9a4747]" onClick={() => addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant)} />
                      <h1 className="mx-2">₹{subTotal}</h1>
                    </div>
                  </li>
                )
              })}
            </ol>
            <div className="flex gap-2 sm:w-1/2 mt-8">
              <button className="flex items-center mx-auto border-solid border-[#9a4747] border-2 h-fit py-2 px-8 text-[#9a4747] focus:outline-none hover:underline rounded text-lg" onClick={clearCart} >Clear<IoTrashOutline className="text-xl" /></button>
              <Link href={'/checkout'}>
                <button className="flex items-center mx-auto text-white bg-[#9a4747] py-2 px-8 focus:outline-none hover:underline rounded text-lg">Checkout<IoBagHandleOutline className="text-xl" /></button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
