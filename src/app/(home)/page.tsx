import classNames from "classnames";
import HomePage from "@/components/homepage/homepage";
import HomePageChatStyle from "@/components/homepage/homepage-chatstyle";
export default function Home() {
  return (
    <main className={classNames(
      "flex flex-col items-center justify-start",
    )}>
      
      
      {/* <HomePage/> */}
      <HomePageChatStyle/>

    </main>
  );
}
