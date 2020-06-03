import React from 'react';

const Navbar = (props)=>{
		return (
			<div className="navbar" style={styles.navbar}>
				<div className="carticonContainer" style={styles.carticonContainer}>
					<img 
						src = "https://image.flaticon.com/icons/svg/833/833339.svg" 
						alt = "cart-icon"
						style={styles.cart_icon}
					/>
					<span 
						style={styles.cartitemCount}
						className='cartitemCount'
						>
						{props.count}
					</span>
				</div>
			</div>

		)
}


const styles = {
	navbar:{
		backgroundColor:'blue',
		display:'flex',
		flexDirection:'row-reverse'
	},

	cart_icon:{
		height:30,
		width:30,
		padding:15,
		marginRight: 20,
		color:'white',
	},
	cartitemCount:{
		background: 'yellow',
	    borderRadius: '50%',
	    padding: '4px 8px',
	    position: 'absolute',
	    right: 20,
	    top: 0
	},
	carticonContainer:{
		position:'relative'
	}
}

export default Navbar;