import React from 'react';
import PinCard from '../Pin-Card/PinCard';
import HeaderDesk from '../HeaderDesktop/HeaderDesk';
import PinUserInfo from '../Pin-Card/UserDataPin/PinUserInfo';
import AddedUsers from '../UsersAdd/AddedUsers';
import OtherUSers from '../UsersAdd/OtherUsers';
import Historypin from '../History/Historypin';

//import PinUserInfo from './UserDataPin/PinUserInfo';


// Contenedor principal de nuestros pines
const PinLayout = () => {
  // Estilos propios del contenedor principal
  const _stylesLayout = {
    pin_container: {
      margin: 0,
      padding: 0,
      width: '50vw',
      backgroundColor: 'white',
      position: 'absolute',
      left: '35%',
      top:'35%',
      transform: 'translateX(-50%)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 650px)',
      gridAutoRows: '10px',
      justifyContent: 'center',
      
    },  
    pin_containerUsers: {
      margin: 0,
      padding: '10px 20px',
      width: '25vw',
      height:'500px',
      /*backgroundColor: 'green',*/
      position: 'fixed',
      left: '75%',
      top:'10%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection:'column',
      borderradius: '50%',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      justifyContent: 'flex-start',
      
    },
    pin_conter:{
      display:'flex',
    },
  };

  return (
    
    
    <div style={_stylesLayout.pin_conter}>

      <HeaderDesk/>
      <Historypin/>
      <div className='Pincard'>
        <div  style={_stylesLayout.pin_container}>
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/262' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/263' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/257' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
        </div>
        </div>

        <div className='AddUsers' style={_stylesLayout.pin_containerUsers}>
          <AddedUsers/>
          <OtherUSers/>
        </div>
    </div>
  );
};

export default PinLayout;
