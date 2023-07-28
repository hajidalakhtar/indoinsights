export default function CreateWidgetCard({title, description, icon, button}) {
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
                    {button}
                </div>
            </div>
        </div>
    )
}

