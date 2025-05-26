import Momo2 from '/momo2.jpg'
import Momo1 from '/momo1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

function Menu() {

  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[200px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
          font-[Comfortaa]
        '>
          Our Menu
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-16
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Featured Section */}
        <div className='
          flex
          flex-col
          items-center
          gap-6
        '>
          <h2 className='
            text-4xl
            font-semibold
            text-gray-800
            text-center
          '>
            Scarborough's Favourites
          </h2>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▼ Steamed Chicken Momo - $9.49
            </h3>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
            '>
              10 pieces. Our steamed chicken momos are a delightful treat for dumpling enthusiasts. Each momo is filled with a savory blend of halal chicken mince, onions, and green chilies, all encased in a tender, steamed wrapper. 
            </p>
          </div>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
            md:my-8
          '>
            <img 
              src={Momo2} 
              className='
                object-cover
                h-80
                w-full
                flex-grow
                rounded-lg
                shadow-2xl
                md:-mt-8
                md:w-1/4
              '
            />
            <img 
              src={Momo1} 
              className='
                object-cover
                h-80
                w-full
                flex-grow
                rounded-lg
                shadow-2xl
                md:w-1/4
                md:-mb-8
              '
            />
          </div>
          <div className='
            flex
            gap-4
            flex-col-reverse
            md:flex-row
          '>
            <p className='
              text-gray-600
              text-lg
              leading-relaxed
              text-right
            '>
              10 pieces. These dumplings feature a flavorful filling of halal chicken mince, onions, and green chilies, encased in a crispy, golden-brown wrapper. Each order is accompanied by a special sauce that complements the savory notes of the momos.
            </p>
            <h3 className='
              text-3xl
              font-semibold
              text-gray-800
              min-w-[200px]
            '>
              ▲ Fried Chicken Momo - $9.49
            </h3>
          </div>
        </div>

        <div className='
          flex
          flex-col
          items-center
          gap-8
        '>
          <a href="https://www.doordash.com/en-CA/store/halal-momos-toronto-26332233/29683575/" target="_blank" rel="noopener noreferrer"
            className='
            my-8
          '>
            <h2 className='
              text-4xl
              font-semibold
              text-red-800
              text-nowrap
              underline
              flex
              gap-2
            '>
              Full Menu<FontAwesomeIcon icon={faExternalLink} />
            </h2>
          </a>
        </div>
      </div>
    </>
  )
}

export default Menu
