import { Link } from 'react-router-dom'

const Card2 = () => {
  return (      
    <Link to="/order" className="flex items-center bg-white border border-gray-200 rounded-lg shadow flex-row max-w-xl hover:bg-gray-100">
      <img src="https://res.cloudinary.com/dzpf9unc5/image/upload/v1719933734/jsm/slai-olai_ey5ztl.webp" alt="Snack" className="object-cover h-auto w-48 rounded-none rounded-s-lg" />
      <div className="flex flex-col p-4 w-48">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Slai Olai Roll Blueberry</h5>
        <div>
          <table className="table-auto">
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
        </div>
      </div>
    </Link>
  )
}

export default Card2