package br.cefetmg.instituicao.Controller;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.cefetmg.instituicao.entity.Aluno;

@RestController
@RequestMapping({"/alunoteste"})
public class AlunoControllerM {

    private int nextId = 1;
    private List<Aluno> alunoList = new ArrayList<>();

    @PostMapping({"","/"})
    public Aluno inserir(@RequestBody Aluno aluno){
        aluno.setId(nextId);
        nextId++;
        alunoList.add(aluno);
        System.out.println("Aluno inserido com sucesso." + aluno);
        return aluno;
    }

    @GetMapping("/{id}")
    public Aluno consultarPorId(@PathVariable int id){
        for(Aluno aluno: alunoList){
            if(aluno.getId() == id){
                return aluno;
            }
        }
        return null;
    }

    @GetMapping({"","/"})
    public List<Aluno> consultarTodosAlunos(){
        return alunoList;
    }



}
