/**
 * Added by Luter
 * Edit PDF File
 */
import React from "react";
import {Alert, StyleSheet , View, Dimensions, Platform, TouchableOpacity} from 'react-native';
import {List as PList, TextInput, Paragraph, Dialog, Portal, Button as PButton} from 'react-native-paper';
import theme_blue from '../../../configs/theme/themeBlue';
import PDFView from 'react-native-view-pdf';
import {Container, Header, Left, Body, Right, Content, Button, Icon, Badge, Text, Form, Picker,Title,  ListItem,List, Switch} from 'native-base'

class PDFFlipField extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		    expanded: false,
		    visible: false,
	    };
	}
	
	_handlePress = () =>
	    this.setState({
		    expanded: !this.state.expanded
    });

	_showDialog = () => this.setState({ visible: true });

  	_hideDialog = () => this.setState({ visible: false });

  	_hideOKDialog = () => {
  		this.setState({ visible: false });
  		this.props.navigation.navigate('PDFEditor');  		
  	}

	render(){
		return(
			<Container>
				<Header style={{backgroundColor:'#dadada', fontColor:'#0048A7'}}>
					<Left>
						<Button transparent onPress={this._showDialog}>
			              <Icon name='download' type='Feather' />
			            </Button>
					</Left>
					<Body>
						<Title style={{color:'#0048A7'}}>FlipDoc's Field</Title>
					</Body>
				</Header>
				<Content>
					<PList.Section style={{borderWidth:1, margin:5,borderColor:'#dadada'}}>
				        <PList.Accordion
				          title="All (to 11) - People 4"
				          left={props => <PList.Icon {...props} />}
				          expanded={this.state.expanded}
          				  onPress={this._handlePress}
				        >
				        	<PList.Item title="For all Persons Involved" left={props => <PList.Icon {...props} icon="brightness-1" color="red"/>}/>
					        <PList.Item title="People 1" left={props => <PList.Icon {...props} icon="brightness-1" color="green"/>}/>
					        <PList.Item title="People 2" left={props => <PList.Icon {...props} icon="brightness-1" color="blue"/>} />
					        <PList.Item title="People 3" left={props => <PList.Icon {...props} icon="brightness-1" color="yellow"/>}/>
					        <PList.Item title="People 4" left={props => <PList.Icon {...props} icon="brightness-1" color="cyan"/>}/>
				    	</PList.Accordion>				        
				    </PList.Section>

			    	<List>
				    	<ListItem icon selected>				    	
				            <Left>
				              <Button transparent>
				                <Icon active name="pencil" type='FontAwesome'/>
				              </Button>
				            </Left>
				            <Body>
					            <TouchableOpacity>
					              	<Text style={{color:'#0048A7'}}>Signature</Text>
				                </TouchableOpacity>
				            </Body>			            			            
			        	</ListItem>			        		        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="check-double" type='FontAwesome5'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Initials</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="calendar" type='MaterialCommunityIcons'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Date Signed</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="id-card-o" type='FontAwesome'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Name</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="earth" type='AntDesign'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Company</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="at-sign" type='Feather'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Email</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="pencil-square-o" type='FontAwesome'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Text Field</Text>
				            </Body>		
				            <Right>			              
				              <Icon active name="long-arrow-right" type='FontAwesome'/>
				            </Right>	            	            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="attach-file" type='MaterialIcons'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Attachment</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="check" type='AntDesign'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Approve</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button  transparent>
				                <Icon active name="closecircle" type='AntDesign'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Decline</Text>
				            </Body>			            
				        </ListItem>			        

				        <ListItem icon>
				            <Left>
				              <Button transparent>
				                <Icon active name="dollar" type='FontAwesome'/>
				              </Button>
				            </Left>
				            <Body>
				              <Text style={{color:'#0048A7'}}>Payments</Text>
				            </Body>		
				            <Right>			              
				              <Icon active name="long-arrow-right" type='FontAwesome'/>
				            </Right>	            
				        </ListItem>			        		        
				    </List>

			        <Portal>
			          <Dialog
			             visible={this.state.visible}
			             onDismiss={this._hideDialog}>
			            <Dialog.Title>Information</Dialog.Title>
			            <Dialog.Content>
			              <Paragraph>Define wich information you need and put the label information on the place holder</Paragraph>
			              <TextInput					        
					        //value={this.state.text}
					        //onChangeText={text => this.setState({ text })}
					      />
			            </Dialog.Content>
			            <Dialog.Actions style={{margin:20}}>			            				            	
			            	<Left>
			            		<Badge style={{backgroundColor:'#977de0'}} >
		                          <Text>4</Text>  
		                        </Badge>
			            	</Left>				            
			                <PButton style={{marginHorizontal:2}} mode='outlined' onPress={this._hideDialog}>CANCEL</PButton>
			                <PButton style={{marginHorizontal:2}} mode='outlined' onPress={this._hideOKDialog}>OK</PButton>
			            </Dialog.Actions>
			          </Dialog>
			        </Portal>

				</Content>
			</Container>
		);
	}
}

export default PDFFlipField;