import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { router } from "expo-router";


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={400}
      headerImage={
        <Image
          source={require('@/assets/images/1969_Sisters.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Sisters
        </ThemedText>
      </ThemedView>
      <Collapsible title="Before Midnight December 31st, 1988">
        <ThemedText>
		Name of the Bar?
	</ThemedText>
        <ThemedText>
		Her Friends: Dawn, Katie, Laura, Jean, Julie, Martha, Nanci?
	</ThemedText>
        <ThemedText>
		My Friends: Cap, Rich, Drew, Boo, Catman
	</ThemedText>
        <ThemedText>
		Darkness: Depression, despair, disinterest; ready to leave without saying goodbye
	</ThemedText>
      </Collapsible>
      <Collapsible title="After Midnight January 1st, 1989">
        <ThemedText>
		The Look, the Hook and Pick Up Line
			Not the first time ever I saw your face
			But this time felt the earth move
	</ThemedText>
        <ThemedText>
		Dancing and Sweating
			Dancing Queen
	</ThemedText>
        <ThemedText>
		Talking
			Trying to impress, trying to be funny
			Bayville and My Lost Boat
			Self absorbed: "Guys love to talk about themselves"
			Forgetting to ask your name
	</ThemedText>
        <ThemedText>
		Cat Warning  
	</ThemedText>
        <ThemedText>
		Closing the bar
	</ThemedText>
        <ThemedText>
		The After Party Bar
	</ThemedText>
        <ThemedText>

			Walking the streets of Manhattan
			Running out of things to say
			Trying to be funny / interesting
			Not wanting to leave but still tired
		Crashing in Manhattan apartment
			Lying on the apartment floor
			Sharing a sleeping bag
			Groping under the covers
			Getting your name and number
		The commute home
			Just another hook up
			Procrastinating before calling you
		Yours
			perhaps a "Spring Fling"
        </ThemedText>
            </Collapsible>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Pre Cana"
        onPress={() => router.push("/marriage/precana")}
      />
    </View>
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
    height: 400,
    width: 290,
    top: 0,
    right: 50,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
