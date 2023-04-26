# How to install @livekit/react-native on expo dev build

1. install react-native-webrtc first ```npx expo install react-native-webrtc @config-plugins/react-native-webrtc```
2. add config plugin for react-native-webrtc in app.json
```json
{
  "expo": {
    ...
    // add this
    "plugins": ["@config-plugins/react-native-webrtc"]
    ...
  }
}
```
3. setup expo dev client [here](https://docs.expo.dev/develop/development-builds/create-a-build/?redirected) 

4. run ```eas build -p ios --profile development --local``` to create dev build
if you are on android, use -p android. You might need a app (app connect for ios/play store for android) dev account for this, ask Agus or Leon to join an account

5. install the build client to your mobile device (better use real device)

6. Go to https://example.livekit.io/ to start a video conference and let app join the same room. (change the url and token in App.tsx), you should see the video from https://example.livekit.io/ shown inside app. 

7. There are still small issue with generate video from mobile device, but please read https://github.com/livekit/client-sdk-react-native/tree/main/example here to figure out how to do it. I don't see app ask for camera and microphone permission on the app, so I think this should be a config/permission issue. It won't be that hard, try to figure it out by playing with livekit's sample