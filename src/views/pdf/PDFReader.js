/**
 * Added by Luter
 * Reading PDF File
 */
import React from "react";
import { StyleSheet , View, Dimensions, Platform} from 'react-native';
import { Appbar , FAB, Portal, Snackbar, Button} from 'react-native-paper';
import theme_blue from '../../../configs/theme/themeBlue';
import PDFView from 'react-native-view-pdf';

class PDFReader extends React.Component {

    static navigationOptions = {
        header : null
    };
    state = {
        open: false,        
    };    


    _goBack = () => {this.props.navigation.navigate("Home")};

    _onComment = () => console.log('Comment');

    _onMore = () => console.log('Add People');

    _onAdd = () => console.log('More');

    _onEdit = () => {};

    /**
     * render app header
     * @back_button
     * @chat_button
     * @person_add_button
     * @more_horizontal_button
     */    
    _renderAppHeader(){
        return(
            <Appbar.Header theme={theme_blue}>
                <Appbar.BackAction
                    onPress={this._goBack}
                />
                <Appbar.Content
                    title="Contrato.doc"                    
                />
                <Appbar.Action icon="chat" onPress={this._onComment} />
                <Appbar.Action icon="person-add" onPress={this._onAdd} />
                <Appbar.Action icon="more-horiz" onPress={this._onMore} />
            </Appbar.Header>              
        );
    }

    /**
     * Fab Group
     * @Delete @Save @Edit
     */    
    _renderFab() {
        return (
          <Portal>
            <FAB.Group
                open={this.state.open}
                icon='edit'
                color={'white'}
                fabStyle={{backgroundColor : '#ff5722'}}
                actions={[                
                { icon: 'delete', label: 'Delete', onPress: () => console.log('Pressed star')},
                { icon: 'save', label: 'Save', onPress: () => console.log('Pressed email') },
                { icon: 'edit', label: 'Edit', onPress: () => this.props.navigation.navigate('PDFEditor') },
                ]}
                onStateChange={({ open }) => this.setState({ open })}
                onPress={() => {
                    if (this.state.open) {
                        // do something if the speed dial is open
                    }                
                }}                
            />
          </Portal>
        );
    }

    /**
    * load pdf file from resource
    * resource : @url , @file
    * resourcetype : @resourceType
    */
    _renderPDF(){   
        const resources = {
          file: Platform.OS === 'ios' ? 'downloadedDocument.pdf' : '/sdcard/Download/downloadedDocument.pdf',
          url: 'https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf',
          base64: 'JVBERi0xLjMKJcfs...',
        };    
        const resourceType = 'url';

        return (
          <View style={{width : '100%', height : '100%'}}>
            {/* Some Controls to change PDF resource */}
            <PDFView
              fadeInDuration={250.0}
              style={{ flex: 1 }}
              resource={resources[resourceType]}
              resourceType={resourceType}              
            />
          </View>
        );
    }


    /**
     * render main module 
     */
    
    render(){
        return(
            <View style={styles.container}>
                {this._renderAppHeader()}
                {this._renderPDF()}
                
                {this._renderFab()}
            </View>
        );
    }
}

const MyComponent = () => (
    <FAB
      style={styles.fab}
      small
      icon="add"
      onPress={() => console.log('Pressed')}
    />
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    pdfcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
        backgroundColor:'green',
    },
  });

export default PDFReader;
