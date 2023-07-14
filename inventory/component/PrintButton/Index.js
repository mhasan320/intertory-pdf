import React, { useRef } from 'react';
import ComponentToPrint from '../ComponentToPrint/Index';
import { useReactToPrint } from 'react-to-print';

const printContent = {
  "id": 12,
  "orderNumber": "1686057706106",
  "shopId": 3,
  "userId": 5,
  "firstName": "Mehedi Hassan",
  "lastName": "Durjoi",
  "email": "m.h.durjoi@gmail.com",
  "phone": "8801789886616",
  "platform": null,
  "customerType": "Online",
  "salesChannel": "Facebook",
  "paymentMethod": "Bkash",
  "paymentType": "Advanced",
  "paymentStatus": "paid",
  "transactionId": "trxasdfhaladsfj",
  "subtotal": 420,
  "deliveryCharge": 40,
  "totalTax": 0,
  "total": 460,
  "paid": 460,
  "due": 0,
  "note": null,
  "shippingFirstName": "Mehedi Hassan",
  "shippingLastName": "Durjoi",
  "shippingPhone": "8801789886616",
  "shippingEmail": "m.h.durjoi@gmail.com",
  "shippingCountry": "Bangladesh",
  "shippingCity": "Dhaka",
  "shippingArea": "Banasree",
  "shippingStreet": "Mollateghoria, Kushtia, 7000",
  "shippingPostalCode": "7000",
  "shippingLat": null,
  "shippingLon": null,
  "billingFirstName": "Mehedi Hassan",
  "billingFirstLast": null,
  "billingPhone": "8801789886616",
  "billingEmail": "m.h.durjoi@gmail.com",
  "billingCountry": "Bangladesh",
  "billingCity": "Dhaka",
  "billingArea": "Banasree",
  "billingStreet": "Mollateghoria, Kushtia, 7000",
  "billingPostalCode": "7000",
  "billingLat": null,
  "billingLon": null,
  "status": "On Shipment",
  "createdAt": "2023-05-26T22:09:52.880Z",
  "updatedAt": "2023-05-26T22:10:07.000Z",
  "deletedAt": null,
  "products": [
      {
          "id": 26,
          "orderId": 12,
          "productId": 10,
          "skuId": 43,
          "brandId": null,
          "categoryId": 24,
          "sku": "SKU-WB-05647-0",
          "name": "Women Bag",
          "slug": "women-bag",
          "thumbnail": "upload/media/1680644420470.jpeg",
          "price": 100,
          "discountedPrice": 90,
          "tax": 0,
          "quantity": 2,
          "totalTax": 0,
          "subtotal": 180,
          "totalPrice": 180,
          "status": "Active",
          "createdAt": "2023-05-26T22:09:52.888Z",
          "updatedAt": "2023-05-26T22:09:52.888Z",
          "deletedAt": null,
          "category": {
              "id": 24,
              "shopId": 3,
              "parentId": 10,
              "logo": "upload/media/1680724725080.jpeg",
              "name": "test category 101",
              "slug": "test-category-101",
              "isFeatured": false,
              "status": "active",
              "leaf": false,
              "createdAt": "2023-04-07T23:13:47.401Z",
              "updatedAt": "2023-05-18T18:56:13.000Z",
              "deletedAt": null
          },
          "brand": null,
          "attributes": [
              {
                  "id": 50,
                  "orderProductId": 26,
                  "key": "Color",
                  "value": "Red",
                  "createdAt": "2023-05-26T22:09:52.894Z",
                  "updatedAt": "2023-05-26T22:09:52.894Z"
              },
              {
                  "id": 51,
                  "orderProductId": 26,
                  "key": "Gender",
                  "value": "Male",
                  "createdAt": "2023-05-26T22:09:52.896Z",
                  "updatedAt": "2023-05-26T22:09:52.896Z"
              }
          ]
      },
      {
          "id": 27,
          "orderId": 12,
          "productId": 11,
          "skuId": 45,
          "brandId": null,
          "categoryId": 22,
          "sku": "SKU-MPPfK-05930-0",
          "name": "Mamy Poko Pants for Kids",
          "slug": "mamy-poko-pants-for-kids",
          "thumbnail": "upload/media/1680672106538.jpeg",
          "price": 100,
          "discountedPrice": 80,
          "tax": 0,
          "quantity": 2,
          "totalTax": 0,
          "subtotal": 160,
          "totalPrice": 160,
          "status": "Active",
          "createdAt": "2023-05-26T22:09:52.898Z",
          "updatedAt": "2023-05-26T22:09:52.898Z",
          "deletedAt": null,
          "category": {
              "id": 22,
              "shopId": 3,
              "parentId": 24,
              "logo": "",
              "name": "Test Attributes 3",
              "slug": "test-attributes 3",
              "isFeatured": false,
              "status": "active",
              "leaf": true,
              "createdAt": "2023-04-07T20:47:40.068Z",
              "updatedAt": "2023-05-18T18:56:13.000Z",
              "deletedAt": null
          },
          "brand": null,
          "attributes": [
              {
                  "id": 52,
                  "orderProductId": 27,
                  "key": "size",
                  "value": "34",
                  "createdAt": "2023-05-26T22:09:52.899Z",
                  "updatedAt": "2023-05-26T22:09:52.899Z"
              },
              {
                  "id": 53,
                  "orderProductId": 27,
                  "key": "Color",
                  "value": "Red",
                  "createdAt": "2023-05-26T22:09:52.900Z",
                  "updatedAt": "2023-05-26T22:09:52.900Z"
              }
          ]
      },
      {
          "id": 28,
          "orderId": 12,
          "productId": 11,
          "skuId": 46,
          "brandId": null,
          "categoryId": 22,
          "sku": "SKU-MPPfK-05930-1",
          "name": "Mamy Poko Pants for Kids",
          "slug": "mamy-poko-pants-for-kids",
          "thumbnail": "upload/media/1680672106538.jpeg",
          "price": 100,
          "discountedPrice": 80,
          "tax": 0,
          "quantity": 1,
          "totalTax": 0,
          "subtotal": 80,
          "totalPrice": 80,
          "status": "Active",
          "createdAt": "2023-05-26T22:09:52.901Z",
          "updatedAt": "2023-05-26T22:09:52.901Z",
          "deletedAt": null,
          "category": {
              "id": 22,
              "shopId": 3,
              "parentId": 24,
              "logo": "",
              "name": "Test Attributes 3",
              "slug": "test-attributes 3",
              "isFeatured": false,
              "status": "active",
              "leaf": true,
              "createdAt": "2023-04-07T20:47:40.068Z",
              "updatedAt": "2023-05-18T18:56:13.000Z",
              "deletedAt": null
          },
          "brand": null,
          "attributes": [
              {
                  "id": 54,
                  "orderProductId": 28,
                  "key": "size",
                  "value": "35",
                  "createdAt": "2023-05-26T22:09:52.904Z",
                  "updatedAt": "2023-05-26T22:09:52.904Z"
              },
              {
                  "id": 55,
                  "orderProductId": 28,
                  "key": "Color",
                  "value": "Red",
                  "createdAt": "2023-05-26T22:09:52.905Z",
                  "updatedAt": "2023-05-26T22:09:52.905Z"
              }
          ]
      }
  ],
  "user": {
      "id": 5,
      "avatar": null,
      "firstName": "Mehedi Hassan",
      "lastName": "Durjoi",
      "email": "durjoi@inventiro.com",
      "phone": "8801789886616",
      "status": "active"
  },
  "timeline": [
      {
          "id": 28,
          "orderId": 12,
          "status": "Order Placed",
          "createdAt": "2023-05-26T22:09:52.906Z"
      },
      {
          "id": 29,
          "orderId": 12,
          "status": "Confirmed",
          "createdAt": "2023-05-26T22:09:59.570Z"
      },
      {
          "id": 30,
          "orderId": 12,
          "status": "Ready for Shipment",
          "createdAt": "2023-05-26T22:10:05.376Z"
      },
      {
          "id": 31,
          "orderId": 12,
          "status": "On Shipment",
          "createdAt": "2023-05-26T22:10:07.560Z"
      }
  ]
}

const PrintButton = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });

  return (
    <div style={{width: '100%'}}>
      <div className='print-top'>
        <button onClick={handlePrint} className='print-button'>Print</button>
      </div>
      <ComponentToPrint ref={componentRef} printContent={printContent}/>
    </div>
  );
};

export default PrintButton;
