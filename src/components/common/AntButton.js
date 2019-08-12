import React from "react";
import { Button } from "react-native-elements";

const AntButton = ({ title, type, onPress, loading, disabled }) => {
  const buttonStyle = {
    marginHorizontal: 10,
    marginTop: 10
  };

  return (
    <Button
      buttonStyle={buttonStyle}
      onPress={onPress}
      type={type}
      title={title}
      loading={loading}
      disabled={disabled}
    />
  );
};

export { AntButton };
