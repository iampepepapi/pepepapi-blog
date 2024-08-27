const colors = {
    kofiWhite: "#FFF",
    kofiBlack: "#000",
    kofiRed: "#FF5E5B",
    kofiBlue: "#13C3FF",
    kofiYellow: "#FBAA19",
    kofiGrey: "#434B57",
};

type KofiColor = keyof typeof colors;

export default function kofiColors(color: KofiColor | string): string {
    return color in colors ? colors[color as KofiColor] : color;
}