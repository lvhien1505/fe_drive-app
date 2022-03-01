import { Box } from '@mui/material';
import styled from '@emotion/styled';

const StyledButton = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
    border:0.25rem solid #fff;
    &:hover{
        cursor: pointer;
        border-color:rgba(0, 0, 0, 0.15);
    }
`;

const StyledAvatar = styled(Box)`
    width: 2rem;
    height: 2rem;
    background-color: #0097a7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledNameAvatar = styled.span`
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
`;
const Avatar = () => {
    return (
        <Box>
            <StyledButton onClick={()=>console.log('a')}>
                <StyledAvatar>
                    <StyledNameAvatar>H</StyledNameAvatar>
                </StyledAvatar>
            </StyledButton>
        </Box>
    );
};

export default Avatar;
