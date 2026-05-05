import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import InfoCircleSolidSvgIcon from '../../assets/SvgIcon/InfoCircleSolidSvgIcon';
import { styled } from '@mui/material';

const ContainerTooltip = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontFamily: '"Noto Sans TC", "Noto Sans"',
  fontSize: '0.875rem',
  lineHeight: 1.5,
});

const IconWrapper = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const TooltipIcon = ({ title, text }: { title: string; text: string }) => {
  return (
    <ContainerTooltip>
      <span style={{ color: '#fff' }}>{text}</span>
      <Tooltip
        title={title}
        placement="top"
        PopperProps={{
          sx: (theme) => ({
            '& .MuiTooltip-tooltip': {
              color: '#fff',
              backgroundColor: theme.externalColor?.secondary?.$140 || '#333',
              borderRadius: '4px',
              boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
              maxWidth: '250px',
              padding: '10px',
            },
          }),
        }}
      >
        <IconWrapper>
          <InfoCircleSolidSvgIcon sx={{ color: '#fff' }} />
        </IconWrapper>
      </Tooltip>
    </ContainerTooltip>
  );
};

export default TooltipIcon;
