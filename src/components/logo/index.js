import Box from '@mui/material/Box';
import srcLogoImage from 'assets/images/logo.png';

const Logo = () => {
    return (
        <>
            <Box
                component="img"
                src={srcLogoImage}
                sx={{
                    height: 40,
                    width: 40,
                }}
            />
        </>
    );
};

export default Logo;
