import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from './style'
import database from '../../config/firebaseconfig'
import { Ionicons } from '@expo/vector-icons';


export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({ description: descriptionEdit, })
        navigation.navigate("Task")
    }
    function deleteTask(description, id) {
        database.collection("Tasks").doc(id).delete({ description: descriptionEdit, })
        navigation.navigate("Task")
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                placeholder="Change Note..."
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { editTask(descriptionEdit, idTask) }}
            >
                <Ionicons name="save" size={32} color="white" />

            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonNewTaskRight}
                onPress={() => { deleteTask(descriptionEdit, idTask) }}
            >

                <Ionicons name="trash-bin-outline" size={32} color="white" />
            </TouchableOpacity>

        </View>
    )

}