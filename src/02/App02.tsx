import {Capital} from "./Capital";
import {Bienvenu} from "./Bienvenu"
import {Etudiant} from "./Etudiant"



export function App02() {
    return (
        <div>
            <Capital pays="RCA" ville="Bangui"/>
            <Capital pays="France" ville="Paris"/>
            <Capital pays="Kenya" ville="Naïrobi"/>
            <Capital pays="Sénégal" ville="Dakar"/>
            <br/>
            <br/>
            <br/>
            <Bienvenu lang="en" name="Ashad"/>
            <Etudiant Nom="Red" Prenom="Shadi" Age={27}/>
        </div>
    )
}