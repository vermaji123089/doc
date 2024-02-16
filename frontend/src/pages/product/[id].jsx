import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Wraper from '@/components/Wraper'
import ProductDetailsCraousle from '@/components/ProductDetailsCraousle'
import ReletedProduct from '@/components/ReletedProduct'
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'  >
        <Wraper>
            <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] '  >

            {/* left coumn */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'  > <ProductDetailsCraousle/> </div>
            {/* left coumn */}

            {/* right coumn */}

            <div className='flex-[1] py-3' >
               {/* product  title */}
                <div className='text-[34px] font-semibold mb-2 '  >
                  jorden Retro 6 G
                </div>
                {/* sibititle  */}
                <div className='text-lg font-semibold mb-5 ' >
                  men&apos;s Golf Shoes
                </div>
                {/* product price  */}
                <div className='text-lg font-semibold '  >
                  MRP : $ 19.648                  
                </div>
                {/* MESSGE */}
                <div className='text-md font-medium text-black/[0.5] ' >
                inc. of texes
                </div>
                {/* text msg */}
                <div className=' text-md font-medium text-black/[0.5] mb-20 '  >
                  {`(Also include  all application detail)`}

                </div>
               {/* product title end */}
               {/* produt sizing */}
                <div className='mb-10'  > 
                  <div className='flex justify-between mb-2' >
                    <div className='text-md font-semibold'  >
                      select Size
                    </div>
                    <div className='text-md font-medium text-black/[0.5] cursor-pointer '  >
                      Select Guid
                    </div>
                  </div>
                  {/* size selection */}
                  <div className='grid grid-cols-3 gap-2' >
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 9
                        </div>
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 12
                        </div>
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 13
                        </div>
                        {/*  */}
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 8
                        </div>
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 7
                        </div>
                        <div className=' border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 6
                        </div>
                        {/*  */}
                        <div className='cursor-not-allowed bg-black/[0.1] text-black/[0.5] border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 5
                        </div>
                        <div className='cursor-not-allowed bg-black/[0.1] text-black/[0.5] border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 15
                        </div>
                        <div className='cursor-not-allowed bg-black/[0.1] text-black/[0.5] border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer  ' > 
                          UK 19
                        </div>
                        {/*  */}
                  </div>
                  {/* error msg */}
                  <div className=' text-red-600 mt-1 ' >
                    Size selection is required
                  </div>
                </div>
                {/* add to cart button */}
                <button className=' hover:opacity-70  w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 ' >
ADD to Cart
                </button>
                {/* whisist list button */}
                <button className='hover:opacity-70  w-full py-4 rounded-full bg-white text-black border border-black text-lg font-medium transition-transform active:scale-95 mb-3 flex items-center mb-10 gap-2 justify-center hover:opacity-70'  >
Whishlist
<IoMdHeartEmpty size={20}/>
                </button>
{/* product discription */}
<div className=''  > 
<div className='text-lg font-bold mb-5 '  >  
Product Detail
</div>
<div className=' text-md mb-5 ' >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia ullam dolorem reiciendis beatae reprehenderit cumque cupiditate optio voluptatem et hic numquam enim necessitatibus, quidem aliquid corporis at accusantium nam.
</div>
<div className=' text-md mb-5 ' >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia ullam dolorem reiciendis beatae reprehenderit cumque cupiditate optio voluptatem et hic numquam enim necessitatibus, quidem aliquid corporis at accusantium nam.
</div>
</div>

  {/* produt sizing */}
            </div>
            {/* right coumn */}
            </div>
<ReletedProduct/>
        </Wraper>
    </div>
  )
}

export default ProductDetails