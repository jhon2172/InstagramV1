import React from 'react';
import PincardHistory from './PincardHistory';

const Historypin = () => {
    const _styleHistory = {
        containerHistory:{
            cursor:'pointer',
            position:'relative', 
        },
        PinContainerUsers:{
            margin: 0,
            padding: 0,
            backgroundColor:'white',
            border:'1px solid rgba(182, 182, 182, 0.774)',
            width: '45vw',
            /*width:'590px',*/
            height:'10vw',
            position: 'absolute',
            left: '35%',
            top:'12%',
            transform: 'translateX(-50%)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 140px)',
            gridAutoRows: '100px',
            justifyContent: 'center',
            
            
            
        }
    }
    return (
        <div >
            <div style={{..._styleHistory.PinContainerUsers}}>
                <PincardHistory size='small' image='https://picsum.photos//250/260' />
                <PincardHistory size='small' image='https://picsum.photos/250/260' />
                <PincardHistory size='small' image='https://picsum.photos/seed/picsum/250/260' />
                
            </div>
            
            
        </div>
    )
}

export default Historypin;