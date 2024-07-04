import { Link } from 'react-router-dom'
const Card = () => {
  return (   
    <div className="w-52 bg-white border border-gray-200 rounded-lg shadow">
      <img src="https://res.cloudinary.com/dzpf9unc5/image/upload/v1719933734/jsm/slai-olai_ey5ztl.webp" alt="Snack" className="rounded-t-lg  object-cover" />
      
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Slai Olai Roll Blueberry</h5>
        </a>
        <table>
          <tr>
            <td>Weight</td>
            <td>: 128gr</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: 50</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: 6000</td>
          </tr>
        </table>
        {/* <a href="#" className="w-20 flex content-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          <p>Buy</p>
        </a> */}
        <Link to='order' className="mt-10 bg-primary text-xs px-[1.35rem] py-3 xl:px-[2.65rem] xl:py-4 rounded xl:rounded-md text-white tracking-wider xl:tracking-widest active:ring md:w-28 xl:w-40">Learn more</Link>
      </div>
    </div>

  )
}

export default Card