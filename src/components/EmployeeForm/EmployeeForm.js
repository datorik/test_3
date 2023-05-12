import React, {useEffect, useState} from 'react';
import {Form, Modal} from 'rsuite';
import {getEmployeesInfo} from "../../actions/employees";

const EmployeeForm = ({openEdit , handleEditClose, employeesID}) => {
    const [data, setData] = useState({
        name: '',
        surname: '',
        position: '',
        email: '',
        phone: '',
        boss_id: '',
        notes: ''

    });

    const handleOpen = () => {
        getEmployeesInfo(employeesID).then(response => {
            console.log(response)
            setData({
                name: response.name,
                surname: response.surname,
                position: response.position,
                email: response.email,
                phone: response.phone,
                boss_id: response.boss_id || 'I am the boss',
                notes: response.notes
            })
        })
    };
    return (
        <Modal open={openEdit}
               onClose={handleEditClose}
               onOpen ={handleOpen}
               size="xs">
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Name</Form.ControlLabel>
                        <Form.Control name="name" value ={data.name}/>
                    </Form.Group>

                    <Form.Group controlId="surname">
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="surname" value ={data.surname}/>
                    </Form.Group>

                    <Form.Group controlId="position">
                        <Form.ControlLabel>Position</Form.ControlLabel>
                        <Form.Control name="position" value={data.position}/>
                    </Form.Group>


                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" value={data.email}/>
                    </Form.Group>

                    <Form.Group controlId="phone">
                        <Form.ControlLabel>Phone</Form.ControlLabel>
                        <Form.Control name="phone" value={data.phone}/>
                    </Form.Group>

                    <Form.Group controlId="boss_id">
                        <Form.ControlLabel>Boss (id)</Form.ControlLabel>
                        <Form.Control name="boss_id" value={data.boss_id}/>
                    </Form.Group>

                    <Form.Group controlId="notes">
                        <Form.ControlLabel>Notes</Form.ControlLabel>
                        <Form.Control name="notes" value={data.notes}/>
                    </Form.Group>

                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EmployeeForm;
