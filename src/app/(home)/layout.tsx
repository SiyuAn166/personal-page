import MainNavBar from "@/components/main-navbar/main-navbar";
import classNames from "classnames";

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div className={classNames(

        )}>
            <MainNavBar/>
            {children}
        </div>
    )
}