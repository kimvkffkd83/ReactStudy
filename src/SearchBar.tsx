import React, {ChangeEvent, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar({sName, changeEvent, clickEvent}:{sName:string, changeEvent:any, clickEvent:any }) {
    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    onChange={changeEvent}
                    placeholder="어떤 과자를 찾아오셨나요?"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2"
                    onClick={clickEvent}
                    disabled={sName.length == 0}
                >
                    검색
                </Button>
            </InputGroup>
        </>
    )
}

export default SearchBar;
