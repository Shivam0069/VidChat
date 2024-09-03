import CallNotification from "@/components/CallNotification";
import ListOnlineUsers from "@/components/ListOnlineUsers";

export default function Home() {
  return (
    <>
      <ListOnlineUsers />
      <CallNotification />
    </>
  );
}
