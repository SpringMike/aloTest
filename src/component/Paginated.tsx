import {Link} from "react-router-dom";

export type paginatedType = {
    totalPage: number,
    pageNumber: number,
    reload: (pageNumber: number) => void
}
const Paginated = ({totalPage, pageNumber, reload}: paginatedType) => {
    return (
        <nav>
            <ul className="pagination">
                {[...Array(totalPage)].map((c, index) =>
                    <div key={index}>
                        {
                            pageNumber === index ? (
                                <li className="page-item ">
                                    <Link className="page-link active disabled-link" onClick={() =>reload(index+1)} to="#">{index + 1}</Link>
                                </li>
                            ) : (
                                <li className="page-item">
                                    <Link className="page-link" onClick={() => reload(index+1)} to="#">{index + 1}</Link>
                                </li>
                            )
                        }
                    </div>
                )}
            </ul>
        </nav>
    )
}
export default Paginated
