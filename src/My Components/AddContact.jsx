import { MdAdd } from "react-icons/md";
function AddContact() {
    return (
        <div className="ml-10 pr-10">
            <p className="relative left-16 p-2 bg-blue-400 max-w-max rounded-sm mt-2 ml-4 mb-2">Add New</p>
            <div className="mb-2"> <p className="font-normal text-2xl pb-2">
                Enter the name:
            </p>
                <input type="text" placeholder="Enter the Name" className="border rounded-sm border-blue-300" /></div>
           <div className="mb-2">
           <p className="font-normal text-2xl pb-2">
                Enter the Number:
            </p>
            <input type="text" placeholder="Enter the Number" className="border rounded-sm border-blue-300" />
           </div>
           <button className="relative left-16 pl-2 pr-5 pt-1 pb-1 font-semibold bg-blue-400 max-w-max rounded-sm mt-2 ml-4 mb-2 flex align-middle"> 
            <div className="relative top-1 right-1">
            <MdAdd />
            </div>
            Add</button>
        </div>
    )
}
export default AddContact