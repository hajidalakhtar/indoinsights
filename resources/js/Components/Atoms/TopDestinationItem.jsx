export default function TopDestinationItem({title}) {
    return (
        <li className=" border border-dark rounded-lg flex flex-row mb-2  transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:shadow-lg">
            <div
                className="select-none cursor-pointer rounded-md flex flex-1 items-center p-2  ">
                <div
                    className=" bg-cover bg-[url('https://bobobox.com/blog/wp-content//uploads/2022/09/ranca-upas.jpg')] flex flex-col rounded-md w-16 h-16 bg-gray-300 justify-center items-center mr-2.5">
                </div>
                <div className="flex-1  ">
                    <div className="font-medium text-md">{title}</div>
                    <div className="font-medium text-xs"><span>5 Upvote</span></div>
                </div>
            </div>
        </li>

    )
}
