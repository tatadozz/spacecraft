import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
    title: string;
};

const HeadTitle = (props: Props) => {
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 28,
        marginLeft: 20,
        padding: 10
    }
})

export default HeadTitle;
