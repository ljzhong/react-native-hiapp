import React, { 
    Component    
} from 'react'

import { Platform } from 'react-native'

import {
    Scene,
    Router,
    Modal, 
    TabBar, 
    Actions
} from 'react-native-router-flux'

const getSceneStyle = function (props, computedProps) {
    const style = {
        flex: 1,
        backgroundColor: '#efeff4',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    }
    if (computedProps.isActive) {
        style.paddingTop = computedProps.hideNavBar ? 0 : Platform.OS === 'android' ? 56 : 64
        style.paddingBottom = computedProps.hideTabBar ? 0 : 50
    }
    return style
}

export default class NavigatorComp extends Component {
    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
                <Scene key='modal' component={Modal} >
                    <Scene key='root'>
                        <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedStyle}>
                            {require('../../Views/Home')}
                            {require('../../Views/Contacts')}
                            {require('../../Views/Settings')}
                        </Scene>
                        {require('../../Views/Tweet')}
                    </Scene>
                </Scene>
            </Router>
        )
    }    
} 

const styles = {
    tabBarStyle: {
        borderTopWidth: 0.5,
        borderColor: '#c4c4c4',
        backgroundColor: '#f7f7f8'
    },
    tabBarSelectedStyle: {
        backgroundColor: '#f7f7f8'
    }
}