import React from 'react';

class CartItem extends React.Component{
	constructor(){
		super();
		this.state={
			price:999,
			title:"Phone",
			qty:1,
			img:""
		}

		//this.increaseQty = this.increaseQty.bind(this);
		// we can even bind the function when the constuctor is called
		// another solution is that we can use arrow functions
	}
	increaseQty=()=>{
		console.log(this.state);
	}
	render(){
		const {price,title,qty}=this.state;
		return (
			<div className='cart-item'>
				<div className="left-block">
					<img style={styles.images}/>
				</div>
				<div className="right-block">
					<div style={{fontSize:20}}>{title}</div>
					<div style={{color:'#777'}}>Rs {price}</div>
					<div style={{color:"#777"}}>Qty:{qty}</div>
					<div className="cart-item-actions">
					<img alt = "increase" 
					className="action-icons"
					 src="https://image.flaticon.com/icons/svg/864/864378.svg"
					 onClick={this.increaseQty}//as this depends on
					 // from which context hte funciton is called so 
					 // when react internally called the function
					 // then we get this as undefined so we need to bind the function 
					 	/>
					<img alt = "decrease"
					 className="action-icons" 
					 src="https://image.flaticon.com/icons/svg/864/864373.svg"
					 />
					<img alt = "delete"
					 className="action-icons"
					 src="https://image.flaticon.com/icons/svg/2089/2089743.svg"
					 />
					</div>
				</div>
			</div>

		)
	}
}


const styles = {
  images:{
    height:110,
    width:110,
    borderRadius:4,
    background:"#777"
  }
}

export default CartItem;