import {useState} from "react";
import CategoryDetails from "./CategoryDetails";
import convert, {Category} from "../../customType/ICategory";
import {deleteCategory} from "../../api/CallApi";
import ToastCustom from "../Toast";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";

type CategoryItemProps = {
    category: Category
    reload: () => void;
}

const CategoryItem = ({category, reload}: CategoryItemProps) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(() => !isClicked)
    }

    const handleDelete = (id: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(id).then(() => {
                    ToastCustom.fire({
                        icon: 'success',
                        title: 'Delete category successfully'
                    }).then(r => {
                    })
                    reload()
                })
            }
        })
    }
    return (
        <>
            <td className="align-middle text-center">{category.id}</td>
            <td className="align-middle text-center">{category.code}</td>
            <td className="align-middle text-center">{category.name}</td>
            <td className="align-middle text-center">{category.description}</td>
            <td className="align-middle text-center">{convert(category.createdDate)}</td>
            <td className="align-middle text-center">{convert(category.modifiedDate)}</td>
            <td>
                <button className="btn btn-primary" onClick={handleClick}>Show detail</button>
                {
                    isClicked ? <CategoryDetails category={category} click={handleClick}/> : <></>
                }
                {
                    <>
                        <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
                        <Link to={`/category/update/${category.id}`}>
                            <button className="btn btn-warning">
                                Edit
                            </button>
                        </Link>
                    </>
                }

            </td>
        </>
    )
}
export default CategoryItem
