import React from 'react';

import ExternalStyleSheetManager from './ExternalStyleSheetManager';
import ExternalBrowserStyleSheet from './ExternalBrowserStyleSheet';

const ExternalStyles = ({ children, document }) => {
    const sheet = ExternalBrowserStyleSheet.create(document);

    return (
        <ExternalStyleSheetManager
            sheet={sheet}
        >
            {children}
        </ExternalStyleSheetManager>
    );
};

export default ExternalStyles;
