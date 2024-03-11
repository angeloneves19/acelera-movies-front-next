export const HomeComponent = () => {
  return (
    <>
      <div className="h-screen flex">
        <div className="bg-gray-200 w-1/6 h-full">
          <div style={{
            background: '#EB3D78',
            margin: '0px',
            padding: '15px',
            border: '1px solid #EB3D78',
          }}>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl text-center mt-5" >Hello, User!</h1>
          </div>
          <div>
            <h3 className="text-xl font-bold  text-gray-900 sm:text-1xl text-start mt-6">Add Movie</h3>
          </div>
        </div>
        <div className="bg-gray-900 px-6  shadow-4xl  w-full  h-screen" >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl " style={{
            background: '#EB3D78',
            margin: '12px',
            padding: '15px',
            border: '1px solid #EB3D78',
          }}>
            All Movies
          </h2>
          <div style={{
            margin: '12px',
            padding: '1px'
          }}>
            <div className="size-56 flex-shrink-0 overflow-hidde" style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"  alt="" className="object-cover object-center " />
            </div>
            <div className="size-56 flex-shrink-0 overflow-hidden rounded-md border  " style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" className="object-cover object-center"/>
            </div>
            <div className="size-56 flex-shrink-0 overflow-hidden rounded-md border " style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" className=" object-cover object-center"/>
              
            </div>
            <div className="size-56 flex-shrink-0 overflow-hidden rounded-md border " style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" className=" object-cover object-center"/>
              
            </div>

            <div className="size-56 flex-shrink-0 overflow-hidden rounded-md border " style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" className=" object-cover object-center"/>
              
            </div>

            <div className="size-56 flex-shrink-0 overflow-hidden rounded-md border " style={{
              marginBottom: "15px",
            }}>
              <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="" className=" object-cover object-center"/>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
