import { faArrowCircleLeft, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Pagination = ({paginate}) => {

    const pageNumbers = [1,2];

    return (
        <nav>
            <ul  className="pagination">
                <button onClick={() => paginate(pageNumbers[0])} className="left-btn"><FontAwesomeIcon icon={faArrowCircleLeft} /></button>
                <button onClick={() => paginate(pageNumbers[1])} className="right-btn"><FontAwesomeIcon icon={faArrowCircleRight} /></button>
            </ul>
        </nav>
    )
};

export default Pagination;