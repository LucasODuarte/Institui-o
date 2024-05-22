package br.cefetmg.instituicao.service;

import java.util.List;

import org.jdbi.v3.core.Jdbi;
import org.springframework.stereotype.Service;

import br.cefetmg.instituicao.dao.AlunoDao;
import br.cefetmg.instituicao.entity.Aluno;

@Service
public class AlunoService {
    

    private final AlunoDao alunoDao;

    public AlunoService(Jdbi jdbi){
        this.alunoDao = jdbi.onDemand(AlunoDao.class);
    }

    public Aluno inserir(Aluno aluno){
        int idAluno = alunoDao.insert(aluno);
        aluno.setId(idAluno);
        return aluno;
    }

    public List<Aluno> consultarTodosAlunos(){
        return alunoDao.getAll();
    }

    public Aluno consultarPorId(int id){
        return alunoDao.get(id);
    }

    public List<Aluno> consultarPorNota(int nota){
        return alunoDao.getAllByNota(nota);
    }

    public List<Aluno> consultarPorNome(String nome){
        return alunoDao.getAllByName(nome);
    }

    public int update(Aluno aluno){
        return alunoDao.update(aluno);  
    }

    public int delete(int id){
        return alunoDao.delete(id);
    }

}
