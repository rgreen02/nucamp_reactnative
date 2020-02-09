import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { CAMPSITES } from '../shared/campsites';

function Misson() {
    return (
        <Card title='Our Misson' >
            <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness.
                We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness
                trekkers on our staff personally verfiy each campsite to make sure that they are up to our standards. We also present a platform
                for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );

    return <View />;
}

function RenderPartner({ item }) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
            >
                <Text
                    style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS,
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {

        const renderPartner = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/bootstrap-logo.png') }}
                />
            );
        };

        return (
            <ScrollView>
                <Misson />
                <Card
                    title='Community Partners'>
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>


            </ScrollView>
        );
    }
}

export default About;