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

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/DancingQueen.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Teenage Years
        </ThemedText>
      </ThemedView>
    <Collapsible title="Notre Dame Academy">
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Memorable Classes and Teachers </ThemedText>
	<BulletItem>Organic Chemistry</BulletItem>
 	<BulletItem>AP History</BulletItem>
 	<BulletItem>French</BulletItem>
        <ThemedText>
	</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Class Trips </ThemedText>
 	<ThemedText>
		Pennsylvania
	</ThemedText>
        <ThemedText>
		Ski trip
		memory: playing with fire
	</ThemedText>
	<ThemedText>
		Paris trip (83)
		memory: playing quarters with white wine, no drinking age
	</ThemedText>
	<ThemedText>
		destination: Italy (84) Rome and Florence
		memory: ordering four course dinners with 2 carafes of wine
	</ThemedText>
      </Collapsible>
      <Collapsible title="After School Activities">
	<BulletItem>Piano Lessons</BulletItem>
 	<BulletItem>Science Club</BulletItem>
 	<BulletItem>Track</BulletItem>
 	<BulletItem>Outward Bound</BulletItem>
        <Image
          source={require('@/assets/images/1984_HonorSociety.png')}
          style={styles.reactLogo2}
        />
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
      </Collapsible>
      <Collapsible title="Best Friends">
	<BulletItem>Kathy Fawcett</BulletItem>
	<BulletItem>Anita Veerabhadrappa (Pugi)</BulletItem>
	<BulletItem>Denise Wood</BulletItem>
	<BulletItem>Debbie Lettiere</BulletItem>
	<BulletItem>Chris Terrone</BulletItem>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
        <Image
          source={require('@/assets/images/1982_NotreDame.png')}
          style={styles.reactLogo2}
        />
  <ThemedText></ThemedText>
  <ThemedText></ThemedText>
      </Collapsible>
      <Collapsible title="Boyfriends">
        <ThemedText>
		Doug
	</ThemedText>
        <ThemedText>
		Chris
	</ThemedText>
      </Collapsible>
      <Collapsible title="Events and Parties">
        <ThemedText>
		Sharon’s New Year’s Eve Party
	</ThemedText>
        <ThemedText>
		Ellen's Sweet Sixteen
	</ThemedText>
       <ThemedText>
		Ellen's Halloween Party
	</ThemedText>
       <ThemedText>
		Ellen's Christmas Party
	</ThemedText>
      </Collapsible>
      <Collapsible title="Night Life">
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Destinations </ThemedText> 
	<ThemedText>
		Caves, Choir Loft, Whispers, Bay Street
	</ThemedText>
        <ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Dancing </ThemedText> 
        <ThemedText>
		"Do that Funky Chicken"
	</ThemedText>
	<ThemedText style={{ fontStyle: 'italic' }}>Song: "Dancing Queen" by ABBA</ThemedText>
	<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		After Hours</ThemedText>
        <ThemedText>
		Sleeping over illegally, endless gossip
	</ThemedText>
	<ThemedText type="defaultSemiBold" style={{textDecorationLine: 'underline', fontStyle: 'italic'}}>
		Morning After</ThemedText>
        <ThemedText>
		Tea: "Ellen's remedy"
	</ThemedText>
      </Collapsible>
      <Collapsible title="Summer Vacation">
	<ThemedText>
	</ThemedText>
	<ThemedText type="defaultSemiBold" style={{fontSize: 24}}>Summer Jobs
	</ThemedText>
	<ThemedText>
		Bank Teller, Lab Clerk
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
		Cruising in "Little Red Prelude", the White Le ASabre, and the Blue Cadillac
	</ThemedText>
      </Collapsible>
      <Collapsible title="High School Yearbook Quotes">
        <ThemedText>
		“You made me laugh on several occasions”
	</ThemedText>
        <ThemedText>
		“I’ll never forget the good times we had”
	</ThemedText>
        <ThemedText>
		“Stay as sweet as you are”
	</ThemedText>
        <ThemedText>
		“Try not to light too many fires when you’re up at Hamilton”
	</ThemedText>
        <ThemedText>
		“Don’t put any food in your roommate’s bed”
	</ThemedText>
        <ThemedText>
		“Remember to take your contacts out after parties”
	</ThemedText>
        <ThemedText>
		“Keep your hormones under control”
	</ThemedText>
        <ThemedText>
		“You are one of the wackiest people I know”
	</ThemedText>
        <ThemedText>
		“All our discussions about MEN,MEN,MEN!”
	</ThemedText>
        <ThemedText>
		“Knowing you has been a wild experience”
	</ThemedText>
        <ThemedText>
		“You wild woman”
	</ThemedText>
        <ThemedText>
		“Stay as sweet and kinky as you are now”
	</ThemedText>
        <ThemedText>
		“I hope you find the man of your dreams very soon”
	</ThemedText>
        <ThemedText>
		“You’re really a flip out”
	</ThemedText>
	<ThemedText>
		"Remember the Heinekins"
	</ThemedText>
        <ThemedText>
		“Long conversations on those hours free”
	</ThemedText>
        <ThemedText>
		“Everyone is over 25 on weekends “
	</ThemedText>
        <ThemedText>
		"Remember walking to the mall with Lisa and Anita"
	</ThemedText>
        <ThemedText>
		“Maybe someday we’ll find the men we deserve “
	</ThemedText>
        <ThemedText>
		“I think you know me better than I do” 11 years (Debbie)
	</ThemedText>
        <ThemedText>
		“Thank you for all the advice and cheering up you’ve given me”
	</ThemedText>
        <ThemedText>
		“I just want you to know that I will always love you like a sister”
	</ThemedText>
        <ThemedText>
		"Remember making earrings"
	</ThemedText>
        <ThemedText>
		“Remember the ski trip… no you probably don’t “
	</ThemedText>
        <ThemedText>
		“I’ll never forget your famous parties especially the Halloween party”
	</ThemedText>
        <ThemedText>
		“What a great time I had at your Christmas party”
	</ThemedText>
        <ThemedText>
		“Stay sober!”
	</ThemedText>
        <ThemedText>
		“I’ll never forget the ski trip … you were so cute”
	</ThemedText>
        <ThemedText>
		“I’ll never forget your crazy but sweet personality “
	</ThemedText>
        <ThemedText>
		“Take it easy on the booze”        
	</ThemedText>
        <ThemedText>
	</ThemedText>
        <ThemedText>
	</ThemedText>
      </Collapsible>
    </ParallaxScrollView>
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
    height: 250,
    width: 300,
    top: 0,
    bottom: 20,
    left: 50,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
  reactLogo2: {
    height: 220,
    width: 340,
    top: 150,
    bottom: 0,
    right: 0,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },

});
