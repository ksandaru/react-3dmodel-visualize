import React, {Fragment, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Spinner from "../layout/Spinner";
import TagItem from "./TagItem";

const Tags = ({getTags, tag: {tags, loading}}) => {
    useEffect(() => {
        getTags();
    }, []);


    //const tagRows = tags.map(tag=> <TagItem key={tag._id} tag={tag}/>)
    return (
        <Fragment>
            {loading ? (
                <Spinner/>
            ) : (
                <Fragment>
                    <h1 className="large text-primary">Tags</h1>
                    <p className="lead">
                        <i className="fab fa-connectdevelop"></i>
                        browse and operate tags
                    </p>
                    <div>
                        {tags.length > 0 ?
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Reader</th>
                                    <th scope="col">Longitude</th>
                                    <th scope="col">Latitude</th>
                                    <th scope="col">LocationID</th>
                                    <th scope="col">Created At</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tags.map(tag => <TagItem key={tag._id} tag={tag}/>)}
                                </tbody>
                            </table>

                            : (
                                <h4>No tags available..</h4>
                            )}
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

Tags.propTypes = {
    getTags: PropTypes.func.isRequired,
    tag: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
    tag: state.tag,
});

export default connect(mapStateToProps, {getTags})(Tags);
