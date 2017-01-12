import React, {Component} from 'react'
import { Text } from 'react-native'
import { Container, Header, Content, Footer, Title } from 'native-base'

export default class extends Component {
    render () {
        return (
            <Container>
                <Header>
                    <Title>Native</Title>
                </Header>
                <Content>
                    <Text>Test Content</Text>
                </Content>
            </Container>
        )
    }
}