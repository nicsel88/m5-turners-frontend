Basic folder structure for Turners Insurance app. 

Each compoent has its own folder within 'components' folder and corresponding subfolder broken down by pages with its own .jsx and .module.css. 

The 'pages' are just container components that will import all the different subcompoents. So you would do base styling for each 'page' and then pull in the subcompoents based on different conditions set in the page compoent. We'll route everything from the App.js base compoenent. 

In an app with a bunch of compoents I've found modular css to be helpful to avoid conflicts. Basically just write the css as usual and then import it in the corresponding component with (for example): 

import styles from './Navbar.module.css';

and then in the jsx render use: 
<div className={styles.MenuItem}>