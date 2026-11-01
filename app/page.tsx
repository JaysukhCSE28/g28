import Meteors from "@/components/Meteor";
import WelcomeBox from "@/components/WelcomeBox";
import SubjectBox from "@/components/SubjectBox";
import ChannelBox from "@/components/ChannelBox";

export default async function Home() {
  const { stargazers_count: stars = 0 } = await fetch(
    "https://api.github.com/repos/jaysukhsesham/g28",
    { next: { revalidate: 3600 } }
  )
    .then((res) => (res.ok ? res.json() : { stargazers_count: 0 }))
    .catch(() => ({ stargazers_count: 0 }));

  return (
    <div className="container flex flex-col items-center justify-center gap-12 mt-6 md:mt-10 w-full">
      <WelcomeBox />
      <SubjectBox />
      <ChannelBox />
      <Meteors stars={stars} />
    </div>
  );
}
