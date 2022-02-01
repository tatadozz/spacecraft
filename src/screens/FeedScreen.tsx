import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList, SafeAreaViewBase } from "react-native";
import { ActivityIndicator, Button, Colors } from "react-native-paper";
import { useStarships } from "../../hooks/useStarships";
import CardItem from "../components/CardItem";
import HeadTitle from "../components/HeadTitle";

const FeedScreen = () => {
    const { isLoading, isError, data, refetch } = useStarships();
    if (isLoading) {
        return (
            <SafeAreaView>
                <HeadTitle title={"⏳ Loading..."} />
                <ActivityIndicator />
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

export default FeedScreen;