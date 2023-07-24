export default function CreateWidgetCard({title, description, icon, buttonTitle, buttonAction}) {
    return (
        <div className="rounded-lg border bg-white mb-3 ">
            <div className="p-2 mt-1 ">
                <div className="flex items-center px-1">
                    {icon}
                    <div className="flex flex-col ">
                                                <span
                                                    className="text-sm	font-bold text-black-alt ">{title}</span>
                        <span className="text-sm font-normal">
                            {description}
                        </span>
                    </div>

                </div>
                <div className=" mt-4 mb-2 px-2">
                    <button
                        onClick={buttonAction}
                        className="w-full bg-blue-500 text-md text-white font-black rounded-full  py-1.5 ml-auto ">
                        {buttonTitle}
                    </button>
                </div>
            </div>
        </div>
    )
}

