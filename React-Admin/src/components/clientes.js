import { Edit, Create, Datagrid, List, NumberField, NumberInput, SimpleForm, TextField, TextInput, DateInput, DateField } from "ra-ui-materialui";
import { EditButton, Filter, SearchInput } from "react-admin";
export const ClienteList = props => (
    <List {...props} filters={<SearchBar/>}>
         <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <DateField source="dataNasc" />
            <NumberField source="nif" />
            <TextField source="morada" />
            <EditButton />
        </Datagrid>
    </List>
);


export const ClienteCreate = props => (
    <Create title='Criar um cliente' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='nome' />
            <DateInput source="dataNasc" />
            <NumberInput source="nif" />
            <TextInput source='morada' />
        </SimpleForm>
    </Create>
);

export const ClienteEdit = props => (
    <Edit title='Editar um cliente' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='nome' />
            <DateInput source="dataNasc" />
            <NumberInput source="nif" />
            <TextInput source='morada' />
        </SimpleForm>
    </Edit>
);

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Nome' source='nome' resetable alwaysOn />
    </Filter>
);