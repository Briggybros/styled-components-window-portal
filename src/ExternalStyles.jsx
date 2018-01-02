import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheetManager } from 'styled-components';

import BrowserStyleSheet from './BrowserStyleSheet';

const ExternalStyles = ({ children, document }) => {
    const sheet = BrowserStyleSheet.create(document);

    return (
        <StyleSheetManager
            sheet={sheet}
        >
            {children}
        </StyleSheetManager>
    );
};

ExternalStyles.propTypes = {
    children: PropTypes.node.isRequired,
    document: PropTypes.object.isRequired, // eslint-disable-line
};
