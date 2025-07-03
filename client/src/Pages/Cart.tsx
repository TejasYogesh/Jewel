import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cart');
        setCartItems(res.data);
      } catch (error) {
        console.error('Failed to fetch cart items');
      }
    };
    fetchCart();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCartItems(cartItems.filter((item: any) => item._id !== id));
    } catch (error) {
      alert('Failed to delete item');
    }
  };

  return (
    <>
      <Navbar />
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cartItems.map((item: any) => (
              <div key={item._id} className="bg-white shadow rounded p-4">
                <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-2 rounded" />
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.description}</p>
                <p className="font-bold mt-2">${item.price}</p>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                 Remove from the Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}