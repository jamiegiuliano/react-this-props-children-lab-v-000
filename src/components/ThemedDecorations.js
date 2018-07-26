import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const childrenWithAddedProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: this.props.theme
      });
    });
    console.log({childrenWithAddedProp})
    return (
      <div className="theme">
        {childrenWithAddedProp}
      </div>
    );
  }
}
