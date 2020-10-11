import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function RepoCard({ repository, onLike }) {
  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{repository.title}</Text>

      <View style={styles.techsContainer}>
        {repository.techs && repository.techs.map(tech => (
          <Text style={styles.tech} key={tech.trim()}>
            {tech}
          </Text>
        ))}
      </View>

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${repository.id}`}
        >
          {repository.likes} curtida{repository.likes > 1 ? 's' : ''}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onLike(repository.id)}
        testID={`like-button-${repository.id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    marginTop: 10,
    borderRadius: 10
  },
  repository: {
    fontSize: 26,
    fontWeight: "bold",
    color: '#FFF',
  },
  techsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  tech: {
    fontSize: 11,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#dbdbdb",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: "#111",
  },
  likesContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 10,
  },
  button: {
    marginTop: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#7159c1",
    padding: 10,
    textAlign: "center"
  },
});
