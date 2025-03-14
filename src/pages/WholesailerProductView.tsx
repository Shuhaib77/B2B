import React from 'react'
import ProductSidebar from '../components/wholesailers/ProductSidebar'
import ProductView from '../components/wholesailers/ProductView'

function WholesailerProductView() {

  return (
    <div>
     <div className="lg:flex-row sm:flex flex-col   ">
        {/* {open && ( */}
          <div className="">
            <ProductSidebar />
          </div>
        {/* )} */}
        <div className="w-full p-10 ">
          <ProductView />
        </div>
      </div>
    </div>
  )
}

export default WholesailerProductView