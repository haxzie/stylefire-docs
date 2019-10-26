import './src/styles/global.scss';
import * as stylefire from '@haxzie/stylefire';



const lightTheme = {
    color: {
        header: {
            background: "#ffffff",
            font: "#030303"
        },
        body: {
            background: "#2583C7",
            font: "#ffffff"
        },
        button: {
            background: "#00000000",
            font: "#ffffff",

            active: {
                background: "#ffffff33"
            }
        },
        screen: {
            background: "#F1F1F1",
            font: "#1c1c1c",
            titlebar: {
                background: "#C4C4C4",
                font: "#1D3441"
            },
            code: {
                background: "#d5d9db",
                font: "#1a1a1a"
            }
        }
    }
}


const darkTheme = {
    color: {
        header: {
            background: "#191a2c",
            font: "#c2c2ce"
        },
        body: {
            background: "#31384b",
            font: "#ffffff"
        },
        button: {
            background: "#00000000",
            font: "#ffffff",

            active: {
                background: "#ffffff33"
            }
        },
        screen: {
            background: "#474f57",
            font: "#c2c2ce",
            titlebar: {
                background: "#191a2c",
                font: "#c2c2ce"
            },
            code: {
                background: "#5f6e7d",
                font: "#ffffff"
            }
        }
    }
}

stylefire.create('light', lightTheme);
stylefire.create('dark', darkTheme)

stylefire.init('light');
