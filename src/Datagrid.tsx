
interface Item {
    id: number
}
interface DataFridProps<T> {
    items: T[];
}

export default function DataGrid<T extends Item>({items}: DataFridProps<T>){
    return(
        <>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{JSON.stringify(item)}</li>
            ))}
        </ul>
        </>
    )
}