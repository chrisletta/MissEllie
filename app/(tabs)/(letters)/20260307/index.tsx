import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

import { Redirect } from "expo-router";
import { useAuth } from "./auth-context";


export default function TabTwoScreen() {
	console.log("AUTH:", useAuth());
  const { authenticated } = useAuth();

  if (!authenticated) {
    return <Redirect href="(tabs)/(letters)/20260307/password" />;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={560}
      headerImage={
      <Image
          source={require('@/assets/images/LeaningIn.jpg')}
          style={styles.reactLogo}
       />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Response To Your Complaint 36 years Ago	
        </ThemedText>
</ThemedView>
<ThemedText>Dear Miss Ellie,</ThemedText>
<ThemedText>
It is March of 2026, 36 years after you first filed your complaint. And although we probably talked it over on the phone soon after I received it, I don't remember what I said. I hope I was apologetic and not defensive, serious and not try to trivialize your issues or worst of all try to be funny about any of it. The only facts I have of my response is another goofy letter which I sent you weeks later which I realize now was completely inappropriate and not a serious reckoning of the truth which you so aptly presented to me on March 14, 1990. Here is the complete text, just in case you forgot:</ThemedText>
<ThemedText>"Well Christopher,</ThemedText>
<ThemedText>This card though it seems lighthearted really isn't. I've taken your advice about writing about things that are troubling. Maybe the other birthday cards will be more fun. I don't know. Anyway I asked myself these past few weeks where we stand. I know where I stand but I am unclear where you are these days in relation to me. Its not that I want constant adoration but it isn't like it used to be. I used to look forward coming home and seeing funny cards in my mailbox. I think you must have liked me more because now I'm lucky if I get a phone call and you may say you love me but rarely without me saying it first. Of course you don't miss me or love me and you're a very honest person than saying things like that would be a lie. I wonder if you really want to be with me anymore or is it just a habit. Sometimes I think you really don't care about me. You don't seem to care about my welfare - I could die coming home on the BQE and you don't express any concern about me getting home. That's just an example. Then I think it's my fault I make it too easy for you. I don't expect much at least I used to not expect much. I'm changing. I'm realizing I matter and I'm worth alot more than I previously thought. I guess you helped me with that - my self-esteem. Writing this is a little actually very scary because I don't know what your reaction will be. It could  be anything from (1) later Ellen, you're  too demanding for me, (2) Ellen you're right I don't love you. (3) I don't know what I feel or (4) ____________________ fill in the blanks.</ThemedText>
<ThemedText>What do you think?</ThemedText>
<ThemedText>Ellen</ThemedText>
<ThemedText></ThemedText>
<ThemedText>I don't want to influence you by telling you that I love you very much. - still!"</ThemedText>
<ThemedText>
Rereading this now, it's as if you could have written this yesterday, or at least January of 2023. It certainly was prescient of what was to come in our marriage and life together particularly when the going got tough, and we struggled to keep the communication strong. And it underscores your perceptive mind to see through my personality, to see the real me. We did become a habit, took each other for granted, stopped focusing on us, and focused entirely on our kids or in my case my work, which though it was all for you and the kids, in many ways was hurting you and the kids because I was so distracted. I'm trying to change. Can I change? Did you have to leave me in order for me to change? What a cost! How could it be worth it? I can't understand that now, but maybe I will someday...when I become more like you.</ThemedText>
<ThemedText></ThemedText>
<ThemedText>
Anyway, as part of that journey, I need to give you a proper response to your complaint. And I'm not doing this just to impress you or make you say, "Oh you weren't that bad"... I was! And you know it, and that's why I have to change. So here is my response...</ThemedText>
<ThemedText>
1) Did I "miss you"? At the time I believe I had just started NYU so I probably rationalized that the reason you were no longer on my mind was because I put on my school "blinders" in order to focus on over-achieving, or perhaps because I was so cheap that I was afraid I wasn't going to be reimbursed if I didn't get a "B" or above on the classes I was taking. I've realized over the years that I really am not that bright, I'm just a tool. I can force myself to work and work until I achieve the goal that others can accomplish in much less time. But the truth was I did not miss you. I wasn't thinking about you. And I should have been.  And the same answer I could have given for any year afterward until you left me. I should have had you on my mind everyday...not every hour...but every day. I do now.</ThemedText>
<ThemedText>
2) Did I "love you"??? You must remember Old Woman Grumpus' reply to her spouse telling her,  "I love you": "You don't know what love is!" Did I know what love was? Do I know? I know that there are many types of love. And the erotic love we felt for each other when we first met was wonderful and heavenly. But the mature agape love is the one I'm sure you were referring to in your letter...did I truly care about you, was I willing to lay down my life for you? In words or actual deeds? The truth I wanted to love but I didn't know how, really. I fell way short because of my own cowardice, selfishness and laziness. There was nothing else more important than you; it's just I couldn't even give what I needed to give to the most important person in my life. Can I now? How can I when you are not here? Am I neglecting the others whom I should be giving myself to. I feel like I have to make it up to you. Give you what you deserve. How I wish you were here to hear me say it to you out loud. I wonder what you would say to all my blubbering that I'm doing. Would you blubber too? Or tell me to man up, and stop your pity party? You certainly wouldn't focus on the negative...life is too short.</ThemedText>
<ThemedText>
3) Did I "really want to be with you anymore or was it just a habit"? I never ever wanted to leave you. You were the best thing that happened to me, and I didn't deserve you. I can't stand being without you. I miss you more than anything in the world. I would give up anything to be with you. Were you a habit? Did I take you for granted. Yes, yes, yes! I was and am so self-centered and lazy that I assume all the blessings I have are free and don't require work or even regular thanksgiving.</ThemedText>
<ThemedText>
4) Did I "care about you"? Did I "care about your welfare"? Again I said I cared but I didn't put into action. I did not worry about you. I blocked out the negative thoughts, the worrisome thoughts, the "what if something bad happens". I was a reactive care-giver not pro-active. I didn't pray for you when you were healthy; only when you got sick or were in pain or struggling. I assumed you would always be stronger than me, healthier than me, take care of things for me. In many ways you were the protector not me. I was the woman...the receiver, not the giver; the female receptacle, the p#$#$#y. How could I let you stay away from a doctor for 20 years? I was so afraid of confronting you, of being a man. Unlike you, who confronted me so early when it would be even easier for me to break off our relationship...you knew that certain things were worth the risk of losing someone. Not me, I let our relationship wither; I am so ashamed of myself. And to a certain extent I am still doing the same with Sofia, not worrying about her, "letting God take care of things", a false piety that hides a cold and callous stoicism. When I think about all of your trips to see me between Staten Island and BQE, driving on your own at night, and not once did I call to see if you made it home okay. Or your adoption visits in the Brooklyn and Staten Island projects, I should have forced you to quit that job much sooner. I suppose our first date was a foreshadowing of my true nature...leaving you alone at the Staten Island Ferry Terminal. Did I not realize the danger or was I just too dumb to notice it; too "wet behind the ears"...not very perceptive, shrewd or alert. "A hipster doofus". That combined with a calm nature is not a healthy combination. But you loved my "calm" nature, my "easy-going" ness. Things are not so easy-going now. Those who were "easy-going" didn't make it out of the Twin Towers on 9/11.</ThemedText>
<ThemedText>
5) You "made it too easy" for me. You did! It's all your fault! But seriously, when you didn't, did I change? No. I stayed stuck in my self-absorbed mud for 30 years. You kept throwing me a rope now and then to pull myself out. Now the rope is falling down from heaven; it's Jacob's ladder. But I'm still a swine... I need you to kiss me and turn me into a prince.</ThemedText>
<ThemedText>
6) You "are worth a lot". You are worth an infinite amount to me, and I treated you like Mona from Moonstruck, "cheap goods"..."Oh, CAHHHHZMOOO!"</ThemedText>
<ThemedText>
7) "Writing this was scary" for you: You are the bravest person I know. You are my hero. You faced your cancer with such courage, I know you would have continued to be courageous if you given the chance to fight it for months.</ThemedText>
<ThemedText>
8)What was my reaction? Whatever it was I under-reacted, which is what I always do. I downplay everything, it's never all or nothing, never urgent, never the end of the world, never panic...even when the house is on fire. I suppose my reaction at the time was to apologize and defend myself and convince you that I really am not the person that I appeared to be. But did I lie. Wouldn't I continue to be that person throughout our marriage. And after a while did you just give up on me? Chris is Chris and he cannot change, he really can't be a caring person; he'll always be self-centered and eventually his humor and easy going nature will become less and less attractive , just like his looks.</ThemedText>
<ThemedText>
9) "What do I think?" - What did I think then? And what do I think now? I thought then I was reformable; now I'm not so certain. It may take a miracle for me to change. But I still believe in miracles even with you gone. I believe they are possible, and perhaps there is one coming especially for me.</ThemedText>
<ThemedText>
10) Despite all your frustration with my behavior "you still loved me" - I still love you. Do I love myself? I guess. I hate the sin not the sinner. Do I love you any less because of your criticism. No. It was the reason I married you. And the reason why I need you today, or at least need to imagine you criticizing me today because you still care about me even after I let you down for 30 years. I will say a prayer tonight not to let you down anymore. I want to be your hero. You once said "I only hope I can make you as happy as I am today or even more". You did, now its my turn to make you happy again.</ThemedText>
<ThemedText>
11) So "where do I stand in relation to you"? I stand on my knees, praying to you, praying for you, and hoping you pray for me and our kids that I can correct all the mistakes I've made and be the father I have the potential of being. I've lost the chance to be a better husband to you; can I be a better widower? God, help me to be better than I am. I love you, show me how to love you with my body and not just my mind. Take this broken heart and make it stronger and fearless like my Ellen's.</ThemedText>
<ThemedText>
Your Christopher
💕💕💕💕
</ThemedText>
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
    height: 600,
    width: 300,
    top: 0,
    left: 50,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});
