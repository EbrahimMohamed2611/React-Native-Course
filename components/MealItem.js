import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealHandler() {
    navigation.navigate("MealDetailsScreen", {
      mealId: id,
    });
  }
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.innerContainer,
          pressed ? styles.pressedEffect : null,
        ]}
        onPress={selectMealHandler}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.durationContainer}>
            <Ionicons name="time-outline" size={15} color="black" />
            <Text style={styles.durationTitle}>{duration}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>{complexity.toUpperCase()}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    alignItems: "center",
    margin: 5,
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: 18,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  subTitle: {
    fontFamily: "Gilroy-Medium",
    fontSize: 17,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  durationTitle: {
    paddingHorizontal: 8,
  },
  durationContainer: {
    flexDirection: "row",
    backgroundColor: "#fac85c",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
  },
  pressedEffect: {
    opacity: 0.2,
  },
});
