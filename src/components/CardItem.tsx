import { Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button, Card, Colors} from 'react-native-paper';
import { Routes } from '../../navigation/Routes';
import { useNavigation } from '@react-navigation/native';

interface Props {
    item: {
        name: string;
        model: string;
        manufacturer: string;
        cost_in_credits: string;
        hyperdrive_rating: string
        max_atmosphering_speed: string
        crew: string
        passengers: string
        consumables: string
        cargo_capacity: string
    }
}

const CardItem = (props: Props) => {
    console.log(props.item);
    const {item} = props

    const navigation = useNavigation()

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
                <Button style={styles.buy} 
                onPress={() =>
                    navigation.navigate(Routes.DETAIL_SCREEN, { item })
                }>
            <Text style={styles.buyText}>I want it!</Text></Button>
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
