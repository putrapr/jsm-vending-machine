import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import api from '../../config/api'

const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await api.get('/product')
      setProducts(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    getProducts()
  },[])

  return (
    <main className="w-full h-screen bg-[url('../img/home/bg.webp')] bg-cover bg-center flex flex-col items-center">
      <h1 className="text-white text-4xl mt-8">Get Snacks Now !!</h1>
      <h3 className="text-gray-400 mt-2">The most delicious snacks are available here. Transactions are fast, safe and reliable.Get it soon !</h3>
      <div className='w-full flex flex-wrap justify-evenly gap-y-12 mt-8'>
        {
          products?.map((item, index) => (
            <div key={index}>
              <Card data={item} />            
            </div>
          ))
        }
      </div>
      
    </main>
  )
}

export default Home