import Swal from "sweetalert2";
import convert, {Category} from "../../customType/ICategory";

type CategoryDetailsProps = {
    category: Category;
    click: () => void
}

const CategoryDetails = ({category, click}: CategoryDetailsProps) => {
    Swal.fire(
        {
            icon: 'info',
            html: `
                <div class="text-start">
                    <p>Id: <span>${category.id}</span></p> 
                    <p>Desc: <span>${category.code}</span></p>
                    <p>Name: <span>${category.name}</span></p> 
                    <p>Desc: <span>${category.description}</span></p>
                    <p>Create date: <span>${convert(category.createdDate)}</span></p>
                    <p>Modified date: <span>${convert(category.modifiedDate)}</span></p>
                </div>
                `
        }
    ).then(() => {
        click()
    })
    return (
        <>

        </>
    )
}
export default CategoryDetails
