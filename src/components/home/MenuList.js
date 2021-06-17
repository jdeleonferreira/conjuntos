import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from '@material-ui/core';
import ListItemLink from '../common/ListItemLink';

const MenuList = ({ props }) => {


    return (
        <div>
            <ListItemLink icon={<DashboardIcon />} primary="Home" exact to='/' />

            <ListItemLink icon={<PeopleIcon />} primary="Usuarios" exact to='/usuarios' />

            <ListItemLink icon={<ApartmentIcon />} primary="Torres" exact to='/torres' />

            <ListItemLink icon={<HomeIcon />} primary="Apartamentos" exact to='/apartamentos' />

            <ListItemLink icon={<PeopleIcon />} primary="Inquilinos" exact to='/inquilinos' />

        </div>
    );
}

export default MenuList;