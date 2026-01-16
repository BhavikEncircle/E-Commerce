import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: products } = useSelector((state) => state.products)

  const product = products.find((item) => item.id === Number(id))

  return (
    <div className='min-h-screen bg-gray-100 px-4 py-10'>
      <div className='max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex justify-center'>
          <img
            src={product.image}
            alt={product.title}
            className='h-72 object-contain'
          />
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            {product.title}
          </h2>

          <p className='text-gray-600 mb-6'>{product.description}</p>

          <p className='text-3xl font-bold text-green-600 mb-6'>
            ${product.price}
          </p>

          <div className='flex gap-4'>
            <button
              onClick={() => navigate('/dashboard')}
              className='bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded'
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
