import {Link} from "react-router-dom";
import AlunoForm from "./AlunoForm";

function AlunoIncluir(){
    return(
        <>
            <Link to={"/"}>Home</Link> / <Link to={"/aluno/list"}>Aluno Lista</Link> / Aluno Incluir

            <h1>Aluno Incluir:</h1>
            <br/>
            <AlunoForm/>
        </>

    );
}

export default AlunoIncluir;