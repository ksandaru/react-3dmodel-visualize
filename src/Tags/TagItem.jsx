import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import Moment from "react-moment";
//import PropTypes from "prop-types";
//import {connect} from "react-redux";
//import {Link} from "react-router-dom";
//import Moment from "react-moment";

const TagItem = ({ tag: {id, fullName, status, nic, district, city}}) => {
    return (
        <Fragment>
            <tr>
                <td>{id}</td>
                <td>{fullName}</td>
                <td>{status}</td>
                <td>{nic}</td>
                <td>{district}</td>
                <td>{city}</td>
                {/*<td><Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment></td>*/}
            </tr>
        </Fragment>

    );
};


export default TagItem;
