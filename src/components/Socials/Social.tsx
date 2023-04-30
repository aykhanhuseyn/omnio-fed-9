import { Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';
import SocialsRounded from './SocialsRounded';
import { StyledDiv } from './SocialsStyled';
import socialNoDataPic from '../../assets/socialNoDataPic.png';
interface Social{
title:any;
data:any;
colors:any;
}
function Social({ title, data, colors }:Social) {
  return (
    <div>
      {!data ? (
        <StyledDiv style={{ marginBottom: '40px' }} justify="center">
          <Typography
            variant="h3"
            style={{ position: 'absolute', top: 20, left: 20, fontWeight: 600 }}
            fontSize="18px"
            color="#616161;"
          >
            {title}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <div style={{ width: 80 }}>
              <img
                src={socialNoDataPic}
                width="100%"
                height="80"
                alt="social-no-data-pic"
              />
            </div>
            <Typography variant="subtitle1" color="#574B90" fontSize="14px">
              There is no data
            </Typography>
          </div>
        </StyledDiv>
      ) : (
        <StyledDiv justify='left'>
          <Typography
            variant="h3"
            style={{ position: 'absolute', top: 20, left: 20, fontWeight: 600 }}
            fontSize="18px"
            color="#616161;"
          >
            {title}
          </Typography>
          <PieChart style={{ marginLeft: -50 }} width={300} height={300}>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry:any, index:any) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <SocialsRounded color={colors[0]} title="in queue" />
            <SocialsRounded color={colors[1]} title="active" />
            <SocialsRounded color={colors[2]} title="completed" />
          </div>
        </StyledDiv>
      )}
    </div>
  );
}

export default Social;