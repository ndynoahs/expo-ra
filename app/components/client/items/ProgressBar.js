import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress, steps }) => {
  return (
    <View style={styles.progressBar}>
      {Array.from({ length: steps }, (_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index < progress ? styles.stepChecked : null,
            index === progress ? styles.currentStep : null,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#CCCCCC',
    margin: 5,
  },
  stepChecked: {
    backgroundColor: '#00FF00', // Green color indicating completed step
  },
  currentStep: {
    backgroundColor: '#FFD700', // Gold color indicating current step
  },
});

export default ProgressBar;
