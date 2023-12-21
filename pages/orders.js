
const orders = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-[#9a4747] tracking-widest">
              GLIDE SHOP
            </h2>
            <p className="text-gray-900 font-medium mb-4">
              Thank you! Order placed successfully. We&apos;ll be delievering your order soon.
            </p>
            <div className="overflow-x-scroll sm:overflow-x-auto">
              <table className="bg-white my-4 w-full">
                <thead>
                  <tr>
                    <th className="bg-[#d8d8fe] border text-left px-8 py-4">Item Name</th>
                    <th className="bg-[#d8d8fe] border text-left px-8 py-4">Quantity</th>
                    <th className="bg-[#d8d8fe] border text-left px-8 py-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-8 py-4">Tshirt</td>
                    <td className="border px-8 py-4">1</td>
                    <td className="border px-8 py-4">499</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4">Jeans</td>
                    <td className="border px-8 py-4">2</td>
                    <td className="border px-8 py-4">1999</td>
                  </tr>
        </div>
      </div>
    </section>

  )
}

export default orders
