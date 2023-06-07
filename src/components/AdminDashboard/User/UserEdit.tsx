import React from "react";
import {
    ArrayField,
    Datagrid, DeleteButton,
    Edit,
    EditButton,
    FunctionField,
    NumberInput,
    SimpleForm,
    TextField,
    TextInput,
    SelectInput, ImageInput, ImageField
} from "react-admin";
import {IProduct} from "../types";
import {ImageListItem} from "@mui/material";

const UserEdit: React.FC = (props) => {
    return (
        <div>
            <Edit {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
                    <TextInput source='fullName'/>
                    <TextInput source='email'/>
                    <TextInput source='passwordHash'/>
                    <SelectInput source="role" choices={[
                        { id: 'admin', name: 'Admin' },
                        { id: 'user', name: 'User' }
                    ]} />
                </SimpleForm>

            </Edit>

        </div>
    );
};



export default UserEdit;