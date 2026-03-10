import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { NavLink } from 'react-router-dom';
const Massege = () => {
  return (
    <section className='massege_area'>
        <div className="massege">
            <NavLink to='https://wa.me/1610466639' target='_blank'><WhatsAppIcon className='whatsApp_massege'
            /></NavLink>
        </div>
    </section>
  )
}

export default Massege;
