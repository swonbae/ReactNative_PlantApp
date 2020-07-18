import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import { Button, Block, Text, Card, Badge } from "../components";
import { theme, mocks } from "../constants";

export default function Browse(props) {
  const { profile, categories, navigation } = props;

  const tabs = ["Products", "Inspirations", "Shop"];

  const [active, setActive] = useState("Products");

  const renderTab = (tab) => {
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => {
          setActive(tab);
        }}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 light>
          Browse
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Image source={profile.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <Block flex={false} row style={styles.tabs}>
        {tabs.map((tab) => renderTab(tab))}
      </Block>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <Block flex={false} row space="between" style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              onPress={() => {
                navigation.navigate("Explore", { category });
              }}
            >
              <Card center middle shadow style={styles.category}>
                <Badge
                  margin={[0, 0, 15]}
                  size={50}
                  color="rgba(41,216,143,0.20)"
                >
                  <Image source={category.image} />
                </Badge>
                <Text medium height={20}>
                  {category.name}
                </Text>
                <Text gray caption>
                  {category.count} products
                </Text>
              </Card>
            </TouchableOpacity>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}

Browse.defaultProps = {
  profile: mocks.profile,
  categories: mocks.categories,
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
  },
  avatar: {
    height: theme.sizes.base * 2,
    width: theme.sizes.base * 2,
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2,
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base,
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3,
  },
  scroll: {
    paddingVertical: theme.sizes.base * 2,
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5,
  },
  category: {
    // this should be tynamic based on screen width
    width: 142,
    height: 142,
  },
});
