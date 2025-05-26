import Hours from '../Hours/Hours'
import Location from '../Location/Location'
import Samosa2 from '/samosa2.jpeg'
import Plate1 from '/plate1.jpeg'

function About() {

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
          Our Story
        </h1>
      </div>
      {/* Content */}
      <div className='
        flex
        flex-col
        flex-grow
        gap-4
        bg-white/70
        lg:rounded-t-3xl
        p-8
        lg:p-16
      '>
        <div className='
          flex
          flex-col
          gap-32
          py-8
          items-center
          w-full
          mb-8
        '>
          <div className='
            flex
            flex-col
            md:flex-row
            gap-4
          '>
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                Comfort Food From Small Beginnings
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Halal Momo began as a modest eatery with a passion for delivering authentic South Asian flavors. Specializing in halal momos and biryani, the restaurant quickly gained popularity among locals for its flavorful dishes and commitment to quality. Over time, their dedication to authentic recipes and consistent service led to a growing customer base. Today, Halal Momo and Biryani stands as a testament to how small beginnings, fueled by passion and hard work, can lead to culinary success in a diverse community like Scarborough.
              </p>
            </div>
            <img 
              src={Samosa2} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
          </div>

          <div className='
            flex
            flex-col-reverse
            md:flex-row
            gap-4
          '>
            <img 
              src={Plate1} 
              className='
                object-cover
                rounded-lg
                shadow-2xl
                md:w-1/4
                flex-grow
              '
            />
            <div className='
              flex
              flex-col
              flex-grow
              md:w-1/4
              gap-4
            '>
              <h3 className='
                text-3xl
                font-semibold
                text-gray-800
                text-center
              '>
                No Flavour left behind
              </h3>
              <p className='
                text-center
                text-gray-600
                text-lg
                leading-relaxed
                flex-grow
              '>
                Halal Momo has built its reputation on serving food that's consistently fresh, flavorful, and made with care. Every dish, from their signature momos to the richly spiced biryani, is crafted using high-quality halal ingredients and prepared fresh to order. The steamed and fried chicken momos are packed with juicy, well-seasoned filling, while the biryani offers a perfect blend of aromatic spices and tender meat that speaks to traditional South Asian cooking. The sauces and chutneys served alongside the dishes are house-made and elevate the flavors even further. Whether you're trying their crispy fried snacks or digging into a hearty main, each item reflects their commitment to freshness, authenticity, and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Hours */}
          <Hours />
          {/* Location */}
          <Location />
        </div>
      </div>
    </>
  )
}

export default About
