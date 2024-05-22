package br.cefetmg.instituicao.dao;

import java.util.List;

import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import br.cefetmg.instituicao.entity.Aluno;

@RegisterBeanMapper(Aluno.class)
public interface AlunoDao {
    
    @GetGeneratedKeys
    @SqlUpdate("insert into aluno (nome, nota) values (:nome, :nota)")
    int insert(@BindBean Aluno aluno);

    @SqlQuery("select * from aluno where id = :id;")
    Aluno get(@Bind("id") int id);

    @SqlQuery("select * from aluno order by nome;")
    List<Aluno> getAll();

    @SqlQuery("select * from aluno where nome like :nome order by nome;")
    List<Aluno> getAllByName(@Bind("nome") String nome);

    @SqlUpdate("update aluno set nome = :nome, nota = :nota where id = :id;")
    int update(@BindBean Aluno aluno);

    @SqlUpdate("delete from aluno where id = :id;")
    int delete(@Bind("id") int id);

    @SqlQuery("select * from aluno where nota >= :nota;")
    List<Aluno> getAllByNota(@Bind("nota") int nota);
}
