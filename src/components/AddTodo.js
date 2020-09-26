import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddTodo = ({
    inputText,
    setInputText,
    inputDate,
    setInputDate,
    inputTime,
    setInputTime,
    todos,
    setTodos,
}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const inputDateHandler = (e) => {
        setInputDate(e.target.value);
    };

    const inputTimeHandler = (e) => {
        console.log(e.target.value);
        setInputTime(e.target.value);
    };

    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { id: Math.random() * 1000, text: inputText, completed: false, date: inputDate, time: inputTime },
        ]);
        setInputText('');
        setInputDate('');
        setInputTime('');
        handleClose();
    };

    return (
        <div id='add-todo'>
            <div className='flex-container'>
                <div>
                    <p className='allTasks-title'>All Tasks</p>
                </div>
                <div>
                    <button className='add-btn' onClick={handleShow}>
                        ADD
                    </button>
                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>ADD TODO ITEM</Modal.Title>
                        </Modal.Header>
                        <Modal.Body closeButton>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Todo Name</Form.Label>
                                    <Form.Control
                                        value={inputText}
                                        onChange={inputTextHandler}
                                        type='text'
                                        placeholder='Enter todo name'
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control value={inputDate} onChange={inputDateHandler} type='date' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control value={inputTime} onChange={inputTimeHandler} type='time' />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} id='modal-close'>
                                CLOSE
                            </Button>
                            <Button onClick={addTodoHandler} id='modal-add'>
                                ADD
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <hr className='task-line' />
        </div>
    );
};

export default AddTodo;
