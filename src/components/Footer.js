import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import NotificationsIcon from '@material-ui/icons/Notifications';

import SettingsIcon from '@material-ui/icons/Settings';
const useStyles =makeStyles((theme) => ({
  root: {
    width: 300,
  },
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
}));



function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Recents" value="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Favorites" value="Notification" icon={<NotificationsIcon />} />
      <BottomNavigationAction label="Nearby" value="Settings" icon={<SettingsIcon />} />

    </BottomNavigation>
  );
}