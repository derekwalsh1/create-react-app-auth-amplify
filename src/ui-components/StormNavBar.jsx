/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function StormNavBar(props) {
  const { appSettings, overrides, ...rest } = props;
  const [currentEventsFontWeight, setCurrentEventsFontWeight] =
    useStateMutationAction("400");
  const [ourTeamsFontWeight, setOurTeamsFontWeight] =
    useStateMutationAction("400");
  const [ourCoachesFontWeight, setOurCoachesFontWeight] =
    useStateMutationAction("400");
  const [contactUsFontWeight, setContactUsFontWeight] =
    useStateMutationAction("400");
  const [myAccountFontWeight, setMyAccountFontWeight] =
    useStateMutationAction("400");
  const currentEventsOnClick = useNavigateAction({
    anchor: "#",
    type: "anchor",
  });
  const currentEventsOnMouseOver = () => {
    setCurrentEventsFontWeight("Bold");
  };
  const currentEventsOnMouseLeave = () => {
    setCurrentEventsFontWeight("Normal");
  };
  const ourTeamsOnMouseOver = () => {
    setOurTeamsFontWeight("Bold");
  };
  const ourTeamsOnMouseLeave = () => {
    setOurTeamsFontWeight("Normal");
  };
  const ourCoachesOnMouseLeave = () => {
    setOurCoachesFontWeight("Normal");
  };
  const ourCoachesOnMouseOver = () => {
    setOurCoachesFontWeight("Bold");
  };
  const contactUsOnMouseLeave = () => {
    setContactUsFontWeight("Normal");
  };
  const contactUsOnMouseOver = () => {
    setContactUsFontWeight("Bold");
  };
  const myAccountOnMouseLeave = () => {
    setMyAccountFontWeight("Normal");
  };
  const myAccountOnMouseOver = () => {
    setMyAccountFontWeight("Bold");
  };
  return (
    <Flex
      gap="4px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "StormNavBar")}
    >
      <Image
        width="304px"
        height="149px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src="https://bayareastorm-storage200106-devw.s3.us-west-1.amazonaws.com/BayAreaStormLogo.png"
        {...getOverrideProps(overrides, "BayAreaStormLogo 1")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        height="65px"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Flex
          gap="6px"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 43231782757")}
        >
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 428")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight={currentEventsFontWeight}
              color="rgba(26,188,254,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.09px"
              width="200px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Current Events"
              onClick={() => {
                currentEventsOnClick();
              }}
              onMouseOver={() => {
                currentEventsOnMouseOver();
              }}
              onMouseLeave={() => {
                currentEventsOnMouseLeave();
              }}
              {...getOverrideProps(overrides, "Current Events")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 429")}
          >
            <Divider
              height="30px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="vertical"
              {...getOverrideProps(overrides, "Divider31782766")}
            ></Divider>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight={ourTeamsFontWeight}
              color="rgba(123,97,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.09px"
              width="200px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Our Teams"
              onMouseOver={() => {
                ourTeamsOnMouseOver();
              }}
              onMouseLeave={() => {
                ourTeamsOnMouseLeave();
              }}
              {...getOverrideProps(overrides, "Our Teams")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 430")}
          >
            <Divider
              height="30px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="vertical"
              {...getOverrideProps(overrides, "Divider31782764")}
            ></Divider>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight={ourCoachesFontWeight}
              color="rgba(255,153,0,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.09px"
              width="200px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Our Coaches"
              onMouseLeave={() => {
                ourCoachesOnMouseLeave();
              }}
              onMouseOver={() => {
                ourCoachesOnMouseOver();
              }}
              {...getOverrideProps(overrides, "Our Coaches")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 431")}
          >
            <Divider
              height="30px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="vertical"
              {...getOverrideProps(overrides, "Divider31782762")}
            ></Divider>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight={contactUsFontWeight}
              color="rgba(10,207,131,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.09px"
              width="200px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Contact Us"
              onMouseLeave={() => {
                contactUsOnMouseLeave();
              }}
              onMouseOver={() => {
                contactUsOnMouseOver();
              }}
              {...getOverrideProps(overrides, "Contact Us")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="fit-content"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            height="30px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 43231802778")}
          >
            <Divider
              height="30px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              size="small"
              orientation="vertical"
              {...getOverrideProps(overrides, "Divider31832780")}
            ></Divider>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight={myAccountFontWeight}
              color="rgba(255,114,98,1)"
              lineHeight="24px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              letterSpacing="0.09px"
              width="200px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="My Account"
              onMouseLeave={() => {
                myAccountOnMouseLeave();
              }}
              onMouseOver={() => {
                myAccountOnMouseOver();
              }}
              {...getOverrideProps(overrides, "My Account")}
            ></Text>
          </Flex>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider31782760")}
        ></Divider>
      </Flex>
    </Flex>
  );
}
