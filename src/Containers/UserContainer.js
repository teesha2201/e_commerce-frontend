import User from "../Component/User"
import {connect} from "react-redux"
import { addToCart,removeFromCart } from "../Services/Action/action";

const mapStateToProps = state =>({
        // data : state
        // data : state.cardItems.cardData
        data : state.cardItems
})
const mapDispatchToProps = dispatch =>({
    addToCartHandler :data =>dispatch(addToCart(data)),

    removeToCartHandler :data =>dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(User)
// export default User;
