import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProducts = () => {
    const navigate = useNavigate()
    const handleAddProduct = (e) => {
        e.preventDefault()
        console.log("Clicked")

        const form = e.target
        const image = e.target.image.value
        const name = e.target.name.value
        const brandNameUp = e.target.brandName.value
        const type = e.target.type.value
        const price = e.target.price.value
        const shortDescription = e.target.shortDescription.value
        const rating = e.target.rating.value

        const brandName = brandNameUp.toLowerCase()
        const addProduct = { image, name, brandName, type, price, shortDescription, rating }
        console.log(addProduct)

        fetch("https://fusion-electro-hub-server-side-2zf0lc9jf.vercel.app/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {

                    Swal.fire({
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: true,
                        timer: 1500
                    })
                    form.reset()
                    navigate('/')
                }
            })
    }
    return (
        <div className="md:max-w-4xl lg:max-w-5xl mx-auto my-4 p-6">
            <h1 className="text-center text-2xl font-bold py-12">Add Your Product</h1>
            <form className="space-y-4 font-rancho" onSubmit={handleAddProduct}>
                <div className="flex lg:flex-row md:flex-col flex-col  gap-4  items-center font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="Enter product image URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter product name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Brand Name</span>
                        </label>
                        <input type="text" name="brandName" placeholder="Enter product brand Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Type</span>
                        </label>
                        <select name="type" id="" className="input input-bordered text-gray-400" required>
                            <option value="">Select one type</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Television">Television</option>
                            <option value="Watch">Watch</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Cooler">Cooler</option>
                        </select>
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4 font-Montserrat">
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter product price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full md:w-1/2 lg:w-1/2">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Short Description</span>
                        </label>
                        <textarea placeholder="Bio" name="shortDescription" className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>
                    </div>
                </div>
                <div className="flex flex-col  gap-4 items-center font-Montserrat">
                    <div className="flex items-center gap-3 w-full">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Rating</span>
                        </label>
                        <select name="rating" id="" className="input input-bordered text-gray-400" required>
                            <option value="">Select a rating number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="flex  flex-col gap-4 items-center font-Montserrat">
                        <div className="form-control w-full pb-8 lg:pb-10">
                            <input type="submit" value="Add product" className="input input-bordered font-bold bg-[#D2B48C]" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;