import React from 'react'
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { FiSearch, FiShoppingBag } from "react-icons/fi";


const SearchItems = ({value, products, onSearch}) => {
  

  return (
    <>
    <section className='searchItems'>
        <div className='product_items'>
          {products.filter((items) => {
              const searchkey = value.toLowerCase()
              const title = items.title.toLowerCase()

              return searchkey && title.startsWith(searchkey) && title !== searchkey
            })
            .slice(0, 10)
            .map((items) => (
              <div className='box' onClick={() => onSearch(items.title)} key={items.id}>
                <div className='img'>
                  <img src={items.cover} alt='' />
                  <div className='overlay'>
                    <button className='button'>
                      <FiShoppingBag />
                    </button>
                    <button className='button'>
                      <AiOutlineHeart />
                    </button>
                    <button className='button'>
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className='details'>
                  <h3>{items.title}</h3>
                  <p>{items.author}</p>
                  <h4>${items.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default SearchItems