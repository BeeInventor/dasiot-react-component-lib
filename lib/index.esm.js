import React from 'react';
import MaterialUIButton from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createTheme from '@material-ui/core/styles/createTheme';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var useStyles = makeStyles(function (theme) { return ({
    root: function (_a) {
        var height = _a.height;
        return (__assign(__assign({}, theme.text.Subtitle_16_Med), { padding: '4px 32px', borderRadius: 16, textTransform: 'none', height: height !== null && height !== void 0 ? height : 32, minHeight: 32 }));
    },
    contained: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '&:active': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
        '&:disabled': {
            color: '#FFFFFF',
        },
    },
    containedPrimary: {
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: theme.color.primary.$80,
        },
        '&:active': {
            backgroundColor: theme.color.primary.$100,
        },
        '&:disabled': {
            backgroundColor: '#E6D2A1',
        },
    },
    containedSecondary: {
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: theme.color.secondary.$80,
        },
        '&:active': {
            backgroundColor: theme.color.secondary.$80,
        },
        '&:disabled': {
            backgroundColor: '#B3B3B3',
        },
    },
}); }, { name: 'Button' });
var Button = function (_a) {
    var classes = _a.classes, variant = _a.variant, height = _a.height, otherProps = __rest(_a, ["classes", "variant", "height"]);
    var localClasses = useStyles({ height: height });
    var _b = classes !== null && classes !== void 0 ? classes : {}, root = _b.root, contained = _b.contained, containedPrimary = _b.containedPrimary, containedSecondary = _b.containedSecondary, otherClasses = __rest(_b, ["root", "contained", "containedPrimary", "containedSecondary"]);
    return (React.createElement(MaterialUIButton, __assign({ classes: __assign({ root: "" + localClasses.root + (root ? ' ' + root : ''), contained: "" + localClasses.contained + (contained ? ' ' + contained : ''), containedPrimary: "" + localClasses.containedPrimary + (containedPrimary ? ' ' + containedPrimary : ''), containedSecondary: "" + localClasses.containedSecondary + (containedSecondary ? ' ' + containedSecondary : '') }, otherClasses), variant: variant }, otherProps)));
};
Button.defaultProps = {
    variant: 'contained',
};

var TestButton = function (props) { return (React.createElement(MaterialUIButton, __assign({}, props))); };

var text = {
    Head_20_Bold: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 1.35,
    },
    Head_20_Medium: {
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.35,
    },
    Head_Sub_18_Bold: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 1.33,
    },
    Subtitle_16_Med: {
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.35,
    },
    Subtitle_14_Reg: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 1.35,
    },
    Body_16_Reg: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 1.5,
    },
    Body_14_Reg: {
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: 1.57,
    },
    Caption_12_Reg: {
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: 2,
    },
};
var color = {
    primary: {
        $80: '#FFB905',
        $100: '#E6A600',
    },
    secondary: {
        $40: '#E5E5E5',
        $60: '#A1A1A1',
        $80: '#656565',
        $100: '#3E3E3E',
    },
};
var theme = createTheme({
    palette: {
        primary: {
            main: color.primary.$100,
        },
        secondary: {
            main: color.secondary.$100,
        },
    },
    color: color,
    text: text,
});

export { Button, TestButton, theme };
//# sourceMappingURL=index.esm.js.map
