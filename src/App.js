import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";
import api from "./services/api";
import RepoCard from "./components/RepoCard";

export default function App() {
  const [repositories, setRepositories] = useState([]);

  async function handleLikeRepository(id) {
    const response = await api.post(`/repositories/${id}/like`);
    const repositoryUpdated = response.data;

    const repositoryIndex = repositories.findIndex((repo) => repo.id === id);

    if (repositoryIndex < 0) {
      return;
    }

    repositories[repositoryIndex] = repositoryUpdated;

    setRepositories([...repositories]);
  }

  const fetchRepos = () => {
    api.get("/repositories").then((response) => {
      setRepositories(response.data);
    });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#313131" />
      <SafeAreaView style={styles.container}>
        {repositories && (<FlatList
          data={repositories}
          keyExtractor={repository => repository.id}
          renderItem={({ item: repository }) => (
            <RepoCard repository={repository} onLike={handleLikeRepository} />
          )}
        />)}
        {!repositories && (
          <Text style={styles.noRepository}>No repository found. 🌈</Text>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#313131",
  },
  noRepository: {
    fontSize: 14,
    color: "#fff",
    padding: 10,
    marginTop: 20,
    textAlign: "center"
  }
});
