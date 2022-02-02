import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';

type Props = {
    route: any,
    navigation: any
};

const DetailScreen = ({route, navigation}: Props) => {
    const {
        name,
        manufacturer,
        hyperdrive_rating,
        max_atmosphering_speed,
        crew,
        passengers,
        consumables,
        cargo_capacity
    } = route.params.item;
  return (
    <SafeAreaView style={{flex:1}}>
        <View>
            <Image
            style={styles.img}
            source={{
                uri: 'https://picsum.photos/700',
              }}
            />
            <IconButton style={styles.btn} size={45} icon="arrow-left-circle" onPress={() => navigation.goBack()}></IconButton>
        </View>
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.sub}>{manufacturer}</Text>
            </View>
            <View>
                <View style={styles.row}>
                    <IconButton size={24} icon="tools"></IconButton>
                    <Text style={styles.sub}>{hyperdrive_rating}</Text>
                </View>
                <View style={styles.row}>
                    <IconButton size={24} icon="tools"></IconButton>
                    <Text style={styles.sub}>{max_atmosphering_speed}</Text>
                </View>
            </View>
            <View style={styles.opposition}>
                <View style={styles.left}>
                    <Text style={styles.text2}>Crew</Text>
                    <Text style={styles.text2}>Passengers</Text>
                    <Text style={styles.text2}>Consumables</Text>
                    <Text style={styles.text2}>Cargo capacity</Text>
                </View>
                <View style={styles.right}>
                    <Text style={[styles.tar, styles.text2]}>{crew}</Text>
                    <Text style={[styles.tar, styles.text2]}>{passengers}</Text>
                    <Text style={[styles.tar, styles.text2]}>{consumables}</Text>
                    <Text style={[styles.tar, styles.text2]}>{cargo_capacity}</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
    img: {
        width: "100%",
        minHeight: "40%",
    }, 
    btn: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    container: {
        flex: 1,
        padding: 40,
        justifyContent: "space-around"

    },
    name: {
        fontSize: 34,
        fontWeight: "bold"
    },
    sub: {
        fontSize: 24,
    }, 
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    opposition: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center"
    },
    left: {
        width: "50%"
    },
    right: {
        width: "50%"
    },
    tar: {
        textAlign: "right"
    },
    text2: {
        fontSize: 24
    }

});
