import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from "../Components/logo.png"
export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({

    right: false,
  });

 function closeDrawer(){
    setState({

        right: true,
      })
 }


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
//   function toggle(){}
 

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 390 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <button onClick={closeDrawer}>Close </button>
      </div>
    </Box>
  );


return (
    <div className='mx-3 my-3'>
   
       <React.Fragment key={"right"}>
        {/* <img  onClick={toggleDrawer("right", true)} src> </img> */}
        <div onClick={toggleDrawer("right", true)}>
<img className='h-[40px]' src={Image}></img>
        </div>
          {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>

    </div> 
  );

}
// return (
//     <div>
//      {['right'].map((anchor) => (
//        <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div> 
//   );