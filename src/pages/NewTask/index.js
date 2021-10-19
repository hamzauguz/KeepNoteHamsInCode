import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebaseconfig'
import styles from "../NewTask/style";
import { auth } from '../../../firebase'



export default function NewTask({ navigation }) {
    const [description, setdescription] = useState(null)
    const [email, setemail] = useState(auth.currentUser?.email)

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            email: email,
            status: false
        })
        navigation.navigate("Task")

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Make a Note..."
                onChangeText={setdescription}
                value={description}
            />


            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { addTask() }}
            >
                <Text style={styles.iconButton}>
                    Save
                </Text>
            </TouchableOpacity>

        </View>
    )
}