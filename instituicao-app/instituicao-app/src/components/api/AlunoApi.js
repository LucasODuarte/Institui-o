import BaseApi from './BaseApi';

class AlunoApi extends BaseApi{

    getAlunos(setData){
        const method = "GET";
        const url = `${this.baseUrl}aluno`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getAlunosByName(setData, searchText){
        const method = "GET";
        const url = `${this.baseUrl}aluno/nome/${searchText}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getAlunosByNota(setData, nota){
        const method = "GET";
        const url = `${this.baseUrl}aluno/nota/${nota}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getAluno(setData, id){
        const method = "GET";
        const url = `${this.baseUrl}aluno/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirAluno(aluno){
        const method = "POST";
        const url = `${this.baseUrl}aluno`;
        console.log(url);
        super.myFetch({}, method, url, aluno);
    }

    alterarAluno(aluno){
        const method = "PUT";
        const url = `${this.baseUrl}aluno`;
        console.log(url);
        super.myFetch({}, method, url, aluno);
    }

    excluir(id){
        const method = "DELETE";
        const url = `${this.baseUrl}aluno/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default AlunoApi;