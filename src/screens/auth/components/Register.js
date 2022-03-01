import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Logo from 'components/logo';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
    margin-top: 1rem;
    width: 100%;
`;

const StyledButton = styled(Button)`
    text-transform: none;
    line-height: 1;
    height: 2.5rem;
`;

const Register = () => {
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
        pt: '1rem',
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

    const onRegister = () => {};

    return (
        <Box sx={sx}>
            <Box sx={sxForm}>
                <Box sx={sxWrapperLogo}>
                    <Logo />
                    <Box sx={sxSideLogo}>Drive</Box>
                </Box>
                <Typography variant="h5" align="center" mt={2}>
                    <Box sx={{ color: '#202124' }}>Đăng kí tài khoản</Box>
                </Typography>
                <FormControl sx={{ width: '100%' }}>
                    <StyledTextField
                        id="outlined-basic"
                        label="Họ tên"
                        variant="outlined"
                        size="small"
                    />
                    <StyledTextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        size="small"
                    />
                    <StyledTextField
                        id="outlined-basic"
                        label="Số điện thoại"
                        variant="outlined"
                        size="small"
                    />
                    <StyledTextField
                        id="outlined-adornment-password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        size="small"
                    />
                     <StyledTextField
                        id="outlined-adornment-password"
                        type="password"
                        label="Nhập lại password"
                        variant="outlined"
                        size="small"
                    />
                </FormControl>
                <Box
                    sx={{
                        mt: 5,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <StyledButton
                        variant="contained"
                        onClick={() => navigate('/')}
                    >
                        Đăng nhập
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        color="success"
                        onClick={onRegister}
                    >
                        Đăng kí
                    </StyledButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;
