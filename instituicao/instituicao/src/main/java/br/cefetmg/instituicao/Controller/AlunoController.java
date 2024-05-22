package br.cefetmg.instituicao.Controller;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.cefetmg.instituicao.entity.Aluno;
import br.cefetmg.instituicao.service.AlunoService;

@RestController
@CrossOrigin(originPatterns = "*")
@RequestMapping({"/aluno"})
public class AlunoController {

    private final AlunoService alunoService;

    public AlunoController(AlunoService alunoService){
        this.alunoService = alunoService;
    }

    @PostMapping({"","/"})
    public Aluno inserir(@RequestBody Aluno aluno){
        aluno = alunoService.inserir(aluno);
        return aluno;
    }

    @GetMapping("nota/{nota}")
    public List<Aluno> consultarPorNota(@PathVariable int nota){
        return alunoService.consultarPorNota(nota);
    }

    @GetMapping("nome/{nome}")
    public List<Aluno> consultarPorNome(@PathVariable String nome){
        return alunoService.consultarPorNome(nome);
    }

    @GetMapping("/{id}")
    public Aluno consultarPorId(@PathVariable int id){
        return alunoService.consultarPorId(id);
    }

    @GetMapping({"","/"})
    public List<Aluno> consultarTodosAlunos(){
        return alunoService.consultarTodosAlunos();
    }

    @PutMapping({"","/"})
    public int updateAluno(@RequestBody Aluno aluno){
        return alunoService.update(aluno);  
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable int id){
        return alunoService.delete(id);
    }

}
