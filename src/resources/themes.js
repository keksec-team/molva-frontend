import { colors } from "./colors";
import {ThemeException} from "./exceptions/ThemeException";

export let themes = {
    DARK_THEME: "DARK",
    LIGHT_THEME: "LIGHT"
}

export function getColorsByTheme(theme) {
    switch (theme) {
        case themes.DARK_THEME: return colors.dark;
        case themes.LIGHT_THEME: return colors.light;
        default: throw new ThemeException("This theme does not exist!")
    }
}
