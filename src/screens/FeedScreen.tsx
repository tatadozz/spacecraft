import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import { Colors } from "react-native-paper";

import { data } from "../../data/data";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import HeadTitle from "../components/HeadTitle";

const App = () => {
    const renderItem = (props: any) => (
        <CardItem {...props} />
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
            <HeadTitle title="Spaceships"/>
            <FlatList
                data={data.results}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
            {/*<View style={styles.container}>
                <Text>{JSON.stringify(data.results)}</Text>
            </View>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: Colors.blueGrey100
    },
    container: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
});

export default App;