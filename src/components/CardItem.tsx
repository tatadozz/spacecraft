import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Card, Colors, Paragraph, Title } from 'react-native-paper';

interface Props {
    item: {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
    }
}

const CardItem = (props: Props) => {
    console.log(props.item);
    return (
        <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Title title={props.item.name} />
            <Card.Content>
                <Text style={styles.cardText}>{props.item.manufacturer}</Text>
                <Text style={styles.cardText}>{props.item.model}</Text>
                <Text style={styles.cardText}>Only for <Text style={styles.price}>{props.item.cost_in_credits} </Text>Credits</Text>
            </Card.Content>
            <Card.Actions>
                <Button style={styles.buy}><Text style={styles.buyText}>I want it!</Text></Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 20
    },
    name: {
        fontWeight: "bold",
        fontSize: 24
    },
    cardText: {
        margin: 5,
        fontSize: 16
    },
    price: {
        fontSize: 24,
    },
    buy: {
        backgroundColor: Colors.purple300,
        margin: 10
    },
    buyText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    }
})

export default CardItem;
