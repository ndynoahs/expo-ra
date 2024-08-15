import React from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";

const DialogModal = ({ visible, hideDialog, handleCompleted }) => {
  return (
    <View>
      <Portal style={{ justifyContent: "center" }}>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{
            justifyContent: "center",
            alignContent: "center",
            width: "92%",
            height: "40%",
            marginLeft: 15,
            zIndex: 10,
            backgroundColor: "white",
          }}
        >
          <Dialog.Title>Confirm Job </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              This job has been completed to my satisfaction
            </Text>
          </Dialog.Content>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              // marginLeft: 0,
            }}
          >
            <Dialog.Actions>
              <Button onPress={hideDialog}>No</Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button onPress={() => handleCompleted(jobId)}>Yes</Button>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </View>
  );
};

export default DialogModal;
