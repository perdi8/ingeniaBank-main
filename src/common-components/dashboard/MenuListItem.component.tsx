import React from 'react';

import { useHistory } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

//Componentes de Material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

//Iconos de material UI
import HomeIcon from '@material-ui/icons/Home'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import {MenuList} from '../../models/dashboard/MenuList.model'

const getIcon = (icon: string) => {
    switch(icon) {
        case 'HOME':
            return (<HomeIcon />)
        case 'ACCOUNTS':
            return (<PeopleAltIcon />)
        case 'CARDS':
            return (<CreditCardIcon />)
        case 'TRANSACTIONS':
            return (<TransferWithinAStationIcon />)
        case 'BALANCE':
            return (<AccountBalanceIcon />)
        default:
            return (<HomeIcon />)
    }
}

interface Props {
    list : MenuList[]
}

const MenuListItems : React.FC<Props> = (props) => {

    const {list} = props

    const history = useHistory()
   
    const { url } = useRouteMatch()
   
    const navigate = (path: string) =>{     
        history.push(`${url}${path}`)
    }

    return (
        <List>
            {list.map(({text, path,icon}, index) => 
                (                    
                    <ListItem key={index} button onClick={ () => navigate(path)}>     
                        <ListItemIcon>                     
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                )
            )}
        </List>
    );
}

export default MenuListItems;