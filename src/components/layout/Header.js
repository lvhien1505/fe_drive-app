import { Box } from '@mui/material';
import Logo from 'components/logo';
import Avatar from './Avatar';

const Header = () => {
    const sxWrapper = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 65,
        borderBottom: '1px solid #dadce0',
    };

    const sxLeft = {
        display: 'flex',
        alignItems: 'center',
        ml: 2,
    };

    const sxRight = {
        display: 'flex',
        alignItems: 'center',
        mr: 2,
    };

    const sxSideLogo = {
        fontSize: 22,
        color: '#5f6368',
        ml: 1,
    };

    return (
        <Box sx={sxWrapper}>
            <Box sx={sxLeft}>
                <Logo />
                <Box sx={sxSideLogo}>Drive</Box>
            </Box>
            <Box sx={sxRight}>
                <Avatar />
            </Box>
        </Box>
    );
};

export default Header;
