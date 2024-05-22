package br.cefetmg.instituicao.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Aluno {
    private int id;
    private String nome;
    private int nota;
}
