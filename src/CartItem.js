import React from 'react';

class CartItem extends React.Component{

	render(){	
		console.log("this.props",this.props);	
		const {price,title,qty}=this.props.product;
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
						 onClick={()=>{this.props.onIncreaseQty(this.props.product)}}
					 	/>
					<img alt = "decrease"
						 className="action-icons" 
						 src="https://image.flaticon.com/icons/svg/864/864373.svg"
						 onClick={()=>{this.props.onDecreaseQty(this.props.product)}}
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