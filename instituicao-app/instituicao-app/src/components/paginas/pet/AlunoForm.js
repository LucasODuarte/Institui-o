import {Col, Row, Form, Button, Stack} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import AlunoApi from "../../api/AlunoApi";

function AlunoForm({id}){

    const [nome, setNome] = useState("");
    const [nota, setNota] = useState("");
    const navigate = useNavigate();

    function setAluno(aluno){
        setNome(aluno.nome);
        setNota(aluno.nota);
    }

    useEffect(() => {
        if(id){
            console.log("Consultar aluno por ID: " + id);
            const alunoApi = new AlunoApi();
            alunoApi.getAluno(setAluno, id);
        }
    }, [id]);

    function cadastrarAluno(e) {
        e.preventDefault();
        var aluno = {id: id, nome: nome, nota: nota};
        console.log(JSON.stringify(aluno));
        console.log("Cadastrando Aluno...");

        const alunoApi = new AlunoApi();
        if (id){
            alunoApi.alterarAluno(aluno);
        }else{
            alunoApi.incluirAluno(aluno);
        }

        navigate(`/aluno/list`);
    }

    return(
        <Container>
            <Form onSubmit={cadastrarAluno}>
                <Row>
                    <Col sm="6">
                        {id && (
                            <Form.Group as={Row} className="mb-3" controlId="id">
                                <Form.Label column sm="2">
                                    ID
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue={id} />
                                </Col>
                            </Form.Group>
                        )}

                        <Form.Group as={Row} className="mb-3" controlId="nome">
                            <Form.Label column sm="2">
                                NOME
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nome Aluno" defaultValue={nome} onChange={(e) => setNome(e.target.value)} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="nota">
                            <Form.Label column sm="2">
                                NOTA
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Nota" defaultValue={nota} onChange={(e) => setNota(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <br/>


                        <Row className="justify-content-md-center">
                            <Col xl={12}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2">
                                        <Link to="/aluno/list">
                                            <Button variant="danger">
                                                Cancelar
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="p-2 ms-auto">
                                        <Button variant="primary" type="submit">
                                            Confirmar
                                        </Button>
                                    </div>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default AlunoForm;