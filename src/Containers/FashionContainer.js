import Fashion from "../Component/Fashion"
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

export default connect(mapStateToProps,mapDispatchToProps)(Fashion)