import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Button, Text } from 'native-base';

function ReportCase() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const reportCase = useCallback(() => {
        if (!symptoms && !name) {
            Alert.alert('Warning', 'Please fill name and symptoms');
            return;
        }
        const data = {
            name,
            age,
            phone,
            symptoms
        }
        // call api to report case;
        // api.reportCase(data);
        //handle response
        Alert.alert('Success', 'Thanks for volutarily reporting your symptoms and details');

    })

    return (
        <Container>
          <Content>
            <Form>
              <Item>
                <Input placeholder="Name" onChangeText={(text) => setName(text)}/>
              </Item>
              <Item>
              <Input placeholder="Age" onChangeText={(text) => setAge(text)}/>
              </Item>
              <Item>
              <Input placeholder="Phone" onChangeText={(text) => setPhone(text)}/>
              </Item>
              <Item last>
              <Input placeholder="Symptoms" onChangeText={(text) => setSymptoms(text)}/>
              </Item>
            </Form>
            <View style={{alignSelf: 'center', justifyContent: 'space-around', marginTop:  100}}>
                  <Button primary >
                  <TouchableOpacity onPress={() => reportCase()}>
                      <Text>Report Case</Text>
                      </TouchableOpacity>
                  </Button>
                  
                  </View>
          </Content>
        </Container>
      );
}

export default ReportCase;