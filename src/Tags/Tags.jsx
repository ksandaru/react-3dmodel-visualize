import React, {Fragment, useEffect, useState, useRef} from "react";
import PropTypes from "prop-types";
//import {connect} from "react-redux";
//import Spinner from "../layout/Spinner";
//import TagItem from "./TagItem";
import axios from "axios";
import TagItem from "./TagItem";


const Tags = () => {
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(true)

    const getResults = async () => {
        setTimeout(() => setFlag(!flag), 2000)
        const {data: response} = await axios.get('http://localhost:8081/api/uhftags');
        setData(response.data);
        console.log(response.data)

    }
    useEffect(() => {
        getResults();
    }, [flag])


    return (
        <Fragment>
            <div>
                <table className="table table-hover table-dark">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">EPC(UHFID)</th>
                        <th scope="col">Status</th>
                        <th scope="col">LocationID</th>
                        <th scope="col">Last Update</th>
                        <th scope="col">CreatedAt</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(tag => <TagItem key={tag.id} tag={tag} name="kamnajd" />)}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )


}

export default Tags;
// const Tags = ({getTags, tag: {tags, loading}}) => {
//     useEffect(() => {
//         getTags();
//     }, []);
//
//
//     //const tagRows = tags.map(tag=> <TagItem key={tag._id} tag={tag}/>)
//     return (
//         <Fragment>
//             {loading ? (
//                 <Spinner/>
//             ) : (
//                 <Fragment>
//                     <h1 className="large text-primary">Tags</h1>
//                     <p className="lead">
//                         <i className="fab fa-connectdevelop"></i>
//                         browse and operate tags
//                     </p>
//                     <div>
//                         {tags.length > 0 ?
//                             <table className="table table-hover">
//                                 <thead>
//                                 <tr>
//                                     <th scope="col">ID</th>
//                                     <th scope="col">Status</th>
//                                     <th scope="col">Reader</th>
//                                     <th scope="col">Longitude</th>
//                                     <th scope="col">Latitude</th>
//                                     <th scope="col">LocationID</th>
//                                     <th scope="col">Created At</th>
//                                 </tr>
//                                 </thead>
//                                 <tbody>
//                                 {tags.map(tag => <TagItem key={tag._id} tag={tag}/>)}
//                                 </tbody>
//                             </table>
//
//                             : (
//                                 <h4>No tags available..</h4>
//                             )}
//                     </div>
//                 </Fragment>
//             )}
//         </Fragment>
//     );
// };
//
// Tags.propTypes = {
//     getTags: PropTypes.func.isRequired,
//     tag: PropTypes.object.isRequired,
// };
// const mapStateToProps = state => ({
//     tag: state.tag,
// });
//
// export default connect(mapStateToProps, {getTags})(Tags);
