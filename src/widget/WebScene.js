/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 */

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';

// create a component
class WebScene extends Component {

    constructor(props) {
        super(props)
        this.state = {
            source : {}
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({source :{url: this.props.url}})
        }, 500);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref='webView'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit={true}
                />
            </View>
        );
    }

    onLoadEnd(e) {
        Actions.refresh({ title: e.nativeEvent.title })
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default WebScene;
