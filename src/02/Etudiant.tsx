interface Props {
    Nom: string
    Prenom: string
    Age: number
}

export function Etudiant(props: Props) {
    return(
        <div>
            <h1>Etudiant: {props.Nom} {props.Prenom}</h1>
            <p>Age: {props.Age}</p>
        </div>
    )
}