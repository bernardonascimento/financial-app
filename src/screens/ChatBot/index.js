import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import ChatBot from "../../chat/lib";

const Review = (props) => {
  const { name, gender, age } = steps;

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const steps = [
  {
    id: "1",
    message: "Olá eu me chamo Jexi, sua nova assistente financeira. Qual seu nome?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "{previousValue}, vai ser um prazer te auxiliar nessa nova jornada...",
    end: true
  },
  {
    id: "gender",
    options: [
      { value: "male", label: "Male", trigger: "5" },
      { value: "female", label: "Female", trigger: "5" },
    ],
  },
  {
    id: "5",
    message: "How old are you?",
    trigger: "age",
  },
  {
    id: "age",
    user: true,
    trigger: "7",
    validator: (value) => {
      if (isNaN(value)) {
        return "value must be a number";
      } else if (value < 0) {
        return "value must be positive";
      } else if (value > 120) {
        return `${value}? Come on!`;
      }

      return true;
    },
  },
  {
    id: "7",
    message: "Great! Check out your summary",
    trigger: "review",
  },
  {
    id: "review",
    component: <Review />,
    asMessage: true,
    trigger: "update",
  },
  {
    id: "update",
    message: "Would you like to update some field?",
    trigger: "update-question",
  },
  {
    id: "update-question",
    options: [
      { value: "yes", label: "Yes", trigger: "update-yes" },
      { value: "no", label: "No", trigger: "end-message" },
    ],
  },
  {
    id: "update-yes",
    message: "What field would you like to update?",
    trigger: "update-fields",
  },
  {
    id: "update-fields",
    options: [
      { value: "name", label: "Name", trigger: "update-name" },
      { value: "gender", label: "Gender", trigger: "update-gender" },
      { value: "age", label: "Age", trigger: "update-age" },
    ],
  },
  {
    id: "update-name",
    update: "name",
    trigger: "7",
  },
  {
    id: "update-gender",
    update: "gender",
    trigger: "7",
  },
  {
    id: "update-age",
    update: "age",
    trigger: "7",
  },
  {
    id: "end-message",
    message: "Thanks! Your data was submitted successfully!",
    end: true,
  },
];

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatBot
        steps={steps}
        botBubbleColor="#0086FF"
        headerTitle="Speech Recognition"
        recognitionEnable={true}
      />
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0086FF",
  },
});
