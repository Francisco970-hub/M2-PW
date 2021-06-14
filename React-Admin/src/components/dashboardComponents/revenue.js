import * as React from 'react';
import EuroIcon from '@material-ui/icons/Euro';
import { useTranslate } from 'react-admin';
import CardWithIcon from './CardWithIcon';


export const Revenue = ({ value }) => {
    const translate = useTranslate();
    return(
        <CardWithIcon
            to="/commands"
            icon={EuroIcon}
            title={translate('pos.dashboard.monthly_revenue')}
            subtitle={value}
        />
    );
};