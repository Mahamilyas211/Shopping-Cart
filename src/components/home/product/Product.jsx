import React, { useState } from 'react'
import Heading from '../../common/Heading'
import ProductItems from './ProductItems'
import { products } from '../../assets/data/data'

export const Product = () => {
    const [data, setdata] = useState(products)
    console.log(setdata);
  return (
    <> <div className="product">
        <div className="container">
           <Heading title='Trending Products' desc='Check the hottest designs of the week. These rising stars are worth your attention.' />

           <ProductItems data={data} />
            </div>
            </div>
            </>
  )
}
