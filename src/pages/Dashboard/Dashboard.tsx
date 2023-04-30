import {
	HistoryToggleOffOutlined,
	ForumOutlined,
	TaskAltOutlined,
	EmailOutlined,
  } from '@mui/icons-material';
  import { Typography } from '@mui/material';
  import Social from '../../components/Socials/Social';
  import Statistic from '../../components/Statistic/Statistic';
  
  function Dashboard() {
	return (
	  <div style={{paddingLeft:'40px'}}>
		<Typography
		  variant="h1"
		  fontSize="24px"
		  style={{ paddingTop: '36px', paddingBottom: '36px' }}
		>
		  Dashboard
		</Typography>
		<div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
		  <Statistic count={250} title="Mbox" icon={ForumOutlined} />
		  <Statistic count={75} title="In Queue" icon={EmailOutlined} />
		  <Statistic count={0} title="Active" icon={HistoryToggleOffOutlined} />
		  <Statistic count={0} title="Completed" icon={TaskAltOutlined} />
		</div>
		<div style={{ display: 'flex', gap: '20px', paddingTop: '36px' }}>
		  <Social
			title="Facebook"
			colors={['#B6C4E2', '#7B94CC', '#334D84']}
			data={[
			  { name: 'In Queue', value: 200 },
			  { name: 'Active', value: 100 },
			  { name: 'Completed', value: 400 },
			]}
		  />
		  <Social
			title="Email"
			colors={['#A8D3F0', ' #63B0E3', '#2280BF']}
			data={[
			  { name: 'In Queue', value: 300 },
			  { name: 'Active', value: 50 },
			  { name: 'Completed', value: 400 },
			]}
		  />
		  <Social
			title="WhatsApp"
			colors={['#AFE9B6', '#70D77C', '#31AF40']}
			data={[
			  { name: 'In Queue', value: 250 },
			  { name: 'Active', value: 103 },
			  { name: 'Completed', value: 200 },
			]}
		  />
		</div>
	  </div>
	);
  }
  
  export default Dashboard;