import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import Moment from "react-moment";
//import PropTypes from "prop-types";
//import {connect} from "react-redux";
//import {Link} from "react-router-dom";
//import Moment from "react-moment";

const TagItem = ({ tag: {id, uhfId, status, locationId, updatedAt, createdAt}}) => {
    return (
        <Fragment>
            <tr>
                <td>{id}</td>
                <td>{uhfId}</td>
                <td>{status}</td>
                <td>{locationId}</td>
                <td>{updatedAt}</td>
                <td>{createdAt}</td>
                {/*<td><Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment></td>*/}
            </tr>
        </Fragment>

    );
};


export default TagItem;
