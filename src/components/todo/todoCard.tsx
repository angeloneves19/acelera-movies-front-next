export const ToDoCard = ({ name, description }: { name: string, description: string }) => {
    return (
        <div>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    )
}