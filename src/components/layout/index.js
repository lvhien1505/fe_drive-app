import { Box } from '@mui/material';
import Header from './Header';
import Content from './Content';

const Layout = ({ config,children }) => {
    const sx={
        width:'100vw',
        height:'100vh'
    }
    return (
        <Box sx={sx}>
            <Header />
            <Content config={config} children={children}/>
        </Box>
    );
};

export default Layout;
