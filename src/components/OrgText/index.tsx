import { styled, Box, BoxProps } from '@mui/material';
import React from 'react';

interface ContainerProps {
  orgColor: string | undefined;
}

const shouldForwardProp = (propName: PropertyKey) => propName !== 'orgColor';
const Container = styled(Box, { shouldForwardProp })<ContainerProps>`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ theme }) => theme.color.secondary.$100};
  padding: 4px 15px 4px 0;

  & > span.org-name {
    &::before {
      display: inline-block;
      content: '';
      width: 6px;
      height: 0.875rem;
      background-color: ${({ theme, orgColor }) =>
        orgColor ? orgColor : theme.color.primary.$100};
      border-radius: 3px;
      margin-right: 8px;
    }
  }
`;

export interface OrgTextProps extends BoxProps {
  orgColor: string | undefined;
  orgName: string;
}

const OrgText: React.FC<OrgTextProps> = ({
  orgColor,
  orgName,
  ...otherProps
}) => {
  return (
    <Container orgColor={orgColor} {...otherProps}>
      <span className="org-name">{orgName}</span>
    </Container>
  );
};

export default OrgText;
