/**
 * Added by Luter
 * Edit PDF File
 */
import React from "react";
import {Alert, StyleSheet , View, Dimensions, Platform, TouchableOpacity, PanResponder, Animated} from 'react-native';
//import { Appbar , FAB, Portal, Snackbar, Button, Badge} from 'react-native-paper';
import theme_blue from '../../../configs/theme/themeBlue';
import PDFView from 'react-native-view-pdf';
import {Container, Header, Left, Body, Right, Content, Button, Icon, Badge, Text} from 'native-base'

class PDFEditor extends React.Component {

    static navigationOptions = {
        header : null
    };

    constructor()
    {
        super();                 
        this.state = {                         
            pan : new Animated.ValueXY(),
            scale: new Animated.Value(1),

            locationX: 100,             
            locationY: 100 
        };
    }

    componentWillMount()
    {      
      this.panResponder = PanResponder.create(
      {
        onStartShouldSetPanResponder: (event, gestureState) => true,      
        onStartShouldSetPanResponderCapture: (event, gestureState) => true,      
        onMoveShouldSetPanResponder: (event, gestureState) => false, 
        onMoveShouldSetPanResponderCapture: (event, gestureState) => false, 
        onPanResponderGrant: (event, gestureState) => true,
        onPanResponderMove: (event, gestureState) => {            
          this.setState({                 
              locationX: event.nativeEvent.locationX.toFixed(2),                 
              locationY: event.nativeEvent.locationY.toFixed(2)             
          });
        },      
        onPanResponderRelease: (event, gestureState) =>
        {
          
        }
      });

      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (event, gestureState) => true,      
        onStartShouldSetPanResponderCapture: (event, gestureState) => true,              
        onMoveShouldSetResponderCapture: () => true,
        onMoveShouldSetPanResponderCapture: () => true,

        onPanResponderGrant: (e, gestureState) => {
          // Set the initial value to the current state
          alert('grant');
          this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
          this.state.pan.setValue({x: 0, y: 0});
          Animated.spring(
            this.state.scale,
            { toValue: 1.1, friction: 3 }
          ).start();
        },

        // When we drag/pan the object, set the delate to the states pan position
        onPanResponderMove: (e, gestureState)=> {
          Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y},
          ]);
          alert('move');
        },

        onPanResponderRelease: (e, {vx, vy}) => {
          alert('release');
          // Flatten the offset to avoid erratic behavior
          this.state.pan.flattenOffset();
          Animated.spring(
            this.state.scale,
            { toValue: 1, friction: 3 }
          ).start();
        }
      });
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
        // Destructure the value of pan from the state
        let { pan } = this.state;

        // Calculate the x and y transform from the pan value
        let [translateX, translateY] = [pan.x, pan.y];

        // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
        let imageStyle = {transform: [{translateX}, {translateY}]};

        return(
            <Container>
                <Header style={{backgroundColor:'#dadada', fontColor:'#0048A7'}}>
                    <Button transparent>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('PDFReader')}>
                        <Icon style={{color:'#fd5f2d'}} name='checkcircleo' type='AntDesign'/>
                      </TouchableOpacity>
                    </Button>                    
                    <Button transparent >
                      <TouchableOpacity onPress={() => {this.props.navigation.navigate('PDFFlipField')} }>
                        <Badge style={{backgroundColor:'#977de0'}} >
                          <Text>4</Text>  
                        </Badge>
                      </TouchableOpacity>
                    </Button>
                    <Button transparent>
                      <TouchableOpacity>
                        <Icon name='download' type='Feather' style={{color:'#757575'}}/>
                      </TouchableOpacity>
                    </Button>
                  <Right>
                    <Button  transparent>
                      <TouchableOpacity>
                        <Icon name='plus' type='Feather' style={{color:'#757575'}}/>
                      </TouchableOpacity>
                    </Button>
                    <Button  transparent>
                      <TouchableOpacity>
                        <Icon name='more-horizontal' type='Feather' style={{color:'#757575'}}/>
                      </TouchableOpacity>
                    </Button>
                  </Right>
                </Header>

                  <View style = {[ styles.point, { top: parseFloat( this.state.locationY - 15 ), left: parseFloat( this.state.locationX - 15 )}]} /> 
                  <View style = {{ flex: 1, backgroundColor: 'transparent' }}  { ...this.panResponder.panHandlers } />                              
                
                {this._renderPDF()}
            </Container>
        );
    }
}
/*
  <View style = { styles.childView }>    
    <Animated.View style={imageStyle} {...this._panResponder.panHandlers}>
      <View style={styles.point} ></View>
    </Animated.View>
  </View> 

*/


const styles = StyleSheet.create({
    appbar: {
      backgroundColor:'#DADADA',
    },
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
    childView:
    {
        flex: 1,
        backgroundColor: '#263238',
        overflow: 'hidden',
        zIndex : 5,
    },
 
    point:
    {
        height: 40,
        width: 80,
        position: 'absolute',
        //borderRadius: 15,
        backgroundColor: '#AAAAAA',
        zIndex : 7,
    }
  });

export default PDFEditor;
