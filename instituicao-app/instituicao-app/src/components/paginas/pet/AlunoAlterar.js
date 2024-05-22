import {Link, useParams} from "react-router-dom";
import AlunoForm from "./AlunoForm";

function AlunoAlterar(){
    const {id} = useParams(); //Utilizado a partir da versao 6 do react-router.

    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"/pet/list"}>Aluno Lista</Link> / Aluno Alterar

            <h1>Aluno Alterar:</h1>
            <br/>
            <AlunoForm id={id}/>
        </>

    );
}

export default AlunoAlterar;