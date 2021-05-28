# External-Styled-Components #
**Deprecated**
This package is deprecated as of styled-components 3.1.7 where the StyleSheetManager.target api has taken over.

A component to append styled-components output to any node

## Usage ##

Taken from [styled-window-portal](https://github.com/Briggybros/styled-window-portal)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ExternalStyle from 'external-styled-components';

class StyledWindowPortal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.container = document.createElement('div');
        this.externalWindow = null;
    }

    componentWillMount() {
        this.externalWindow = window.open('', '');
    }

    componentDidMount() {
        this.externalWindow.onunload = this.props.onClose;

        this.externalWindow.document.body.appendChild(this.container);
    }

    componentWillUnmount() {
        this.externalWindow.close();
    }

    render() {
        return (
            <ExternalStyle
                document={this.externalWindow.document}
            >
                <div>
                    {ReactDOM.createPortal(this.props.children, this.container)}
                </div>
            </ExternalStyle>
        );
    }
}

StyledWindowPortal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
};

StyledWindowPortal.defaultProps = {
    onClose: () => {},
};

export default StyledWindowPortal;
```

Simply pass a document to the ExternalStyle component, and all children of that component will have their style written to that document.

## Caveats ##

There are currently prop type validation warnings that are thrown by the usage of styled-components by this package - These do not affect the function of the package.
