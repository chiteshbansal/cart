import React from 'react';
import CartItem from "./CartItem";

class Cart extends React.Component{

	constructor(){
		super();
		this.state={
		products:[
			{
				price:999,
				title:"Watch",
				qty:1,
				img:"",
				productId:1
			},
			{
				price:9949,
				title:"Shoes",
				qty:1,
				img:"",
				productId:2
			},
			{
				price:99984,
				title:"Laptop",
				qty:1,
				img:"",
				productId:3
			},
			{
				price:999,
				title:"Phone",
				qty:1,
				img:"",
				productId:4
			}
		]
		}	
	}	
	render(){
		const{products}=this.state;
		return (
			<div className='cart'>
				{products.map((product)=>{
					return (
						<CartItem
						product={product}
						 key={product.productId}
						  />
						)

					}
				)
			}
				
			</div>
		)
	}
}




export default Cart;