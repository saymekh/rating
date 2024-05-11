import { FaStar } from 'react-icons/fa';

function Star({ onClick, filled }) {
  return <FaStar 
    className='stars' 
    onClick={onClick} 
    color={filled ? 'gold' : 'grey'} 
  />;
}

export default Star;