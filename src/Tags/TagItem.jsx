import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Moment from "react-moment";

const TagItem = ({
                     tag: {
                         _id,
                         tagId,
                         reader,
                         status,
                         longitude,
                         latitude,
                         locationId,
                         date,
                         //user,
                         //comments: { name, text },
                     },
                 }) => {
    return (
        <Fragment>
            <tr>
                <td><Link to={`/tag/${_id}`}>
                    {tagId}</Link></td>
                <td>{status}</td>
                <td>{reader}</td>
                <td>{longitude}</td>
                <td>{latitude}</td>
                <td>{locationId}</td>
                <td><Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment></td>
            </tr>
        </Fragment>

    );
};


export default TagItem;
