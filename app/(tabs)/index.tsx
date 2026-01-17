import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

import { Collapsible } from '@/components/ui/collapsible';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerHeight={430}
      headerImage={
        <Image
          source={require('@/assets/images/Beauty.jpeg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Miss Ellie</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Collapsible title="Introduction">
<ThemedText>
This is the story of a beautiful soul, ( as all souls are) told by this particular soul’s mate. In some ways it is a story of two souls that met and gave their lives to each other, their children, family and friends. But primarily it is Ellen’s story. And similar to the Light that descended to earth 2000 years ago, I believe these memories, images, recordings and transcripts are “treasures to be pondered" in our hearts.

<ThemedText style={{fontStyle: 'italic'}}> Luke 2:19,51</ThemedText>
</ThemedText>
      </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stepContainer: {
    gap: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 430,
    width: 240,
    top: 0,
    left: 70,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
