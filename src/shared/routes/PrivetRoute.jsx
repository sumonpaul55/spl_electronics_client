import { useContext } from 'react';
import PropTypes from "prop-types"
import { AuthContext } from '../contextApi/AuthProvider';
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (user && !loading) {
        return children
    }




    PrivetRoute.propTypes = {
        children: PropTypes.node
    }
}
export default PrivetRoute;