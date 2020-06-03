import React from 'react';
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component{

	constructor(){
		super();
		this.state={
		products:[
			{
				price:999,
				title:"Watch",
				qty:1,
				img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
				productId:1
			},
			{
				price:9949,
				title:"Shoes",
				qty:1,
				img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
				productId:2
			},
			{
				price:99984,
				title:"Laptop",
				qty:1,
				img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
				productId:3
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
	handleDelete=(id)=>{
		const{products} = this.state;
		const items = products.filter((item)=>(item.productId!=id));

		this.setState({
			products:items
		})
	}

	getProductCount=()=>{
		let count = 0;
		const {products} =this.state;

		products.forEach((product)=>{
			count+=product.qty;

			
		})
		return count;
	}

	getCartTotal=()=>{
		const {products} = this.state;
		let total = 0;

		products.forEach((product)=>{
			total+=product.qty*product.price;
		})

		return total;
	}

	render(){
		const {products}=this.state;
		return (
			<div className="App">
				<Navbar count ={this.getProductCount()}/>
			  	<Cart 
			  		products={products}
			  		onIncreaseQty={this.handleIncreaseQty}
					onDecreaseQty={this.handleDecreaseQty}
					onDelete = {this.handleDelete}
			  	/>
			  	<div style={styles.CartTotal}>Total:{this.getCartTotal()}</div>
			</div>
		);
	}
}

const styles ={
	CartTotal:{
		display:'inline-block',
		fontWeigth:'bold',
		boxShadow:"0px 0px 4px 2px rgba(0,0,0,0.5)",
		padding:10
	}
}




export default App;
