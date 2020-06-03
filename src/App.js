import React from 'react';
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from 'firebase';


class App extends React.Component{

	constructor(){
		super();
		this.state={
		products:[],
		Loading:true
		}		
	}	

	componentDidMount(){

		//We can also added products directly 
		// or we can also use the snapshot event handler

		// firebase
		//  .firestore()
		//  .collection('products')
		//  .get()
		//  .then((snapShot)=>{
		//  	console.log(snapShot);

		//  	snapShot.docs.map((doc)=>{
		//  		console.log(doc.data());
		//  	})

		//  	const products = snapShot.docs.map((doc)=>{

		//  		const data = doc.data();
		//  		data['productId']=doc.id;
		//  		return data;
		//  	})

		//  	this.setState({
		//  		products:products,
		//  		Loading:false
		//  	})
		//  })

		// adding event handle for the firebase
		// any update in the data at firestore 
		// will trigger this function
		firebase
		 .firestore()
		 .collection('products')
		 .onSnapshot((snapShot)=>{

		 	const products = snapShot.docs.map((doc)=>{

		 		const data = doc.data();
		 		data['productId']=doc.id;
		 		return data;
		 	})

		 	this.setState({
		 		products:products,
		 		Loading:false
		 	})
		 })

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

	// adding products to the firebase
	addProduct = () => {
		firebase
		 .firestore()
		 .collection('products')
		 .add({
		 	img:'',
		 	qty:3,
		 	price:900,
		 	title:"tv"
		 })
		 .then((docRef)=>{
		 	console.log("Product  is added: ",docRef);
		 })
	}

	render(){
		const {products,Loading}=this.state;
		return (
			<div className="App">
				<Navbar count ={this.getProductCount()}/>
				<button onClick={this.addProduct} style={{padding:10,fontWeigth:'bold'}}>Add a product</button>
			  	<Cart 
			  		products={products}
			  		onIncreaseQty={this.handleIncreaseQty}
					onDecreaseQty={this.handleDecreaseQty}
					onDelete = {this.handleDelete}
			  	/>
			  	{Loading && <h1>Loading Products ...</h1>}
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
