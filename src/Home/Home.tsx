import Hours from '../Hours/Hours'
import StoreFront from '/front.jpg'
import Momo1 from '/momo1.jpeg'

function Home() {
  return (
    <>
      {/* title card */}
      <div className='
        flex
        flex-col
        justify-center
        items-center
        min-h-[300px]

      '>
        <h1 className='
          text-4xl
          font-semibold
          tracking-tight
          text-balance
          text-white
          sm:text-7xl
          font-[Comfortaa]
          bg-red-900
          rounded-full
          px-6
          py-4
        '>
          Halal Momo
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/80
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        {/* Synopsis Section */}
        <div className='
          flex
          flex-col
          gap-6
          items-center
          mb-8
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Scarborough's Go-To Momo Spot
          </h2>
          <p className='
            text-center
            text-gray-600
            text-lg
            leading-relaxed
            mb-6
          '>
            Halal Momo and Biryani is Scarborough's momo gem, offering a delightful fusion of South Asian and Indo-Chinese flavors. This modest eatery has garnered praise for its flavorful dishes, particularly the chicken momos that offer a satisfying experience for dumpling lovers.
          </p>
          <div className='
            flex
          '>
            <img 
              src={Momo1} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mr-4
                -mb-4
              '
            />
            <img 
              src={StoreFront} 
              className='
                object-cover
                w-1/4
                flex-grow
                rounded-lg
                shadow-2xl
                -mt-4
              '
            />
          </div>
        </div>

        {/* Hours Section */}
        <Hours />

        {/* Reviews Section */}
        <div className='
          flex
          flex-col
          items-center
        '>
          <h2 className='
            text-2xl
            font-semibold
            text-gray-800
            mb-4
          '>
            Reviews
          </h2>
          <div className='
            flex
            flex-col
            gap-4
            text-gray-600
            text-lg
            leading-relaxed
          '>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Best momo shop hidden in a variety store in town. Really well spiced chicken momos, super friendly people and good service."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Mark via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Hands down the best halal momo spot in town! From the juicy fillings to the perfect dough, every bite is a flavor explosion. You won't be disappointed! "</p>
              <span className='
                text-sm
                text-gray-500
              '>– Sanju via Google</span>
            </div>
            <div className='
              bg-gray-100
              p-4
              rounded-lg
              shadow-sm
            '>
              <p>"Great food and great prices."</p>
              <span className='
                text-sm
                text-gray-500
              '>– Mir via Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
