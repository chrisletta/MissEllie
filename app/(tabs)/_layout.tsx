import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ScrollableTabBar } from '@/components/ScrollableTabBar';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={props => <ScrollableTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(bio)"
        options={{
          title: 'Bio',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(relations)"
        options={{
          title: 'Relations',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.3.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(holidays)"
        options={{
          title: 'Holidays',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(vacations)"
        options={{
          title: 'Vacations',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="parties"
        options={{
          title: 'Events',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="party.popper.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="outings"
        options={{
          title: 'Outings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="sun.max.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(shows)"
        options={{
          title: 'Shows',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="movieclapper.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="food"
        options={{
          title: 'Food',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="fork.knife" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Music',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="music.note" color={color} />,
        }}
      />
      <Tabs.Screen
        name="games"
        options={{
          title: 'Games',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="tennis.racket" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(letters)"
        options={{
          title: 'Letters',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="heart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="(pets)"
        options={{
          title: 'Pets',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="pawprint.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="career"
        options={{
          title: 'Career',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="prayers"
        options={{
          title: 'Prayers',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cross.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="signs"
        options={{
          title: 'Signs',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bolt.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="godwinks"
        options={{
          title: 'Godwinks',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="eye" color={color} />,
        }}
      />
      <Tabs.Screen
        name="meaning"
        options={{
          title: 'Meaning',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="lightbulb.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
