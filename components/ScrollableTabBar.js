import React from 'react';
import { ScrollView, View } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

export function ScrollableTabBar(props) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white', // or your theme color
        paddingBottom: props.safeAreaInsets?.bottom ?? 0,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <BottomTabBar {...props} />
        </View>
      </ScrollView>
    </View>
  );
}

