import { useState } from 'react';
import * as styleFire from '@haxzie/stylefire';

function useTheme(theme) {
    const [currentTheme, setCurrentTheme] = useState(styleFire.getTheme().name);
    
    function setTheme(theme) {
        styleFire.apply(theme);
        setCurrentTheme(theme);   
    }

    return [currentTheme, setTheme];
}

export default useTheme;