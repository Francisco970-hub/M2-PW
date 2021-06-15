import { Edit, Create, Datagrid, List, SimpleForm, TextField, NumberInput, ReferenceField, NumberField, TextInput, ReferenceInput, SelectInput } from "ra-ui-materialui";
import { EditButton, Filter } from "react-admin";

export const StockList = props => (
    <List {...props} filters={<SearchBar/>}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="produtoId" reference="produtos">
                <TextField source="nome" />
            </ReferenceField>
            <NumberField source="quantidade" />
            <EditButton />
        </Datagrid>
    </List>
);


export const StockCreate = props => (
    <Create title='Criar um Stock' {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="produtoId" reference="produtos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="quantidade" />
        </SimpleForm>
    </Create>
);

export const StockEdit = props => (
    <Edit title='Editar um Stock' {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="produtoId" reference="produtos">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="quantidade" />
        </SimpleForm>
    </Edit>
);


const SearchBar = props => (
    <Filter {...props}>
        <ReferenceInput source="produtoId" reference="produtos">
            <SelectInput optionText="nome" />
        </ReferenceInput>
    </Filter>
);