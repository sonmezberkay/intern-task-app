import './TeamSelector.css';
import { useTheme } from '../hooks/useTheme';
import darkModeIcon from '../assets/darkmode.svg';
import { useState } from 'react';

const themeColors = ['#333', '#249c6b', '#b70233']

const ThemeSelector = () => {
    const { changeColor, changeMode, mode } = useTheme(); 

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    };

    const [popupShow, setPopupShow] = useState(true);

    const popupShowHandler = () => {
        setTimeout(() => {
            setPopupShow(false)
        }, 4000);
    };

    const popupMouseOver = () => {
        setPopupShow(true);
    };

    const popupMouseLeft = () => {
        setPopupShow(false);
    };

    popupShowHandler();

    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img
                    src={darkModeIcon}
                    alt='dark mode'
                    onClick={toggleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : '' }}
                    onMouseOver={popupMouseOver}
                    onMouseLeave={popupMouseLeft} />
                {popupShow && <div className='pop-up'>
                <p style={{fontSize: '1rem'}}>Click me to change the color mode!</p>
                </div>}
            </div>
            <div className='theme-buttons'>
                {themeColors.map(color => (
                    <div 
                      key={color}
                      onClick={() => changeColor(color)}
                      style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </div>
    )
};

export default ThemeSelector;