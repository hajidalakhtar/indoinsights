import {TitleCard} from "@/Components/Atoms/Index.jsx";

export default function TipsCard({title, children}) {
    return (
        <div
            className={` rounded-lg border border-b-1 p-5 w-full col-span-3  w-100 bg-white `}>
            <TitleCard title={title} fontSize={"text-lg"}/>
            {children}
        </div>
    )
}
