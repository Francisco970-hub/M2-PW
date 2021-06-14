import { Edit, Create, Datagrid, List, NumberField, NumberInput, ReferenceField, SimpleForm, TextField, TextInput, ReferenceInput, SelectInput } from "ra-ui-materialui";
import { EditButton, Filter, SearchInput } from "react-admin";
export const ProdutoList = props => (
    <List {...props} filters={<SearchBar/>}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="nome" />
            <ReferenceField source="categoriaId" reference="categorias">
                <TextField source="Categoria" />
            </ReferenceField>
            <NumberField source="preco" />
            <TextField source="descricao" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProdutoCreate = props => (
    <Create title='Criar um produto' {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
            <ReferenceInput source="categoriaId" reference="categoria">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="preco" />
            <TextInput multiline source="descricao" />
        </SimpleForm>
    </Create>
);

export const ProdutoEdit = props => (
    <Edit title='Editar um produto' {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
            <ReferenceInput source="categoriaId" reference="categoria">
                <SelectInput optionText="nome" />
            </ReferenceInput>
            <NumberInput source="preco" />
            <TextInput multiline source="descricao" />
        </SimpleForm>
    </Edit>
);

const SearchBar = props => (
    <Filter {...props}>
        <SearchInput placeholder='Nome' source='nome' resettable alwaysOn />
    </Filter>
);