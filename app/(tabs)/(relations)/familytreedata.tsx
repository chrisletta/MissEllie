type TreeNode = {
  id: string;
  title: string;
  children?: TreeNode[];
};


const data: TreeNode[] = [
  {
    id: "1",
    title: "Family",
    children: [
      { id: "1-1", title: "Parents" },
      { id: "1-2", title: "Siblings" }
    ]
  }
];