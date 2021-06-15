import "./chart.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        "rendimento": 15123
    },
    {
        name: 'Feb',
        "rendimento": 12956
    },
    {
        name: 'Marc',
        "rendimento": 13264
    },
    {
        name: 'Abr',
        "rendimento": 11035
    },
    {
        name: 'Mai',
        "rendimento": 9045
    },
    {
        name: 'Jun',
        "rendimento": 1128
    },
];
/*
class Chart extends Component {
    constructor() {
        super();
        this.state = {
            encomendas: []
        }
        this.getEncomendas();
        this.updateMes();
    }

    getEncomendas() {
        axios.get('http://[::1]:3000/encomendas')
        .then(response => {
            this.setState({encomendas: response.data})
        });
    }

    updateMes() {
        var total = 0;
        this.state.encomendas.forEach(encomenda => {
            total += encomenda.total;
        });

        const index = data.findIndex(x => x.name === 'Jun');
        data[index].rendimento = total;
    }

    render() {
        return(
            <div className="chart">
                <h3 className="chartTitle">Rendimento</h3>
                    <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="#03bafc"/>
                        <YAxis dataKey="rendimento"/>
                        <Line type="monotone" dataKey="rendimento" stroke="#03bafc" />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
            </div>
        );
    }
}

export default Chart;*/

export default function Chart(props) {
    const total = props.encomendas.reduce(function(prev, cur) { return prev + cur.total}, 0);
    const index = data.findIndex(x => x.name === 'Jun');
    data[index].rendimento = total;

    return(
        <div className="chart">
            <h3 className="chartTitle">Rendimento</h3>
                <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#03bafc"/>
                    <YAxis dataKey="rendimento"/>
                    <Line type="monotone" dataKey="rendimento" stroke="#03bafc" />
                    <Tooltip />
                </LineChart>
                </ResponsiveContainer>
        </div>
    );
}
