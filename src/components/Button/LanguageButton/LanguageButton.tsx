import React, { VFC, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import languageIcon from '../../../assets/image/svg/btn_ic_lan.svg';
import checkIcon from '../../../assets/image/svg/check.svg';
import { LanguageButtonProps, LanguageData } from './LanguageButton.types';

const useStyles = makeStyles(
  (theme) => ({
    container: {
      ...theme.text.Subtitle_16_Med,
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
    },
    menuContainer: {
      minWidth: 148,
      backgroundColor: '#FFF',
      borderRadius: 4,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
      margin: '8px auto',
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    item: {
      ...theme.text.Subtitle_16_Med,
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
    },
  }),
  {
    name: 'LanguageButton',
  },
);

const LanguageButton: VFC<LanguageButtonProps> = ({
  className,
  menuClassName,
  itemClassName,
  list,
  onSelect,
  language,
}) => {
  const classes = useStyles();
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
    <div
      key={`language-item-${lang.code}`}
      className={classnames(classes.item, itemClassName)}
      onClick={() => handleOnSelectLanguage(lang)}
    >
      <div className={classes.icon}>
        {selectedLanguage.code === lang.code && <img src={checkIcon} />}
      </div>
      <div className="text">{lang.fullName}</div>
    </div>
  ));

  return (
    <>
      <div
        ref={containerDOM}
        className={classnames(classes.container, className)}
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={languageIcon} className="icon" />
        {selectedLanguage.name}
        <div className={classes.icon}>
          {showMenu ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      <Popper
        anchorEl={containerDOM.current}
        open={showMenu}
        placement="bottom"
        popperRef={(ref) => {
          if (menuClassName) {
            ref?.popper.classList.add(classnames(menuClassName));
          }
        }}
      >
        <ClickAwayListener onClickAway={() => setShowMenu(false)}>
          <div className={classes.menuContainer}>{languageItems}</div>
        </ClickAwayListener>
      </Popper>
    </>
  );
};

export default LanguageButton;
