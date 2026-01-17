import { useState } from "react";
import { View, Text, Pressable } from "react-native";


type FamilyNode = {
  id: string;
  name: string;
  gender?: "male" | "female" | "other";
  birthYear?: number;
  deathYear?: number;
  relation?: "root" | "parent" | "child" | "spouse" | "sibling";
  children?: FamilyNode[];
  spouses?: FamilyNode[];
  link?: string;
};

function getIcon(node: FamilyNode) {
  if (node.relation === "spouse") return "❤️";
  if (node.gender === "male") return "👨";
  if (node.gender === "female") return "👩";
  if (node.gender === "asianmale") return "👨🏻";
  if (node.gender === "asianfemale") return "👩🏻";
  return "👤";
}

function FamilyNodeView({ node, level = 0 }: { node: FamilyNode; level?: number }) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <View>
      <Pressable onPress={() => hasChildren && setOpen(!open)}>
        <Text style={{ marginLeft: level * 20 }}>
          {hasChildren ? (open ? "▼" : "▶") : "•"} {getIcon(node)} {node.name}
          {node.birthYear && ` (${node.birthYear}–${node.deathYear ?? ""})`}
        </Text>
      </Pressable>

      {/* Spouses */}
      {node.spouses?.map(spouse => (
        <Text key={spouse.id} style={{ marginLeft: level * 20 + 20 }}>
          ❤️ {spouse.name}
        </Text>
      ))}

      {/* Children */}
      {open && hasChildren &&
        node.children?.map(child => (
          <FamilyNodeView key={child.id} node={child} level={level + 1} />
        ))}
    </View>
  );
}


export default function FamilyTree({ data = [] }: { data?: FamilyNode[] }) {
  return (
    <View style={{ padding: 16 }}>
      {data.map(node => (
        <FamilyNodeView key={node.id} node={node} />
      ))}
    </View>
  );
}
