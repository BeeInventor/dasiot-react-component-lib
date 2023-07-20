import React from 'react';
import classNames from 'classnames';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { StepProps } from './Step.types';

const Container = styled(Box, { label: 'Step' })(() => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '50%',
}));

const StepBox = styled(Box, { label: 'Step' })(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: 'black',
  '&.pass': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Bar = styled(Box, { label: 'Step' })(({ theme }) => ({
  width: 47,
  height: 3,
  backgroundColor: 'black',
  '&.pass': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Step: React.FC<StepProps> = (props) => {
  const { className, current, list, ...otherProps } = props;

  const itemComponents = list.map((item, index) => {
    return (
      <React.Fragment key={`step-${index}-${item.id}`}>
        <StepBox className={classNames('Step-box', { pass: index <= current })}>
          <img src={item.src} />
        </StepBox>
        {index !== list.length - 1 && (
          <Bar className={classNames('Step-bar', { pass: index < current })} />
        )}
      </React.Fragment>
    );
  });

  return (
    <Container className={classNames('Step-root', className)} {...otherProps}>
      {itemComponents}
    </Container>
  );
};

export default Step;
