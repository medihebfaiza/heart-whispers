import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}

export class LovelyText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'pacifico' }]} />;
  }
}

export class LovelyTitle extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'pacifico', fontSize: 36}]} />;
  }
}

export class CuteMessage extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'amatic', fontSize: 48}]} />;
  }
}

export class Signature extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'inconsolata', fontSize: 24}]} />;
  }
}