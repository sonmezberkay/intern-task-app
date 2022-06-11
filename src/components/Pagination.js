import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const Pagination = ({paginate}) => {

    const pageNumbers = [1,2];

    return (
        <nav>
            <ul  className="pagination">
                <Link onClick={() => paginate(pageNumbers[0])} className="left-btn"><FontAwesomeIcon icon={faArrowCircleLeft} /></Link>
                <Link onClick={() => paginate(pageNumbers[1])} className="right-btn"><FontAwesomeIcon icon={faArrowCircleRight} /></Link>
            </ul>
        </nav>
    )
};

export default Pagination;