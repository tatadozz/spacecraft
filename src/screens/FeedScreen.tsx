import React from "react";
import ContentLoader from "react-content-loader";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList, SafeAreaViewBase } from "react-native";
import { Button, Colors } from "react-native-paper";
import { Circle, Rect } from "react-native-svg";

import { useStarships } from "../../hooks/useStarships";
import CardItem from "../components/CardItem";
import Header from "../components/Header";
import HeadTitle from "../components/HeadTitle";
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

const App = () => {
    const { isLoading, isError, data, refetch } = useStarships();
    if (isLoading) {
        return (
            <SafeAreaView>
                <HeadTitle title={"⏳ Loading..."} />
                <ContentLoader viewBox="0 0 380 70">
                    <Circle cx="30" cy="30" r="30" />
                    <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                    <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                </ContentLoader>
            </SafeAreaView >
        )
    }
    if (isError) {
        return (
            <SafeAreaView>
                <HeadTitle title={"😢 Error"} />
                <Button onPress={refetch}>refetch</Button>
            </SafeAreaView>
        )
    }

    const renderItem = (props: any) => (
        <CardItem {...props} />
    );

    return (
        <SafeAreaView style={styles.safeContainer}>
            <HeadTitle title={"Starships"} />
            {
                data && (
                    <FlatList
                        data={data.results}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                )
            }
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