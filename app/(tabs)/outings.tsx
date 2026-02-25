import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={300}
      headerImage={
        <Image
          source={require('@/assets/images/MaryPoppins.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Outings
        </ThemedText>
      </ThemedView>
           <Collapsible title="Introduction - Morristown's Mary Poppins">
        <ThemedText>
          Zoos, Children's Museums
      </ThemedText>
      </Collapsible>
           <Collapsible title="Zoos">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
           <Collapsible title="Aquariums">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
           <Collapsible title="Museums">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Amusement Parks">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Nature Parks">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Train Rides">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Day / Sunset Cruises">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Bike Rides">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Agri-tainment">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
      <Collapsible title="Pumpkin Blazes and Light Shows">
        <ThemedText>
          Zoos, Children's Museums
        </ThemedText>
      </Collapsible>
        <ExternalLink href="https://www.youtube.com/watch?v=fNTzp9grp2Q/">
          <ThemedText type="link">Song: Perfect Nanny</ThemedText>
        </ExternalLink>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
reactLogo: {
    height: 300,
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
