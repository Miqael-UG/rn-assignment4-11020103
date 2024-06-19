import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import { PopularJobs, FeaturedJobs } from "../data/data";
import { useRoute } from "@react-navigation/native";

const renderJobs = ({ item }) => (
  <View style={styles.job}>
    <Image source={item.companyLogo} style={styles.companyLogo} />
    <View style={styles.jobDetails}>
      <Text style={styles.jobTitle}>{item.name}</Text>
      <Text style={styles.companyName}>{item.company}</Text>
      <Text style={styles.salary}>{item.salary}</Text>
      <Text style={styles.location}>{item.location}</Text>
    </View>
  </View>
);

const Header = ({ name, email }) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
    </View>
    <Image style={styles.ellipse} source={require("../assets/Ellipse.png")} />
    <View style={styles.ovalContainer}>
      <View style={styles.oval}></View>
    </View>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBar}>
    <View style={styles.searchInput}>
      <Image
        style={styles.searchIcon}
        source={require("../assets/search.png")}
      />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
    <View style={styles.filter}>
      <Image
        style={styles.filterIcon}
        source={require("../assets/filter.png")}
      />
    </View>
  </View>
);

const FeaturedJobSection = () => (
  <View style={styles.featuredSection}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {FeaturedJobs.map((item) => (
        <View
          key={item.id}
          style={[
            styles.jobContainer,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <View style={styles.jobInfoOne}>
            <View style={styles.jobLogo}>
              <Image style={styles.companyLogo} source={item.companyLogo} />
            </View>
            <View style={styles.jobDetails}>
              <Text style={styles.jobTitle}>{item.name}</Text>
              <Text style={styles.companyName}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.jobInfoTwo}>
            <Text style={styles.salary}>{item.salary}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const PopularJobSection = () => (
  <View style={styles.featuredSection}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <ScrollView showsHorizontalScrollIndicator={false}>
      {PopularJobs.map((item) => (
        <View key={item.id} style={styles.popularJobContainer}>
          <View style={styles.popularJobInfo}>
            <Image
              style={styles.popularCompanyLogo}
              source={item.companyLogo}
            />
            <View style={styles.popularJobDetails}>
              <Text style={styles.popularJobTitle}>{item.name}</Text>
              <Text style={styles.popularCompanyName}>{item.company}</Text>
            </View>
          </View>
          <View style={styles.popularJobInfoTwo}>
            <Text style={styles.popularJobSalary}>{item.salary}</Text>
            <Text style={styles.popularJobLocation}>{item.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  </View>
);

const HomePage = () => {
  const route = useRoute();
  const { name, email } = route.params || {};
  return (
    <SafeAreaView style={styles.container}>
      <Header name={name} email={email} />
      <SearchBar />
      <FeaturedJobSection />
      <PopularJobSection />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFF",
    padding: 20,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userIcon: {
    backgroundColor: "#FFF9FB",
    borderRadius: 50,
    padding: 2,
    width: 40,
    height: 40,
  },
  ellipse: {
    width: 50,
    height: 50,
  },
  ovalContainer: {
    position: "absolute",
    right: 0,
    width: 15,
    height: 15,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  oval: {
    backgroundColor: "red",
    borderRadius: 100,
    width: 10,
    height: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  searchBar: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 18,
  },
  filter: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: "#F2F2F3",
    borderRadius: 10,
    padding: 6,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  featuredSection: {
    marginTop: 25,
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 14,
    color: "#E79292",
  },
  jobContainer: {
    marginRight: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 280,
    height: 186,
    borderRadius: 25,
    padding: 18,
    marginBottom: 10,
  },
  jobLogo: {
    backgroundColor: "#F9FBFF",
    borderRadius: 10,
    padding: 10,
    width: 50,
  },
  companyLogo: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  jobInfoOne: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobInfoTwo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jobDetails: {
    marginLeft: 20,
  },
  jobTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFF",
  },
  companyName: {
    fontSize: 14,
    color: "#F9FBFFB8",
  },
  salary: {
    fontSize: 15,
    color: "#FFFFFF",
  },
  location: {
    fontSize: 15,
    color: "#FFF",
  },
  popularSection: {
    marginTop: 25,
  },
  popularJobContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  popularJobInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularJobInfoTwo: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  popularCompanyLogo: {
    marginRight: 8,
    width: 41,
    height: 41,
    backgroundColor: "#F9FBFF",
  },
  popularJobTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  popularCompanyName: {
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobLocation: {
    fontSize: 14,
    color: "#0000006D",
  },
  popularJobSalary: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
});

export default HomePage;
