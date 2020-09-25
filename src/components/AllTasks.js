import React, { useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import { Modal, Button, Form } from 'react-bootstrap';

const AllTasks = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div id='all-tasks'>
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
                            <Modal.Title>Add Todo Item</Modal.Title>
                        </Modal.Header>
                        <Modal.Body closeButton>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Todo Name</Form.Label>
                                    <Form.Control type='email' placeholder='Enter todo name' />
                                </Form.Group>
                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type='date' />
                                </Form.Group>
                                <Form.Group controlId='formBasicPassword'>
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control type='time' />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant='primary' onClick={handleClose}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button'>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button'>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button'>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
            <div className='flex-container'>
                <div className='todo-item'>
                    <input type='checkbox' />
                    <span>Meeting With Friends</span>
                </div>
                <div>
                    <a type='button'>
                        <MdEdit className='edit-icon' />
                    </a>
                    <a type='button'>
                        <MdDelete className='delete-icon' />
                    </a>
                </div>
            </div>
            <small className='deadline'>Today, 9:00 PM</small>
            <hr className='task-line' />
        </div>
    );
};

export default AllTasks;
