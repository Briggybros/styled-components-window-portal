import PropTypes from 'prop-types';
import { StyleSheetManager, ServerStyleSheet } from 'styled-components';
import StyleSheet, { CONTEXT_KEY } from 'styled-components/lib/models/StyleSheet';
import ExternalBrowserStyleSheet from './ExternalBrowserStyleSheet';

StyleSheetManager.childContextTypes = {
    [CONTEXT_KEY]: PropTypes.oneOfType([
        PropTypes.instanceOf(StyleSheet),
        PropTypes.instanceOf(ServerStyleSheet),
        PropTypes.instanceOf(ExternalBrowserStyleSheet),
    ]).isRequired,
};

StyleSheetManager.propTypes = {
    sheet: PropTypes.oneOfType([
        PropTypes.instanceOf(StyleSheet),
        PropTypes.instanceOf(ServerStyleSheet),
        PropTypes.instanceOf(ExternalBrowserStyleSheet),
    ]).isRequired,
};

export default StyleSheetManager;
