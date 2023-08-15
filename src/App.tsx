import { styled } from "styled-components";

import "./App.css";
import "./index.css";
import Card from "./components/card";

export interface ICards {
  status: 'beginner' | "marketer" | "professional",
  title: string,
  subTitle: string,
  img: string,
  tags: string[]
}

function App() {
  const cards: ICards[] = [
    {
      status: "beginner",
      title: "Launch your first website",
      subTitle: "For Beginner",
      img: "https://avada.com/wp-content/uploads/2021/06/for-beginners@2x-200x231.jpg",
      tags: [
        "visual", "document", "support", "prebuild website"
      ]
    },
    {
      status: "marketer",
      title: "Launch your first website",
      subTitle: "For Beginner",
      img: "https://avada.com/wp-content/uploads/2021/06/for-beginners@2x-200x231.jpg",
      tags: [
        "visual", "document", "support", "prebuild website"
      ]
    },
    {
      status: "professional",
      title: "Launch your first website",
      subTitle: "For Beginner",
      img: "https://avada.com/wp-content/uploads/2021/06/for-beginners@2x-200x231.jpg",
      tags: [
        "visual", "document", "support", "prebuild website"
      ]
    },
  ];
  return (
    <AppWrapper>
      {
        cards.map((card) => <Card {...card}/>)
      }
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  margin:0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

`