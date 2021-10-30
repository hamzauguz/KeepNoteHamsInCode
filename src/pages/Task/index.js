import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import database from '../../config/firebaseconfig'
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'
import { auth } from '../../../firebase'
import { collection, query, where } from "firebase/firestore";
import { Ionicons } from '@expo/vector-icons';


export default function Task({ navigation }) {
    const [task, setTask] = useState([])

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete()
    }

    function handleSignOut() {
        auth
            .signOut()
            .then(() => {
                navigation.replace("LoginScreen")
            })
            .catch(error => alert(error.message))
    }

    useEffect(() => {
        const routeref = database.collection("Tasks").where("email", "in", [auth.currentUser?.email])
        routeref.onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View
                                style={styles.Tasks}
                            >
                                <TouchableOpacity style={styles.deleteTask}
                                    onPress={() => {

                                    }}
                                >
                                    <FontAwesome
                                        name="star"
                                        size={23}
                                        color="#F92e6A"
                                    >

                                    </FontAwesome>
                                </TouchableOpacity>
                                <Text style={styles.DescriptionTask}
                                    onPress={() => {
                                        navigation.navigate("Details", {
                                            id: item.id,
                                            description: item.description,
                                            email: item.email
                                        })
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}
            />


            <View style={styles.container}>

                <TouchableOpacity style={styles.buttonNewTask}
                    onPress={() => navigation.navigate("NewTask")}
                >
                    <Text style={styles.iconButton}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignOut} style={styles.buttonNewTaskRight}>
                    <Ionicons name="log-out" size={32} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{
                backgroundColor: "#F92e6a",
                borderRadius: 10,
                width: "80%",
                right: -40,
                height: 35,
                padding: -20,
                top: -130,
            }}>
                <Text style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#ffffff",
                    top: 4
                }}>
                    {auth.currentUser?.email}
                </Text>
            </View>

        </View>
    )
}
