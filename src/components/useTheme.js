import { useState } from 'react';
import * as styleFire from '@haxzie/stylefire';

let useTheme = () => { };


useTheme = () => {
    let localTheme = null;
    if (typeof window !== 'undefined') { // fix for SSR rendering errors
        localTheme = styleFire.getTheme().name;
    }
    const [currentTheme, setCurrentTheme] = useState(localTheme || 'light');

    function setTheme(theme) {
        styleFire.apply(theme);
        setCurrentTheme(theme);
    }

    return [currentTheme, setTheme];
}



export default useTheme;