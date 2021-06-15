import { Edit, Create, Datagrid, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";
import { EditButton, Filter, SearchInput } from "react-admin";

export const CategoriaList = props => (
    <List {...props} filters={<SearchBar/>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="tipo" />
            <EditButton />
        </Datagrid>
    </List>
);


export const CategoriaCreate = props => (
    <Create title='Criar uma categoria' {...props}>
        <SimpleForm>
            <TextInput source="tipo" />
        </SimpleForm>
    </Create>
);

export const CategoriaEdit = props => (
    <Edit title='Editar uma categoria' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='tipo' />
        </SimpleForm>
    </Edit>
);

export const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Tipo' source='tipo' resettable alwaysOn />
    </Filter>
);