import React, { 
    Component    
} from 'react'

import {
    Scene,
    Router,
    Modal, 
    TabBar, 
    Actions
} from 'react-native-router-flux'

import HomeView from '../../Views/Home' 
import SettingsView from '../../Views/Settings' 
import ContactsView from '../../Views/Contacts' 

import AboutView from '../../Views/About'
import MessageView from '../../Views/Message'
import TweetView from '../../Views/Tweet'
import FeedbackView from '../../Views/Feedback'
import WebViewView from '../../Views/WebView'
import TweetDetailsView from '../../Views/TweetDetails'
import CommentView from '../../Views/Comment'

import styleUtils from '../../Styles'
import TabIcon from '../TabIcon'

export default class NavigatorComp extends Component {
    render() {
        return (
            <Router>
                <Scene key='modal' component={Modal}>
                    <Scene key='root'>
                        <Scene key='tabbar' tabs={true} tabBarStyle={styles.tabBarStyle} tabBarSelectedItemStyle={styles.tabBarSelectedStyle}>
                            <Scene key='home_tab' component={HomeView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Home'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                            <Scene key='contacts_tab' component={ContactsView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Contacts'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                            <Scene key='setting_tab' component={SettingsView} navigationBarStyle={styles.navBarStyle} title='HiApp' iconText={'Settings'} icon={TabIcon} sceneStyle={[styleUtils.commonScene]}/>
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        )
    }    
} 

const styles = {
    navBarStyle: {
        backgroundColor: '#f7f7f8'
    },
    tabBarStyle: {
        borderTopWidth: 0.5,
        borderColor: '#c4c4c4',
        backgroundColor: '#f7f7f8'
    },
    tabBarSelectedStyle: {
        backgroundColor: '#f7f7f8'
    }
}