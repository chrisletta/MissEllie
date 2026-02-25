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
          source={require('@/assets/images/engagement.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Engagement
        </ThemedText>
      </ThemedView>
      <Collapsible title="The M word">
        <ThemedText>
		Although we said "I love you" after 3 months, and followed up with words like "forever" and "the rest of my life", "soul mate"...the "M" word was mentioned explicitly until the summer of 1990. She knew my intentions and being the romantic that I was knew I wanted to wait for a special time and place, such as a holiday, vacation or an anniversary.
	</ThemedText>
      </Collapsible>
      <Collapsible title="The Ring">
        <ThemedText>
		We discussed the ring a few times before...she liked pear shape. And we even went to Chinatown and passed through a few wholesale jewelers once to "browse". Three months salary was the standard at the time, and I was relatively poor so it took a while to save up enough as I wanted to avoid the tax by paying it in cash. I remember collecting the money from the bank and being extremely anxious when traveling to the jeweler. Even afterwards keeping it hidden in my apartment I was a bit stressed about.
	</ThemedText>
      </Collapsible>
      <Collapsible title="Asking Permission">
        <ThemedText>
		I got the idea of asking for permission from my roommate Drew who proposed to his fiancee a few months earlier. So I found my future father-in-law alone the weekend before and asked him for permission to marry his daughter. He just smiled and shook my hand. I remember he didn't actually say "Yes" but something along the lines of "congratulations" or "thank you", but I came away with another checkmark on my list. 
	</ThemedText>
      </Collapsible>
      <Collapsible title="The Proposal">
<ThemedText>Let's swim to the moon,</ThemedText>
<ThemedText>Let's glide thru the tide,</ThemedText>
<ThemedText>No matter just how far we get,</ThemedText>
<ThemedText>As long as we just try.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Let's take off tonight, love,</ThemedText>
<ThemedText>It's our turn to fly,</ThemedText>
<ThemedText>Parked inside your heart, love,</ThemedText>
<ThemedText>I am yours until I die</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Let's drift to the moon,</ThemedText>
<ThemedText>Let's sail thru the sky,</ThemedText>
<ThemedText>Passing thru the Milky Way,</ThemedText>
<ThemedText>In one blink of an eye.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Let's step thru the Heavens,</ThemedText>
<ThemedText>Climbing ever high,</ThemedText>
<ThemedText>Together we can make it, love,</ThemedText>
<ThemedText>I'll never say goodbye.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>Let's swim to the moon,</ThemedText>
<ThemedText>Let's glide thru the tide,</ThemedText>
<ThemedText>I stretch my arms to hold you.</ThemedText>
<ThemedText>Won't you latch onto my side?</ThemedText>
<ThemedText></ThemedText>
<ThemedText>It's easy to love you,</ThemedText>
<ThemedText>It comes as no surprise.</ThemedText>
<ThemedText>Oh, forever let us be together</ThemedText>
<ThemedText>Now won't you be my bride?</ThemedText>
      </Collapsible>
      <Collapsible title="The Celebrations">
<ThemedText>Skipping the ski weekend and returning to Staten Island for congratulations.</ThemedText>
<ThemedText>Families meet in Hampton Bays at a Beach House my father was managing.</ThemedText>
<ThemedText>First Holly Brunch with our parents December 1991</ThemedText>
      </Collapsible>
      <Collapsible title="Sickness - Our First Challenges">
<ThemedText>Five months into our engagement I let Ellen know that I was feeling pain in the varicocele on my right testicle that I had had since puberty.</ThemedText>
<ThemedText></ThemedText>
      </Collapsible>
<ThemedText></ThemedText>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Pre Cana"
        onPress={() => router.push("/marriage/precana")}
      />
    </View>
<ThemedText></ThemedText>
<ThemedText></ThemedText>
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
    width: 400,
    top: 0,
    left: 0,
    marginTop: 0,
    marginBottom: 10,
    position: 'absolute',
  },
});
