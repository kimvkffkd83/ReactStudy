import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="어떤 과자를 찾아오셨나요?"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Button
                </Button>
            </InputGroup>
        </>
    )
}

export default SearchBar;
