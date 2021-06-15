import './revenue.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { React } from 'react';

/*
class Revenue extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return(
            <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Rendimento</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{this.props.total}</span>
                    <span className="featuredMoneyRate">-7.1 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Número de pedidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{this.state.encomendas.length}</span>
                    <span className="featuredMoneyRate">+2.3 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>

        </div>
        );
    }
}
export default Revenue;*/

export default function Revenue(props) {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Rendimento</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{props.encomendas.reduce(function(prev, cur) { return prev + cur.total}, 0)}</span>
                    <span className="featuredMoneyRate">-7.1 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Número de pedidos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{props.encomendas.length}</span>
                    <span className="featuredMoneyRate">+2.3 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Em relação ao mês passado</span>
            </div>
        </div>
    );
}
