import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Participant, Room, Track } from 'livekit-client';
import { useRoom, VideoView, registerGlobals, AudioSession } from '@livekit/react-native';

const url = "wss://interaction-test.livekit.cloud"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI1MTcwMDQsImlzcyI6IkFQSURuTmdVcUI0c1Q4OSIsIm5iZiI6MTY4MjUxNjEwNCwic3ViIjoidG9ueSIsInZpZGVvIjp7ImNhblB1Ymxpc2giOnRydWUsImNhblB1Ymxpc2hEYXRhIjp0cnVlLCJjYW5TdWJzY3JpYmUiOnRydWUsInJvb20iOiJ0ZXN0Iiwicm9vbUpvaW4iOnRydWV9fQ.71v51iGUT7aKVs7MfoxTuPpJB9lcU6ukFQVWVmaFi6w"

registerGlobals()

export default function App() {
  const [room] = useState(() => new Room());

  // Get the participants from the room
  const { participants } = useRoom(room);

  useEffect(() => {

    AudioSession.startAudioSession();
    room.connect(url, token, {})
    if (participants.length > 0) {

    }



    return () => {
      room.disconnect();
      AudioSession.stopAudioSession();
    };

  }, [url, token, room]);



  return (
    <View style={styles.container}>
      <Text>On react native expo</Text>
      {participants.length > 0 && <VideoView
        style={{ height: 200, width: 200 }}
        videoTrack={participants[0].getTrack(Track.Source.Camera)?.videoTrack}
      />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
