// 对于颜色，通常情况是设置其中性色与主题色。除了这些颜色，可能还有边框颜色等等
export var color = {
    // Palette
    primary: "#FF4785",
    secondary: "#1EA7FD",
    tertiary: "#DDDDDD",
    orange: "#FC521F",
    gold: "#FFAE00",
    green: "#66BF3C",
    seafoam: "#37D5D3",
    purple: "#6F2CAC",
    ultraviolet: "#2A0481",
    // Monochrome
    lightest: "#FFFFFF",
    lighter: "#F8F8F8",
    light: "#F3F3F3",
    mediumlight: "#EEEEEE",
    medium: "#DDDDDD",
    mediumdark: "#999999",
    dark: "#666666",
    darker: "#444444",
    darkest: "#333333",
    border: "rgba(0,0,0,.1)",
    // Status
    positive: "#66BF3C",
    negative: "#FF4400",
    warning: "#E69D00",
};
// 背景色与一般颜色也不太一样，可以单独做个token
export var background = {
    app: "#F6F9FC",
    appInverse: "#7A8997",
    positive: "#E1FFD4",
    negative: "#FEDED2",
    warning: "#FFF5CF",
};
// 排版除了字体大小，还有字重，字体类型。等等，根据需求自行设置
export var typography = {
    type: {
        primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
        code: //书写字体
        '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
        regular: "400",
        bold: "700",
        extrabold: "800",
        black: "900",
    },
    size: {
        s1: "12",
        s2: "14",
        s3: "16",
        m1: "20",
        m2: "24",
        m3: "28",
        l1: "32",
        l2: "40",
        l3: "48",
    },
};
// 间距与圆角
export var spacing = {
    padding: {
        small: 10,
        medium: 20,
        large: 30,
    },
    borderRadius: {
        small: 5,
        default: 10,
    },
};
export var breakpoint = 600;
export var pageMargin = 5;
