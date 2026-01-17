import FamilyTree from "@/components/TreeView";
import { ThemedText } from '@/components/themed-text';
import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, View } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';
import { router } from "expo-router";

type FamilyNode = {
  id: string;
  name: string;
  gender?: "male" | "female" | "other";
  birthYear?: number;
  deathYear?: number;
  relation?: "root" | "parent" | "child" | "spouse" | "sibling";
  children?: FamilyNode[];
  spouses?: FamilyNode[];
  link: string;
};


const data: FamilyNode[] = [
 {
    id: "01",
    name: "Maria",
    gender: "female",
    birthYear: 1900,
    deathYear: 1994,
    relation: "root",
    spouses: [{id: "02", name: "Joseph", gender: "male", birthYear: 1900, deathYear: 1979, relation: "spouse"}],
    children: [
      { id: "01-1", name: "Salvatore", gender: "male", birthYear: 1932, deathYear: 2018, relation: "child" },
      { id: "01-2", name: "RoseMarie", gender: "female", birthYear: 1935, deathYear: 2015, relation: "child" ,
	spouses: [{id: "01-2S", name: "Tom", gender: "male", birthYear: 1937, deathYear: 1993, relation: "spouse"}],
 children: [
      { id: "01-2C", name: "Matthew", gender: "male", birthYear: 1975, relation: "child" }    ]

}
    ]
  },
 {
    id: "03",
    name: "Frances",
    gender: "female",
    birthYear: 1900,
    deathYear: 1976,
    relation: "root",
    spouses: [{id: "04", name: "Roman", gender: "male", birthYear: 1900, deathYear: 1968, relation: "spouse"}],
    children: [
      { id: "03-1", name: "Leonard", gender: "male", birthYear: 1922, deathYear: 2005, relation: "child",
	spouses: [{id: "03-1S", name: "Steffie", gender: "female", birthYear: 1922, deathYear: 2005, relation: "spouse"}],
 	children: [
      { id: "03-1C1", name: "John", gender: "male", birthYear: 1955, relation: "child" },
      { id: "03-1C2", name: "Bernadette", gender: "female", birthYear: 1955, relation: "child" ,
    spouses: [{id: "03-1C2S", name: "Rob", gender: "male", birthYear: 1955, relation: "spouse"}],
    children: [
      { id: "03-1C2-1", name: "Robbie", gender: "male", birthYear: 1990, relation: "child"} ,
      { id: "03-1C2-2", name: "Erica", gender: "female", birthYear: 1992, relation: "child" },
    ]
  },
   ]},
      { id: "03-2", name: "Bud", gender: "male", birthYear: 1924, deathYear: 2015, relation: "child" ,
	spouses: [{id: "03-2S", name: "Gene", gender: "female", birthYear: 1922,  relation: "spouse"}],
 	children: [
      { id: "03-2C1", name: "Arlene", gender: "female", birthYear: 1958, relation: "child"  ,
    spouses: [{id: "03-2C1S", name: "Carl", gender: "male", birthYear: 1955, relation: "spouse"}],
    children: [
      { id: "03-2C1-1", name: "Lia", gender: "asianfemale", birthYear: 1999, relation: "child"} ,
      { id: "03-2C1-2", name: "Sam", gender: "asianmale", birthYear: 2001, relation: "child" },
    ]
  },
      { id: "03-2C2", name: "Thomas", gender: "male", birthYear: 1960, relation: "child" },
      { id: "03-2C3", name: "Jean Marie", gender: "female", birthYear: 1966, relation: "child" },
   ]},

      { id: "03-3", name: "Roman", gender: "male", birthYear: 1926, deathYear: 2004, relation: "child" ,
	spouses: [{id: "03-3S", name: "Lorraine", gender: "female", birthYear: 1922,  relation: "spouse"}],
 	children: [
      { id: "03-3C1", name: "Mary", gender: "female", birthYear: 1958, relation: "child"  ,
    spouses: [{id: "03-3C1S", name: "Wally", gender: "male", birthYear: 1955, relation: "spouse"}],
    children: [
      { id: "03-3C1-1", name: "Catherine", gender: "female", birthYear: 1990, relation: "child"} ,
      { id: "03-3C1-2", name: "Maria", gender: "female", birthYear: 1992, relation: "child" },
    ]
  },

      { id: "03-3C2", name: "Lorraine", gender: "female", birthYear: 1960, relation: "child" },
   ]},
      { id: "03-4", name: "Daniel", gender: "male", birthYear: 1935,  relation: "child" ,
	spouses: [{id: "03-4S", name: "Irene", gender: "female", birthYear: 1937,  relation: "spouse"}],
 	children: [
      { id: "03-4C1", name: "Marlyn", gender: "female", birthYear: 1966, relation: "child" },
      { id: "03-4C2", name: "Maureen", gender: "female", birthYear: 1968, relation: "child" },
      { id: "03-4C3", name: "Mark", gender: "male", birthYear: 1969, relation: "child" },
      { id: "03-4C4", name: "Karen", gender: "female", birthYear: 1972, relation: "child" },
   ]},
      { id: "03-5", name: "Frances", gender: "female", birthYear: 1937,  relation: "child", 
	spouses: [{id: "03-5S", name: "Salvatore", gender: "male", birthYear: 1932, deathYear: 2018, relation: "spouse"}],
	children:[ {
    id: "3",
    name: "Mary Frances",
    gender: "female",
    birthYear: 1964,
    relation: "sibling",
    spouses: [{id: "3S", name: "Josh", gender: "male", birthYear: 1969, relation: "spouse"}],
    children: [
      { id: "3-1", name: "Adam", gender: "male", birthYear: 1998, relation: "child" ,
spouses: [{id: "3-1S", name: "Vero", gender: "female", birthYear: 1998, relation: "spouse"}]},
      { id: "3-2", name: "Maria", gender: "female", birthYear: 1999, relation: "child" },
      { id: "3-3", name: "Nadia", gender: "female", birthYear: 2001, relation: "child" }
    ]
  },
	{
    id: "1",
    name: "Ellen",
    gender: "female",
    birthYear: 1966,
    deathYear: 2024,
    relation: "root",
    spouses: [{id: "2", name: "Chris", gender: "male", birthYear: 1965, relation: "spouse"}],
    children: [
      { id: "1-1", name: "Ben", gender: "male", birthYear: 2001, relation: "child" },
      { id: "1-2", name: "Sofia", gender: "asianfemale", birthYear: 2005, relation: "child" }
    ]
  }]
},
    ]
  }

];


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerHeight={360}
      headerImage={
       <Image
          source={require('@/assets/images/1971Dec_Family.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Family
        </ThemedText>
 	</ThemedView>
      <ThemedText>Relations beggining with Grandmothers</ThemedText>
	
      <FamilyTree data={data}/>  
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Sisters"
        onPress={() => router.push("sisters")}
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
    height: 360,
    width: 280,
    top: 0,
    left: 60,
    marginTop: 0,
    marginBottom: 0,
    position: 'absolute',
  },
});