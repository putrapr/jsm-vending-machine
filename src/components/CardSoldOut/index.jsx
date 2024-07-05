import PropTypes from 'prop-types'

const CardSoldOut = ({ data }) => {
  
  return (
    <div key={data.id} className="h-[214px] flex items-center bg-white bg-opacity-70 rounded-lg shadow flex-row max-w-xl">
      <img src={data.img_url} alt="Snack" className="object-cover h-auto w-48 rounded-none rounded-s-lg" />
      <div className="flex flex-col p-4 w-48">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
        <div>
          <table className="table-auto">
            <tbody>
              <tr>
                <td>Weight</td>
                <td>: {data.weight}</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>: {data.stock}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>: Rp.{data.price}</td>
              </tr>
            </tbody>
          </table>
          <h5 className='text-center mt-3 font-bold'>Out Of Stock</h5>
        </div>
      </div>
    </div>
  )
}
export default CardSoldOut

CardSoldOut.propTypes = {
  data: PropTypes.object,
  key: PropTypes.string
}