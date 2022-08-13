import CategoryItem from "./CategoryItem";
import {useEffect, useState} from "react";
import {getPaginatedPageCategories} from "../../api/CallApi";
import Paginated from "../Paginated";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    const [reload, setReload] = useState(false);

    const [totalPage, setTotalPage] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const handleReload = () => {
        setReload(() => !reload)
    }

    const getPaginated = async (pageNumber: number) => {
        await getPaginatedPageCategories(pageNumber, 3).then((cate) => {
            setCategories(cate.data.content)
            setTotalPage(cate.data.totalPages)
            setPageNumber(cate.data.number)
        })
    }


    useEffect(() => {
        getPaginated(1).then()
    }, [reload])

    return (
        <div style={{width: '1200px'}}>
            <h1>Category list</h1>
            <table className="table table-bordered ">
                <thead className="table-dark ">
                <tr>
                    <th className="align-middle text-center">Id</th>
                    <th className="align-middle text-center">Code</th>
                    <th className="align-middle text-center">Name</th>
                    <th className="align-middle text-center">Desc</th>
                    <th className="align-middle text-center">Create date</th>
                    <th className="align-middle text-center">Modified date</th>
                    <th className="align-middle text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    categories?.map((category, index) => (
                            <tr key={index}>
                                <CategoryItem reload={handleReload} key={index} category={category}/>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            <Paginated totalPage={totalPage} pageNumber={pageNumber} reload={getPaginated}/>
        </div>
    )

}
export default CategoryList
