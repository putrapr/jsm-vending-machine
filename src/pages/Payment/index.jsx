import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import api from '../../config/api'
import Swal from 'sweetalert2'

const Payment = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [moneys, setMoneys] = useState([])
  const [totalMoney, setTotalMoney] = useState(0)
  const navigate = useNavigate()

  const getProduct = async () => {
    try {
      const response = await api.get('/product/'+id)
      setProduct(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  const deleteMoney = index => {
    setMoneys(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }

  const getTotal = () => {
    let sum = 0
    moneys.forEach( item => { sum += item })
    setTotalMoney(sum)
  }
  
  const buy = async () => {
    if (totalMoney < product.price)
      Swal.fire({
        icon: 'error',
        text: "Sorry, you don't have enough money",
      })
    else {      
      Swal.fire({
        title: 'Put money into the machine',
        html: 'Please wait while we process your request.',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      })
      const response = await api.get('/product/'+id)
      const data = { stock: response.data.stock - 1 }           
      api.patch('/product/'+id, data)   

      const change = totalMoney - product.price
      setTimeout(() => {
        Swal.close()
        if (change == 0)
          Swal.fire({
            icon: 'success',
            title: 'Payment Successful'
          }).then((result) => {
            if (result.isConfirmed)
              navigate('/')     
          })

        else
          Swal.fire({
            icon: 'success',
            title: 'Payment Successful',
            text: 'Your money back: Rp.'+ change
          }).then((result) => {
            if (result.isConfirmed)
              navigate('/')     
          })
      }, 5000)
    }
  }
  
  useEffect(() => {
    getProduct()
    getTotal()
  },[])

  useEffect(() => {
    getTotal()
  }, [moneys])

  return (
    <main className="h-screen flex gap-12 py-12 bg-[url('../img/home/bg.webp')] bg-cover bg-center">
      <div className='w-1/2 flex justify-end'>
        <div className='w-96 flex flex-col items-center border p-4 bg-gray-800 bg-opacity-90'>
          <img src={product?.img_url} alt="order snack" className='w-72' />
          <h1 className='font-semibold text-3xl text-white mt-4 text-center'>{product?.title}</h1>
          <h3 className='mt-4 text-gray-100'>Price: Rp.{product?.price}</h3>
          <Link to="/" type="button" className="text-white bg-gray-800 hover:bg-gray-900 active:outline-none active:ring-4 active:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-8">Back</Link>         
        </div>
      </div>
      <div className='w-96 border p-6 bg-gray-800 bg-opacity-90'>
        <h1 className='text-2xl text-white'>Pay with fractions of money (Rp.)</h1>
        <div className='w-full mt-6 flex flex-wrap gap-4'>
          <button type='button' className='w-24 h-12 border rounded-md text-white hover:bg-gray-600 active:ring-4 active:ring-gray-600'
            onClick={() => setMoneys([...moneys, 2000])}>2000</button>
          <button type='button' className='w-24 h-12 border rounded-md text-white hover:bg-[#ca9c67] active:ring-4 active:ring-[#ca9c67]'
            onClick={() => setMoneys([...moneys, 5000])}>5000</button>
          <button type='button' className='w-24 h-12 border rounded-md text-white hover:bg-[#867bad] active:ring-4 active:ring-[#867bad]'
            onClick={() => setMoneys([...moneys, 10000])}>10000</button>
          <button type='button' className='w-24 h-12 border rounded-md text-white hover:bg-[#41b7ad] active:ring-4 active:ring-[#41b7ad]'
            onClick={() => setMoneys([...moneys, 20000])}>20000</button>
          <button type='button' className='w-24 h-12 border rounded-md text-white hover:bg-[#2b6593] active:ring-4 active:ring-[#2b6593]'
            onClick={() => setMoneys([...moneys, 50000])}>50000</button>
        </div>

        <div className=' flex flex-wrap gap-2 mt-24'>
          {
            moneys?.map((item, index) => (              
              <div key={index} className='w-16 h-8 border rounded-sm text-white text-sm flex items-center justify-center gap-1 group hover:bg-red-500 active:ring-2 active:ring-red-500'
              >{item} 
                <button type='button' className='hidden group-hover:inline'
                  onClick={() => deleteMoney(index)}>
                  <i className="bi bi-x-circle"></i>
                </button>
              </div>
            ))
          }
        </div>
        
        <div className='mt-4'>
          <h3 className='text-white'>My amount of money: Rp.{totalMoney}</h3>
        </div>
        <div className='w-full flex justify-center mt-8'>
          <button type='button' onClick={() => buy()} className="w-32 text-white bg-blue-700 hover:bg-blue-800 active:outline-none active:ring-4 active:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Buy</button>
        </div>
      </div>
    </main>
  )
}

export default Payment