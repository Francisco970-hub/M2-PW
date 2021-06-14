import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cliente, ClienteRelations, Encomenda} from '../models';
import {EncomendaRepository} from './encomenda.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly encomendas: HasManyRepositoryFactory<Encomenda, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('EncomendaRepository') protected encomendaRepositoryGetter: Getter<EncomendaRepository>,
  ) {
    super(Cliente, dataSource);
    this.encomendas = this.createHasManyRepositoryFactoryFor('encomendas', encomendaRepositoryGetter,);
    this.registerInclusionResolver('encomendas', this.encomendas.inclusionResolver);
  }
}
