import React from 'react';
import { StyleSheetManager } from 'styled-components';

import ExternalBrowserStyleSheet from './ExternalBrowserStyleSheet';

const ExternalStyles = ({ children, element }) => {
    const sheet = ExternalBrowserStyleSheet.create(element);

    return (
        <StyleSheetManager
            sheet={sheet}
        >
            {children}
        </StyleSheetManager>
    );
};

export default ExternalStyles;
