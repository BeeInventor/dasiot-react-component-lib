import React, { VFC, useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Popper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { LanguageButtonProps, LanguageData } from './LanguageButton.types';
import Icon from '../../Icon/Icon';
import languageIcon from '../../../assets/image/svg/btn_ic_lan.svg';
import checkIcon from '../../../assets/image/svg/check.svg';

const Root = styled(Box)(({ theme }) => ({
  ...theme.typography.h3,
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  minWidth: 156,
  color: theme.color.secondary.$80,
  backgroundColor: '#FFF',
  padding: 17,
  userSelect: 'none',
  '& > .icon': {
    marginRight: 10,
  },
}));

const Menu = styled(Box)(({}) => ({
  minWidth: 148,
  backgroundColor: '#FFF',
  borderRadius: 4,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  margin: '8px auto',
}));

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.h3,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  color: '#606060',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .05)',
  },
  '& > div.text': {
    padding: '8px 8px 8px 0',
  },
}));

const LanguageButton: VFC<LanguageButtonProps> = (props) => {
  const {
    list,
    onSelect,
    language,
    popperProps,
    menuProps,
    itemProps,
    ...otherProps
  } = props;
  const containerDOM = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageData>(
    language || list[0],
  );

  useEffect(() => {
    if (language) setSelectedLanguage(language);
  }, [language]);

  const handleOnSelectLanguage = (lang: LanguageData) => {
    setShowMenu(false);
    if (selectedLanguage.code !== lang.code) {
      setSelectedLanguage(lang);
      onSelect(lang);
    }
  };

  const languageItems = list.map((lang) => (
    <Item
      key={`language-item-${lang.code}`}
      onClick={() => handleOnSelectLanguage(lang)}
      {...itemProps}
    >
      <Icon>
        {selectedLanguage.code === lang.code && <img src={checkIcon} />}
      </Icon>
      <div className="text">{lang.fullName}</div>
    </Item>
  ));

  return (
    <>
      <Root
        ref={containerDOM}
        onClick={() => setShowMenu(!showMenu)}
        {...otherProps}
      >
        <img src={languageIcon} className="icon" />
        {selectedLanguage.name}
        <Icon>
          {showMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Icon>
      </Root>
      <Popper
        anchorEl={containerDOM.current}
        open={showMenu}
        placement="bottom"
        {...popperProps}
      >
        <ClickAwayListener onClickAway={() => setShowMenu(false)}>
          <Menu {...menuProps}>{languageItems}</Menu>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LanguageButton;
