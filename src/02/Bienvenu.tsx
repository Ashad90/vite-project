interface Props {
    lang?: string
    name: string
}

export function Bienvenu(props: Props) {

    if (props.lang == "en") {
        return (
            <p>Hello <strong>{props.name}</strong></p>
        )
    }
    
    return(
        <h1>Bienvenu <strong>{props.name}</strong></h1>
    )
}