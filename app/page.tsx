import CallNotification from "@/components/CallNotification";
import ListOnlineUsers from "@/components/ListOnlineUsers";
import VideoCall from "@/components/VideoCall";

export default function Home() {
  return (
    <>
      <ListOnlineUsers />
      <CallNotification />
      <VideoCall />
    </>
  );
}
