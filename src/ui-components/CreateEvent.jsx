/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Activities } from "../models";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
export default function CreateEvent(props) {
  const { overrides, ...rest } = props;
  const [titleValue, setTitleValue] = useStateMutationAction("");
  const [textFieldValue, setTextFieldValue] = useStateMutationAction("");
  const [buttonBackgroundColor, setButtonBackgroundColor] =
    useStateMutationAction("rgba(184,206,249,1)");
  const buttonOnClick = useDataStoreCreateAction({
    fields: { Title: titleValue, Description: textFieldValue, Cost: "300" },
    model: Activities,
    schema: schema,
  });
  const buttonOnMouseEnter = () => {
    setButtonBackgroundColor("gray");
  };
  const buttonOnMouseLeave = () => {
    setButtonBackgroundColor("lightblue");
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="400px"
      justifyContent="center"
      position="relative"
      padding="12px 4px 12px 4px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateEvent")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="fit-content"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="4"
        children="Create a New Event"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Event Name"
        placeholder="Enter a short name for this event"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={titleValue}
        onChange={(event) => {
          setTitleValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "Title")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Description"
        placeholder="Enter a brief summary of the event. This will be displayed under the title as the description of the event."
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldValue}
        onChange={(event) => {
          setTextFieldValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <SelectField
        display="flex"
        gap="8px"
        direction="column"
        justifyContent="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Gender"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        backgroundColor={buttonBackgroundColor}
        size="large"
        isDisabled={false}
        variation="default"
        children="Add Event to Calendar"
        onClick={() => {
          buttonOnClick();
        }}
        onMouseEnter={() => {
          buttonOnMouseEnter();
        }}
        onMouseLeave={() => {
          buttonOnMouseLeave();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
