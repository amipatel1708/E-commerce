// import React, { useEffect, useState } from 'react'
// import SummaryApi from '../common'
// import moment from 'moment'
// import displayINRCurrency from '../helpers/displayCurrency'

// const OrderPage = () => {
//     const [data, setData] = useState([])

//     const fetchOrderDetails = async () => {
//         const response = await fetch(SummaryApi.getOrder.url, {
//             method: SummaryApi.getOrder.method,
//             credentials: "include"
//         })

//         const responseData = await response.json()
//         setData(responseData?.data)
//     }

//     useEffect(() => {
//         fetchOrderDetails()
//     }, [])
//     console.log(data,"data")

//     return (
//         <div>
//             {
//                 !data && (
//                     <p>No Order available</p>
//                 )
//             }
//             <div className='p-4 w-full'>
//                 {
//                     Array.isArray(data) && data.map((item, index) => (
//                         <div key={item.userId + index} className=''>
//                             <p className='font-medium text-lg'>{moment(item.createAt).format('LL')}</p>
//                             <div className='border rounded'>
//                                 <div className='flex flex-col lg:flex-row justify-between'>
//                                     <div className='grid gap-1'>
//                                         {
//                                             item?.prodcutDetails.map((product, index) => {
//                                                 return (
//                                                     <div key={product.productId + index} className='flex gap-3 bg-slate-100'>
//                                                         <img src={product.image[0]} className='w-28 h-28 bg-slate-200 object-scale-down p-2' />
//                                                         <div>
//                                                             <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
//                                                             <div className='flex items-center gap-5'>
//                                                                 <div>{displayINRCurrency(product.price)}</div>
//                                                                 <div>Quantity: {product.quantity}</div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                     <div className='flex flex-col gap-4 p-2 min-w-[300px]'>
//                                         <div>
//                                             <div className='text-lg font-meduim'>Payment Details :</div>
//                                             <p className='ml-1'>Payment method : {item.paymentDetails.payment_mode_type}</p>
//                                             <p className='ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
//                                         </div>
//                                         <div>
//                                             <div className='text-lg' >Shipping Details</div>
//                                             {
//                                                 item.shipping_options.map((shipping, index) => {
//                                                     return (
//                                                         <div key={shipping.shipping_rate} className='font-meduim ml-1'>
//                                                             Shipping Amount : {shipping.shipping_amount}
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='font-semibold ml-auto w-fit lg:text-lg'>Total Amount : {item.totalAmount}</div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default OrderPage

import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import moment from 'moment'
import displayINRCurrency from '../helpers/displayCurrency'

const OrderPage = () => {
    const [data, setData] = useState([])

    const fetchOrderDetails = async () => {
        const response = await fetch(SummaryApi.getOrder.url, {
            method: SummaryApi.getOrder.method,
            credentials: "include"
        })

        const responseData = await response.json()
        setData(responseData?.data)
    }

    useEffect(() => {
        fetchOrderDetails()
    }, [])

    return (
        <div>
            {
                !data.length ? (
                    <p>No Order available</p>
                ) : (
                    <div className='p-4 w-full'>
                        {
                            data.map((item, index) => (
                                <div key={item.userId + index} className=''>
                                    <p className='font-medium text-lg'>{moment(item.createAt).format('LL')}</p>
                                    <div className='border rounded'>
                                        <div className='flex flex-col lg:flex-row justify-between'>
                                            <div className='grid gap-1'>
                                                {
                                                    item?.prodcutDetails.map((product, index) => (
                                                        <div key={product.productId + index} className='flex gap-3 bg-slate-100'>
                                                            <img src={product.image[0]} className='w-28 h-28 bg-slate-200 object-scale-down p-2' />
                                                            <div>
                                                                <div className='font-medium text-lg text-ellipsis line-clamp-1'>{product.name}</div>
                                                                <div className='flex items-center gap-5'>
                                                                    <div>{displayINRCurrency(product.price)}</div>
                                                                    <div>Quantity: {product.quantity}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className='flex flex-col gap-4 p-2 min-w-[300px]'>
                                                <div>
                                                    <div className='text-lg font-medium'>Payment Details :</div>
                                                    <p className='ml-1'>Payment method : {item.paymentDetails.payment_method_type.join(', ')}</p>
                                                    <p className='ml-1'>Payment Status : {item.paymentDetails.payment_status}</p>
                                                </div>
                                                <div>
                                                    <div className='text-lg'>Shipping Details</div>
                                                    {
                                                        item.shipping_options.map((shipping, index) => (
                                                            <div key={shipping.shipping_rate} className='font-medium ml-1'>
                                                                Shipping Amount : {displayINRCurrency(shipping.shipping_amount)}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className='font-semibold ml-auto w-fit lg:text-lg'>Total Amount : {displayINRCurrency(item.totalAmount)}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default OrderPage

