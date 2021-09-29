import { groupBy } from 'lodash';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useAppContext } from '../App.provider';

export const Analytics: React.FC = () => {
  const appContext = useAppContext();
  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );
  return (
    <View style={styles.container}>
      <Text>Analytics</Text>
      <VictoryPie
        data={data}
        width={350}
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});
