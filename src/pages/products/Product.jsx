import React, { } from 'react';
import PropTypes from "prop-types"
const Product = ({ product }) => {

    return (
        <>
            <div>
                {product.productName}
            </div>
        </>
    );
};
Product.propTypes = {
    product: PropTypes.object,
    name: PropTypes.string
}
export default Product;