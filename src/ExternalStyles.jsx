import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';
import { CONTEXT_KEY } from 'styled-components/lib/models/StyleSheet';

import ExternalBrowserStyleSheet from './ExternalBrowserStyleSheet';

StyleSheetManager.propTypes = {
    sheet: PropTypes.any.isRequired,
};

StyleSheetManager.childContextTypes = {
    [CONTEXT_KEY]: PropTypes.any.isRequired,
};

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
