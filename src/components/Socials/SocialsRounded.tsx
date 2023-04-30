import { Typography } from '@mui/material';
interface SocialsRounded{
    title:any;
    color:any
}
function SocialsRounded({ title, color }:SocialsRounded) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <div
        style={{
          background: color,
          width: 16,
          height: 16,
          borderRadius: '50%',
        }}
        className="lightGray"
      ></div>
      <Typography variant="subtitle1" color="#212121;" fontSize="13px">
        {title}
      </Typography>
    </div>
  );
}

export default SocialsRounded;