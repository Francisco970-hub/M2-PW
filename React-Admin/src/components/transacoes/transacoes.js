import "./transacoes.css";

/*class Transacoes extends Component {
    constructor() {
        super();
        this.state = {
            transacoes: [],
            clientes: []
        }
        this.getTransacoes();
    }

    getTransacoes() {
        const requestCli = axios.get('http://[::1]:3000/clientes');
        const requestEnc = axios.get('http://[::1]:3000/encomendas');
        axios.all([requestCli, requestEnc])
        .then(axios.spread((...responses) => {
            const responseCli = responses[0];
            const responseEnc = responses[1];
            this.setState({transacoes: responseEnc.data.reverse(),
            clientes: responseCli.data.reverse()});
        }))
    }

    dados() {       
        const dados = this.state.transacoes.map((encomenda, i) => {
            if (i < 5) {
                const index = this.state.clientes.findIndex(x => x.id === encomenda.clienteId)   
                return (
                    <tr key={i} className="tableRow">
                        <td className="user">
                            <span className="name">{this.state.clientes[index].nome}</span>
                        </td>
                        <td className="total">€ {encomenda.total}</td>
                    </tr>
                );
            }
        });
        return dados;
    }

    render() {
        

        return(
            <div className="encomendas">
            <h3 className="title">Últimas encomendas efetuadas</h3>
            <table className="table">
                <tr className="tableRow">
                    <th className="tableHead">Cliente</th>
                    <th className="tableHead">Total</th>
                </tr>
                {this.dados()}
            </table>
        </div>
        );
    }
}

export default Transacoes;*/



export default function Transacoes(props) {
    const dados = props.encomendas.map((encomenda, i) => {
        if (i < 5) {
            const index = props.clientes.findIndex(x => x.id === encomenda.clienteId);
            return (
                <tr key={i} className="tableRow">
                    <td className="user">
                        <span className="name">{props.clientes[index].nome}</span>
                    </td>
                    <td className="total">€ {encomenda.total}</td>
                </tr>
            );
        }
    });
    
    return(
        <div className="encomendas">
        <h3 className="title">Últimas encomendas efetuadas</h3>
        <table className="table">
            <tr className="tableRow">
                <th className="tableHead">Cliente</th>
                <th className="tableHead">Total</th>
            </tr>
            {dados}
        </table>
    </div>
    );
}