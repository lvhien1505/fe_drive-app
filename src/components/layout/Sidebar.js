import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Divider,
    MenuList,
    MenuItem as MuiMenuItem,
    ListItemText,
    ListItemIcon,
    Button,
} from '@mui/material';
import {
    ContactPageOutlined,
    PeopleAltOutlined,
    WatchLaterOutlined,
    StarBorderOutlined,
    DeleteOutlined,
    CloudOutlined,
    AddToDriveOutlined,
} from '@mui/icons-material';

const StyledButton = styled(Button)`
    text-transform: none;
    line-height: 1;
    height: 3rem;
    width: 7.5rem;
`;

const StyledText = styled.span`
    display: inline-block;
    font-size: 13px;
    color: rgb(95, 99, 104);
    font-weight: 500;
    height: 24px;
    padding: 5.5px 0;
`;

const StyledMenuItem = styled(MuiMenuItem)`
    height: 2.5rem;
`;

const Text = ({ children }) => {
    return (
        <ListItemText>
            <StyledText>{children}</StyledText>
        </ListItemText>
    );
};

const Sidebar = () => {
    const sxSidebar = {
        width: '16rem',
        maxWidth: '16rem',
        minWidth: '16rem',
    };

    const sxButton = {
        width: '100%',
        p: 2,
        pb: 1,
        lineHeight: 1,
    };

    const navigate = useNavigate();

    const onRedirect = (path) => {
        const basePath = '/drive';
        navigate(basePath + '/' + path);
    };
    return (
        <Box sx={sxSidebar}>
            <Box sx={sxButton}>
                <StyledButton
                    variant="contained"
                    startIcon={<AddToDriveOutlined />}
                >
                    Mới
                </StyledButton>
            </Box>
            <MenuList>
                <StyledMenuItem onClick={() => onRedirect('my-drive')}>
                    <ListItemIcon>
                        <ContactPageOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Drive của tôi</Text>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => onRedirect('shared-with-me')}>
                    <ListItemIcon>
                        <PeopleAltOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Được chia sẻ với tôi</Text>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => onRedirect('recent')}>
                    <ListItemIcon>
                        <WatchLaterOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Gần đây</Text>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => onRedirect('starred')}>
                    <ListItemIcon>
                        <StarBorderOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Có gắn dấu sao</Text>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => onRedirect('trash')}>
                    <ListItemIcon>
                        <DeleteOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Thùng rác</Text>
                </StyledMenuItem>
                <Divider />
                <StyledMenuItem>
                    <ListItemIcon>
                        <CloudOutlined fontSize="medium" />
                    </ListItemIcon>
                    <Text>Bộ nhớ</Text>
                </StyledMenuItem>
            </MenuList>
        </Box>
    );
};

export default Sidebar;
