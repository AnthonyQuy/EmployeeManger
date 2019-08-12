import React from 'react'
import { AntView } from "./AntView";
import { Text } from "react-native-elements";


export const AntError = ({ errMessage }) => {
  if (errMessage)
    return (
      <AntView>
        <Text
          style={{
            marginHorizontal: 10,
            color: "red"
          }}
        >
          {errMessage}
        </Text>
      </AntView>
    );
  else return null;
};
