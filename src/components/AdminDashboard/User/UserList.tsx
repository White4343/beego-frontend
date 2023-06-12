import React, {useEffect} from 'react';
import {
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    ListBase,
    Pagination,
    TextField,
    TextInput,
    EditButton,
    DeleteButton,
    ExportButton,
    FunctionField,
    NumberField,
    ArrayField,
    SingleFieldList,
    ChipField,
    List,
    DateField,
    useRecordContext,
    WithRecord,
    SelectInput
} from 'react-admin';
import {Chip, ImageListItem, Stack} from '@mui/material';
import {IProduct, IUser} from "../types";
import { ImportButton } from "react-admin-import-csv";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const userFilters = [
    <TextInput label="Roles" source="role"/>,

];

const userRoles = ["admin", "user"]
const userRolesColors = ["#ea1765", "#2ea8c4"]

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">

        <FilterForm filters={userFilters}/>
        <div>
            <FilterButton filters={userFilters}/>
        </div>
        <ExportButton/>
        <ImportButton/>
    </Stack>
)


const UserList: React.FC = (props) => {
    return (
        <>
            <ListBase {...props}>
                <ListToolbar/>
                <Datagrid>
                    {/*<TextField source='id'/>*/}
                    <TextField source='fullName'/>
                    <TextField source='email'/>
                    <TextField source='passwordHash'/>
                    <WithRecord label="role" render={(record) => {
                        const idx = userRoles.indexOf(`${record.role}`)
                        const chipColor = `${userRoles[idx] === record.role && userRolesColors[idx]}`
                        return <>
                            {

                                <Chip label={record.role}
                                      style={{backgroundColor: chipColor, color: "white"}}/>


                            }
                        </>
                    }}/>
                    <DateField source='createdAt' showTime/>

                    <EditButton resource='/auth'/>
                    <DeleteButton resource='auth'/>
                </Datagrid>
                <Pagination rowsPerPageOptions={[5, 10, 25]}/>
            </ListBase>
        </>
    );
};



export default UserList;