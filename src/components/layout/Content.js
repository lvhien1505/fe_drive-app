import { Box, Divider, Typography, IconButton, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import {
    ArrowRight,
    InfoOutlined,
    CalendarViewMonthOutlined,
} from '@mui/icons-material';
import styled from '@emotion/styled';

const StyledButtonIcon = styled(IconButton)`
    color: #3c4043;
    width: 2.5rem;
    height: 2.5rem;
    &:hover {
        background-color: #e0e0e0;
        color: black;
    }
`;

const StyledButtonText = styled(Button)`
    line-height: 1;
    height: 2rem;
    padding: 7px;
    font-size: 18px;
    color: #3c4043;
    text-transform: none;
    &:hover {
        background-color: #e0e0e0;
    }
`;

const Content = ({ config, children }) => {
    const sxContent = {
        display: 'flex',
        height: 'calc(100vh - 4rem - 1px)',
    };

    const sxTop = {
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const sxPath = {
        lineHeight: 1,
        fontSize: '18px',
        color: '#3c4043',
    };

    const sxBottom = {
        overflowY: 'auto',
    };

    const navigate = useNavigate();

    const onRedirect = (path) => {
        navigate(path);
    };
    return (
        <Box sx={sxContent}>
            <Sidebar />
            <Box sx={{ width: '100%', pl: 2 }}>
                <Box sx={sxTop}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <StyledButtonText
                            onClick={() => onRedirect(config.path)}
                        >
                            {config.text}
                        </StyledButtonText>
                        <Typography component="div">
                            <Box
                                sx={{
                                    ...sxPath,
                                }}
                            >
                                <ArrowRight />
                            </Box>
                        </Typography>
                        <StyledButtonText>folders</StyledButtonText>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        <StyledButtonIcon>
                            <CalendarViewMonthOutlined />
                        </StyledButtonIcon>

                        <StyledButtonIcon>
                            <InfoOutlined />
                        </StyledButtonIcon>
                    </Box>
                </Box>
                <Divider />
                <Box sx={sxBottom}>{children}</Box>
            </Box>
        </Box>
    );
};

export default Content;
