import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';
import { BulletItem } from '@/components/bulleting';
import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { Button, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={300}
      headerImage={
        <Image
          source={require('@/assets/images/HamGraduationFam.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          College Years
        </ThemedText>
      </ThemedView>
    <Collapsible title="Hamilton">
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Memorable Classes and Teachers </ThemedText>
 	<BulletItem>Psychology</BulletItem>
	<BulletItem>Religious Studies</BulletItem>
        <ThemedText>Red haired Professor
	</ThemedText>
        <ThemedText>
	</ThemedText>
 	<BulletItem>Ancient Civilizations</BulletItem>
        <ThemedText>
	</ThemedText>
      </Collapsible>
      <Collapsible title="After School Activities">
	<BulletItem>Practical Jokes</BulletItem>
        <ThemedText>Exlaxed brownies, fire drills
	</ThemedText>
	<BulletItem>Football Games</BulletItem>
        <ThemedText>Spiked hot chocolate, rooting for the clean shirts
	</ThemedText>
	<BulletItem>Chatting in Burke Library</BulletItem>
	<BulletItem>Griffin Road Parties</BulletItem>
        <ThemedText>Dancing and singing
	</ThemedText>
	<BulletItem>Quad Dorm Parties</BulletItem>
        <ThemedText>Circling the keg, stoking the fire, smokin' and joking
	</ThemedText>
 	<BulletItem>Watching Soap Operas</BulletItem>
 	<BulletItem>Sangertown Mall</BulletItem>
 	<BulletItem>George Thorogood Concert</BulletItem>
      </Collapsible>
      <Collapsible title="Best Friends">
	<BulletItem>Dawn</BulletItem>
	<BulletItem>Nanci</BulletItem>
	<BulletItem>Denise</BulletItem>
	<BulletItem>Julie</BulletItem>
	<BulletItem>Katie</BulletItem>
	<BulletItem>Cathy</BulletItem>
	<BulletItem>Laura</BulletItem>
	<BulletItem>Jean</BulletItem>
	<BulletItem>Parker</BulletItem>
	<BulletItem>Clayton</BulletItem>
	<BulletItem>Jason</BulletItem>
      headerImage={
        <Image
          source={require('@/assets/images/ThirstyGirls.png')}
          style={styles.reactLogo}
        />
      }>
      </Collapsible>
      <Collapsible title="Boyfriends">
        <ThemedText>
		Kevin
	</ThemedText>
        <ThemedText>
		John 
	</ThemedText>
        <ThemedText>
		Billy
	</ThemedText>
        <ThemedText>
		Steve
	</ThemedText>
        <ThemedText>
		Jon
	</ThemedText>
      </Collapsible>
      <Collapsible title="Summer Vacation">
	<ThemedText>
	</ThemedText>
	<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Summer Jobs
	</ThemedText>
	<ThemedText>
		Lab Clerk
	</ThemedText>
	<ThemedText>
	</ThemedText>
	<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Country Club
	</ThemedText>
	<ThemedText>
		Playing tennis, Lunch on the patio overlooking the pool
	</ThemedText>
	<ThemedText>
	</ThemedText>
	<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Belmar
	</ThemedText>
	<ThemedText>
		Cruising in "Little Red Prelude"
	</ThemedText>
      </Collapsible>
      <Collapsible title="Memorable Quotes">
        <ThemedText>
		“I like to be called Shmellen”
	</ThemedText>
       </Collapsible>

<M4APlayer />
<ThemedText></ThemedText>
<ThemedText></ThemedText>
    </ParallaxScrollView>
  );
}

export function M4APlayer() {
  const [sound, setSound] = useState(null);

  async function play1() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/everybody_wants_to_rule_the_world.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }
  async function play2() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/dust_in_the_wind.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }
  async function play3() {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/songs/dust_in_the_wind.m4a")     );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Song: Everybody Wants to Rule the World" onPress={play1} />
      <Button title="Song: Dust in the Wind by Kansas" onPress={play2} />
    </View>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    top:0,
    bottom: 0,
    left: -5,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  reactLogo: {
    height: 300,
    width: 400,
    top: 0,
    bottom: 20,
    left: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
