import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";



import firebase from "firebase";




export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      //story_id: this.props.story.key,
     //story_data: this.props.story.value,
     is_liked: false,
 //likes: this.props.story.value.likes,
 light_theme: true

    };
  }


  likeAction = () => {
    if (this.state.is_liked) {
      firebase
        .database()
        .ref("posts")
        .child(this.state.story_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(-1));
      this.setState({ likes: (this.state.likes -= 1), is_liked: false });
    } else {
      firebase
        .database()
        .ref("posts")
        .child(this.state.story_id)
        .child("likes")
        .set(firebase.database.ServerValue.increment(1));
      this.setState({ likes: (this.state.likes += 1), is_liked: true });
    }
  };
  

  

  
  render() {
    
     // let post = this.state.post_data;

  //let images = {
        //image_1: require("../assets/story_image_1.png"),
       // image_2: require("../assets/story_image_2.png"),
      //  image_3: require("../assets/story_image_3.png"),
        //image_4: require("../assets/story_image_4.png"),
        //image_5: require("../assets/story_image_5.png")
  //};
      return (
        <TouchableOpacity style={styles.container} >
          <View style={this.state.light_theme?styles.cardContainerLight:styles.cardContainer}>
            <Image
              source={require("../assets/image_3.jpg")}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={this.state.light_theme?styles.storyTitleTextLight:styles.storyTitleText}>
                {this.props.post.author}
              </Text>
              
              <Text style={this.state.light_theme? styles.descriptionTextLight:styles.descriptionText}>
                {this.props.post.caption}
              </Text>
            </View>
            <View style={styles.actionContainer}>
            <TouchableOpacity
                style={
                  this.state.is_liked
                    ? styles.likeButtonLiked
                    : styles.likeButtonDisliked
                }
                //onPress={() => this.likeAction()}
              >
                <Ionicons
                  name={"heart"}
                  size={RFValue(30)}
                  color={this.state.light_theme ? "black" : "white"}
                />

                <Text
                  style={
                    this.state.light_theme
                      ? styles.likeTextLight
                      : styles.likeText
                  }
                >
                  {this.state.likes}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  cardContainerLight: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  storyTitleText: {
    fontSize: RFValue(25),
   
    color: "white"
  },

  storyTitleTextLight: {
    fontSize: RFValue(25),
  
    color: "black"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    
    color: "white"
  },

  storyAuthorTextLight: {
    fontSize: RFValue(18),
    
    color: "black"
  },

  descriptionText: {
  
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },

  descriptionTextLight: {
    
    fontSize: 13,
    color: "black",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButtonLiked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeButtonDisliked: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#eb3948",
    borderWidth: 2,
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    
    fontSize: 25,
    marginLeft: 25,
    marginTop: 6
  },
  likeTextLight: {
  
    fontSize: 25,
    marginLeft: 25,
    marginTop: 6
  }


});