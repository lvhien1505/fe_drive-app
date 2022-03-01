import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Logo from 'components/logo';
import { Link,useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
    margin-top: 1.5rem;
    width: 100%;
`;

const StyledLink = styled(Link)`
    margin-top: 1rem;
    text-decoration: none;
    font-size: 0.875rem;
`;

const StyledButton = styled(Button)`
    text-transform: none;
    line-height: 1;
    height: 2.5rem;
`;

const Login = () => {
    const sx = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const sxForm = {
        width: '28.125rem',
        height: '31.375rem',
        border: '1px solid #dadce0',
        borderRadius: '0.5rem',
        pt: '3rem',
        pr: '2.5rem',
        pl: '2.5rem',
    };

    const sxWrapperLogo = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const sxSideLogo = {
        fontSize: 22,
        color: '#5f6368',
        ml: 1,
    };

    const navigate = useNavigate();

    const onLogin = ()=>{

    }

    return (
        <Box sx={sx}>
            <Box sx={sxForm}>
                <Box sx={sxWrapperLogo}>
                    <Logo />
                    <Box sx={sxSideLogo}>Drive</Box>
                </Box>
                <Typography variant="h5" align="center" mt={2}>
                    <Box sx={{ color: '#202124' }}>Đăng nhập</Box>
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                    <StyledTextField
                        id="outlined-basic"
                        label="Email hoặc số điện thoại"
                        variant="outlined"
                    />
                    <StyledTextField
                        id="outlined-adornment-password"
                        type="password"
                        label="Password"
                        variant="outlined"
                    />
                    <StyledLink to="/forgot">
                        Bạn quên mật khẩu ?
                    </StyledLink>
                </FormControl>
                <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
                    <StyledButton variant="contained" onClick={()=>navigate('/register')}>Tạo tài khoản</StyledButton>
                    <StyledButton variant="contained" color="success" onClick={onLogin}>Đăng nhập</StyledButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
