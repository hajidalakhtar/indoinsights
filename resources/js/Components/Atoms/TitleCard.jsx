export default function TitleCard({ title, fontSize, extendClass }) {
    return (
        <h1 className={`font-bold ${fontSize} ${extendClass}`}>{title}</h1>
    );
}
