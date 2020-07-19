import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import Slider from "react-native-slider";

import {
  Button,
  Block,
  Text,
  Card,
  Badge,
  Divider,
  Switch,
} from "../components";
import { theme, mocks } from "../constants";

export default function Settings(props) {
  const { profile, navigation } = props;

  const [budget, setBudget] = useState(600);
  const [monthly, setMonthly] = useState(2000);
  const [notifications, setNotifications] = useState(true);
  const [newsletter, setNewsletter] = useState(false);
  const [editing, setEditing] = useState(null);
  const [curProfile, setCurProfile] = useState({});

  useEffect(() => {
    setCurProfile(profile);
  }, [profile]);

  const handleEdit = (name, text) => {
    // newProfile[name] = text
    setCurProfile({ ...curProfile, [name]: text });
  };
  const toggleEdit = (name) => {
    setEditing(!editing ? name : null);
  };
  const renderEdit = (name) => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={curProfile[name]}
          onChangeText={(text) => handleEdit([name], text)}
        />
      );
    } else {
      return <Text bold>{curProfile[name]}</Text>;
    }
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 light>
          Settings
        </Text>
        <Button>
          <Image source={curProfile.avatar} style={styles.avatar} />
        </Button>
      </Block>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={styles.label}>
                Username
              </Text>
              {renderEdit("username")}
              {/* <Text bold>{curProfile.username}</Text> */}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("username")}>
              {editing === "username" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={styles.label}>
                Location
              </Text>
              {renderEdit("location")}
              {/* <Text bold>{curProfile.location}</Text> */}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("location")}>
              {editing === "location" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={styles.label}>
                Email
              </Text>
              <Text bold>{curProfile.email}</Text>
            </Block>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />

        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2 style={styles.label}>
              Budget
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              style={styles.slider}
              thumbStyle={styles.thumb}
              trackStyle={styles.track}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.1)"
              value={budget}
              onValueChange={(value) => setBudget(value)}
            />
            <Text caption gray right>
              ${budget.toFixed(0)}
            </Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text gray2 style={styles.label}>
              Monthly Cap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              style={styles.slider}
              thumbStyle={styles.thumb}
              trackStyle={styles.track}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.1)"
              value={monthly}
              onValueChange={(value) => setMonthly(value)}
            />
            <Text caption gray right>
              ${monthly.toFixed(0)}
            </Text>
          </Block>
        </Block>

        <Divider />

        <Block style={styles.toggles}>
          <Block row center space="between" style={styles.toggleLabel}>
            <Text gray2>Notifications</Text>
            <Switch
              value={notifications}
              onValueChange={(value) => setNotifications(value)}
            />
          </Block>
          <Block row center space="between" style={styles.toggleLabel}>
            <Text gray2>Newsletter</Text>
            <Switch
              value={newsletter}
              onValueChange={(value) => setNewsletter(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}

Settings.defaultProps = {
  profile: mocks.profile,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2,
  },
  inputs: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  inputRow: {
    alignItems: "flex-end",
  },
  label: {
    marginBottom: 10,
  },
  sliders: {
    marginTop: theme.sizes.base * 0.7,
    paddingHorizontal: theme.sizes.base * 2,
  },
  slider: {
    height: 19,
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary,
  },
  track: {
    height: 6,
    borderRadius: 6,
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  toggleLabel: {
    marginBottom: theme.sizes.base * 2,
  },
});
