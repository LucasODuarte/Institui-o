import {Button, Col, Form, Modal, Row, Stack, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {BsFillPencilFill, BsFillTrashFill} from "react-icons/bs";
import {useEffect, useState} from "react";
import AlunoApi from "../../api/AlunoApi";

function AlunoList(){

    const [show, setShow] = useState(false);
    const [idDelete, setIdDelete] = useState(false);
    const [alunoList, setAlunoList] = useState([]);
    const [searchText, setSearchName] = useState("");

    const alunoApi = new AlunoApi();

    function handleShow(id) {
        setIdDelete(id);
        setShow(true);
    }

    function handleClose() {
        setShow(false);
    }

    function handleExcluir() {
        setShow(false);
        alunoApi.excluir(idDelete);
        console.log(`Excluido o Aluno com ID: ${idDelete}`);
        consultarEPrecherTable();
    }

    function submitSearchAluno(e) {
        e.preventDefault();
        consultarEPrecherTable();
    }

    useEffect(() => {
        consultarEPrecherTable();
    }, []);

    function consultarEPrecherTable(){
        if (searchText.trim().length > 0){
            alunoApi.getAlunosByName(setAlunoList, searchText);
        }else{
            alunoApi.getAlunos(setAlunoList);
        }
    }

    return(
        <>
            <Container>
                <br/>
                <Row>
                    <Col xl={10}>
                        <Form onSubmit={submitSearchAluno}>
                            <Form.Group className="mb-3" controlId="searchText">
                                <Form.Control type="text" placeholder="Nome do Aluno:" onChange={(e)=>setSearchName(e.target.value)}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col xl={2}>
                        <Link to="/aluno/incluir">
                            <Button>+</Button>
                        </Link>
                    </Col>
                </Row>
                <br/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>NOTA</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        alunoList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.nota}</td>
                                <td>
                                    <Stack direction="horizontal" gap={3}>
                                        <div className="ms-auto">
                                            <Button variant="danger" size="sm" onClick={(e) =>handleShow(item.id)}>
                                                <BsFillTrashFill/>
                                            </Button>
                                        </div>
                                        <div className="">
                                            <Link to={`/aluno/alterar/${item.id}`}>
                                                <Button size="sm"><BsFillPencilFill/></Button>
                                            </Link>
                                        </div>
                                    </Stack>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Confirma Exclusão do Aluno {idDelete}?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="danger" onClick={handleExcluir}>
                            Excluir
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default AlunoList;