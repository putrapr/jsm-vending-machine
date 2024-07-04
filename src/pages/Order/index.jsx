import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../config/api'

const Order = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})  

  const getProduct = async () => {
    try {
      const response = await api.get('/product')
      setProduct(response.data)
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProduct()
  })

  return (
    <div>Order</div>
  )
}

export default Order