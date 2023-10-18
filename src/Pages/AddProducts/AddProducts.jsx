const AddProducts = () => {
    return (
        <div className="md:max-w-4xl lg:max-w-5xl mx-auto my-4 p-6">
            <h1 className="text-center text-2xl font-bold py-12">Add Your Product</h1>
            <form className="space-y-4 font-rancho">
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
                        {/* <input type="text" name="type" placeholder="Enter product type" className="input input-bordered" required /> */}
                        <select name="" id="" className="input input-bordered text-gray-400" required>
                            <option value="">Select one type</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Watch">Watch</option>
                            <option value="Headphone">Headphone</option>
                            <option value="Earphone">Earphone</option>
                            <option value="Cooler">Cooler</option>
                        </select>
                    </div>
                </div>
                <div className="flex lg:flex-row md:flex-col flex-col gap-4 items-center font-Montserrat">
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
                        <input type="text" name="shortDescription" placeholder="Enter product short description" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex flex-col  gap-4 items-center font-Montserrat">
                    <div className="flex items-center gap-3 w-full">
                        <label className="">
                            <span className="text-lg font-medium font-tavi">Rating</span>
                        </label>
                        {/* <input type="text" name="rating" placeholder="Enter product rating" className="input input-bordered" required /> */}
                        <select name="" id="" className="input input-bordered text-gray-400" required>
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