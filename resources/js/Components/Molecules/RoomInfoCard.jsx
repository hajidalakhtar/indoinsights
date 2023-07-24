import {Button} from "@/Components/Atoms/Index.jsx";

export default function RoomInfoCard({name, description, id}) {
    return (
        <div className="">
            <div className="rounded-lg bg-white border mb-4">
                <div className="p-3">
                    {/*<div className="h-16 -m-3 -mb-6 rounded-lg bg-cover bg-100%"*/}
                    {/*     style={{*/}
                    {/*         backgroundImage: `url("https://asset.kompas.com/crops/f_n7pTyUiR0ZFvXeVeJ5vf_zocY=/0x0:780x520/750x500/data/photo/2022/10/17/634d709a4065c.jpg")`*/}

                    {/*     }}*/}
                    {/*>*/}
                    {/*</div>*/}
                    <div>
                        <div className="inline-flex items-center">
                            {/*<img*/}
                            {/*    src={postData.room.icon}*/}
                            {/*    className="h-10 my-3 mr-3"/>*/}
                            <span className="text-2xl font-black  mb-2 ">{name}</span>

                        </div>
                        <p className="font-normal mb-3 text-md leading-normal">{description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}




