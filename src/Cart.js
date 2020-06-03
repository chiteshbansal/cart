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

	handleIncreaseQty=(product)=>{
			console.log('hey please increase the qty of ',product);
			const{products} = this.state;
			const index = products.indexOf(product);
			products[index].qty+=1;

			this.setState({
				products:products
			})
		}

		handleDecreaseQty=(product)=>{
			console.log('hey please decrease the qty of ',product);
			const{products} = this.state;
			const index = products.indexOf(product);
			if(products[index].qty>0)
				products[index].qty-=1;

			this.setState({
				products:products
			})
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
							onIncreaseQty={this.handleIncreaseQty}
							onDecreaseQty={this.handleDecreaseQty}
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