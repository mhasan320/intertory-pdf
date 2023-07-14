/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ComponentToPrint = React.forwardRef((props, ref) => (

    <div ref={ref} className='print-content'>
        <div className='print-topItem'>
            <div className='itemLeft'>
                <h3>[Shop Name]</h3>
                <p>[Shop Address]</p>
                <p>[Shop Phone: 000-0000-00]</p>
                <p>[Fax: 000-000-00]</p>
                <p>Website: </p>
            </div>
            <div className='itemRight'>
                <h3>Invoice</h3>
                <p>Date: <span>{new Date(props.printContent.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}</span></p>
                <p>Order Number: <span>{props.printContent.orderNumber}</span></p>
                <p>Customer Id: <span>{props.printContent.userId}</span></p>
            </div>
        </div> 
        <div className='shippingInfo'>
            <div className='shippingLeft'>
                <h3>Shipping Info</h3>
                <p>{props.printContent.shippingFirstName} {props.printContent.shippingLastName}</p>
                <p>{props.printContent.shippingStreet}, {props.printContent.shippingArea} {props.printContent.shippingCity} - {props.printContent.shippingPostalCode}</p>
                <p>{props.printContent.shippingCountry}</p>
                <p>Phone: <span>{props.printContent.shippingPhone}</span></p>
                <p>Email: <span>{props.printContent.shippingEmail}</span></p>
            </div>
            <div className='shippingLeft'>
                <h3>Billing Info</h3>
                <p>{props.printContent.billingFirstName} {props.printContent.billingLastName}</p>
                <p>{props.printContent.billingStreet}, {props.printContent.billingArea} {props.printContent.billingCity} - {props.printContent.billingPostalCode}</p>
                <p>{props.printContent.billingCountry}</p>
                <p>Phone: <span>{props.printContent.billingPhone}</span></p>
                <p>Email: <span>{props.printContent.billingEmail}</span></p>
            </div>
            <div className='shippingLeft'>
                <h3>Payment Info</h3>
                <p>Customer Name: <span>{props.printContent.firstName} {props.printContent.lastName}</span></p>
                <p>Phone: <span>{props.printContent.phone}</span></p>
                <p>Email: <span>{props.printContent.email}</span></p>
                <p>Payment Method: <span>{props.printContent.paymentMethod}</span></p>
                <p>Payment Type: <span>{props.printContent.paymentType}</span></p>
                <p>Payment Status: <span className="status">{props.printContent.paymentStatus}</span></p>
                <p>Transaction Id: <span>{props.printContent.transactionId}</span></p>
            </div>
        </div>
        <div className='productInfo'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>SKU</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.printContent.products.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    <div>
                                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt={product.name} />
                                        <p>{product.name}</p>
                                    </div>
                                </td>
                                <td>{product.sku}</td>
                                <td>{product.quantity}</td>
                                <td>{product.discountedPrice}</td>
                                <td>{product.subtotal}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'>Subtotal</td>
                            <td>{props.printContent.subtotal}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Delivery Charge</td>
                            <td>{props.printContent.deliveryCharge}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Total Tax</td>
                            <td>{props.printContent.totalTax}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Paid</td>
                            <td>{props.printContent.paid}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Due</td>
                            <td>{props.printContent.due}</td>
                        </tr>
                        <tr>
                            <td colSpan='4'>Total</td>
                            <td>{props.printContent.total}</td>
                        </tr>
                        
                    </tfoot>
            </table>
        </div>
    </div>
))

ComponentToPrint.displayName = 'ComponentToPrint';

export default ComponentToPrint;