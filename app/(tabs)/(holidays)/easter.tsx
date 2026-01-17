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
      headerImage={
        <Image
          source={require('@/assets/images/LittleRedBabe2Babe.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Television
        </ThemedText>
      </ThemedView>
<ThemedText>How she loved her TV. In the evening, it was always on... humming in the background; it was her sedative. For a while, I resisted putting one in the bedroom... but eventually I relented because I knew how much the laugh tracks helped her go to sleep.</ThemedText>
      <Collapsible title="Sunday Morning Cartoons">
        <ThemedText>
          I introduced her to bagels and vegetable cream cheese on Sunday mornings. We'd watch Warner Brothers cartoon marathons, recovering from the sins of the previous night. Our favorite Bugs Bunny episode was "Little Red Riding Rabbit".</ThemedText> 
<ThemedText></ThemedText>
<ThemedText></ThemedText>
<ThemedText>"Red: HEY GRANDMA! I brought a little bunny rabbit for ya... TO HAVE!" </ThemedText>
<ThemedText>"Red: HEY GRANDMA! That's awfully big nose for you... TO HAVE!" </ThemedText>
<ThemedText>"Wolf: Big nose, big nose, yeah, yeah, yeah, getta outa here..." </ThemedText>
        <Image
          source={require('@/assets/images/LittleRedBabe2Babe.png')}
          style={{ width: 300, height: 200, alignSelf: 'center' }}
        />
        <ExternalLink href="https://www.bing.com/videos/riverview/relatedvideo?q=Bugs+Bunny+and+red+riding+hood&qpvt=Bugs+Bunny+and+red+riding+hood&mid=832501E37B0921127021832501E37B0921127021&FORM=VRDGAR">
          <ThemedText type="link">"TO HAVE"</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Seinfeld">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="In Living Color">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Saturday Night Live">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="King of Queens">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful{' '}
          <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
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
    height: 200,
    width: 430,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
