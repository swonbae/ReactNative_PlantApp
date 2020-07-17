import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Modal,
  ScrollView,
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

export default function Welcome(props) {
  const [showTerms, setShowTerms] = useState(false);

  const scrollX = new Animated.Value(0);
  const { navigation } = props;

  //   const handleLogin = () => {
  //     // auth with 3rd party service
  //     navigation.navigate("Login");
  //   };

  const renderTermsService = () => {
    return (
      <Modal animationType="slide" visible={showTerms}>
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>

          <ScrollView style={styles.termsScroll}>
            <Text caption gray height={18}>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
              디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나
              시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종
              결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인
              프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘
              입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만
              차지하는 무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통
              라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의
              의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
              프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서
              출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
              맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은 영어에서 사용하는
              문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에
              프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
            </Text>
            <Text caption gray height={18}>
              가장 일반적인 로렘 입숨 텍스트는 다음과 같다. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
            <Text caption gray height={18}>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
              디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나
              시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종
              결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인
              프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘
              입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만
              차지하는 무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통
              라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의
              의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
              프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서
              출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
              맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은 영어에서 사용하는
              문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에
              프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
            </Text>
            <Text caption gray height={18}>
              가장 일반적인 로렘 입숨 텍스트는 다음과 같다. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
            <Text caption gray height={18}>
              로렘 입숨(lorem ipsum; 줄여서 립숨, lipsum)은 출판이나 그래픽
              디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나
              시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종
              결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각 디자인
              프로젝트 모형의 채움 글로도 이용된다. 이런 용도로 사용할 때 로렘
              입숨을 그리킹(greeking)이라고도 부르며, 때로 로렘 입숨은 공간만
              차지하는 무언가를 지칭하는 용어로도 사용된다. 로렘 입숨은 전통
              라틴어와 닮은 점 때문에 종종 호기심을 유발하기도 하지만 그 이상의
              의미를 담지는 않는다. 문서에서 텍스트가 보이면 사람들은 전체적인
              프레젠테이션보다는 텍스트에 담긴 뜻에 집중하는 경향이 있어서
              출판사들은 서체나 디자인을 보일 때는 프레젠테이션 자체에 초점을
              맞추기 위해 로렘 입숨을 사용한다. 로렘 입숨은 영어에서 사용하는
              문자들의 전형적인 분포에 근접하다고도 하는데, 이 점 때문에
              프레젠테이션으로 초점을 이동하는 데에도 도움을 준다.
            </Text>
            <Text caption gray height={18}>
              가장 일반적인 로렘 입숨 텍스트는 다음과 같다. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Text>
          </ScrollView>

          <Button gradient onPress={() => setShowTerms(false)}>
            <Text center white>
              I understand
            </Text>
          </Button>
        </Block>
      </Modal>
    );
  };

  const renderIllustrations = () => {
    const { illustrations } = props;

    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        extraDate={{ showTerms: showTerms }}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 2, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: false }
        )}
      />
    );
  };

  const renderSteps = () => {
    const { illustrations } = props;
    const stepPosition = Animated.divide(scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp",
          });

          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  return (
    <Block>
      <Block center bottom flex={0.4}>
        <Text h1 center bold>
          Your Home.
          <Text h1 primary>
            {" "}
            Greener.
          </Text>
        </Text>
        <Text h3 gray2 style={styles.subText}>
          Enjoy the experience.
        </Text>
      </Block>
      <Block center middle>
        {renderIllustrations()}
        {renderSteps()}
      </Block>
      <Block middle flex={0.5} margin={(0, theme.sizes.padding * 2)}>
        <Button gradient onPress={() => navigation.navigate("Login")}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow onPress={() => navigation.navigate("SignUp")}>
          <Text center semibold>
            Signup
          </Text>
        </Button>
        <Button onPress={() => setShowTerms(true)}>
          <Text center caption gray>
            Terms of service
          </Text>
        </Button>
      </Block>
      {renderTermsService()}
    </Block>
  );
}

Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") },
  ],
};

// export default Welcome;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  subText: {
    marginTop: theme.sizes.padding / 2,
  },
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  termsScroll: {
    paddingVertical: theme.sizes.padding,
  },
});
