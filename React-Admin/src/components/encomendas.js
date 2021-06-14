import { Edit, Create, Datagrid, List, NumberField, NumberInput, SimpleForm, TextField, TextInput, ReferenceField } from "ra-ui-materialui";
import { EditButton, Filter, ReferenceInput, SearchInput, SelectInput } from "react-admin";

export const EncomendaList = props => (
    <List {...props} filters={<SearchBar/>}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="produtoId" reference="produtos">
                <TextField source="nome" />
            </ReferenceField>
            <NumberField source="quantidade" />
            <NumberField source="total" />
            <ReferenceField source="clienteId" reference="clientes">
                <TextField source="nome"></TextField>
            </ReferenceField>
            <EditButton />
        </Datagrid>
    </List>
);


export const EncomendaCreate = props => (
    <Create title='Criar uma Encomenda' {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="produtoId" reference="produtos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="quantidade" />
            <NumberInput source="total" />
            <ReferenceInput source="clienteId" reference="clientes">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const EncomendaEdit = props => (
    <Edit title="Criar uma encomenda" {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="produtoId" reference="produtos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="quantidade" />
            <NumberInput source="total" />
            <ReferenceInput source="clienteId" reference="clientes">
                <SelectInput optionText="nome" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

const SearchBar = props => (
    <Filter {...props}>
        <ReferenceInput source="clienteId" reference="clientes">
            <SearchInput placeholder='Nome cliente' source="nome" reference="clientes" resettable alwaysOn />
        </ReferenceInput>
    </Filter>
);