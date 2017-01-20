 import React, {Component} from 'react'
 import { View, Text, StatusBar } from 'react-native'
 import { Container, Content, Footer, Button, Icon } from 'native-base'
 import styles from './styles'

 import Choice from './Choice'
 import Fill from './Fill'

 class Question extends Component {
     
     render () {
         return (
             <Container>
                <View style={styles.viewQuestion}>
                    <Text style = {styles.textQuestion}>อยากได้คอมฟรีหรือไม่ ?</Text>
                </View>
                <Content>
                    <View style={styles.viewAnswer}>
                        <Choice />
                        <Fill />
                    </View>
                </Content>
                <Footer style={styles.viewFooter}>
                     <Button transparent style={styles.buttonBack}>
                        <Icon name="ios-arrow-back" />Back
                     </Button>
                </Footer>
            </Container>
         )
     }
 }
 
 export default Question