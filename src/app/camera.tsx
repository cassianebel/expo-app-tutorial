import { CameraView, useCameraPermissions } from "expo-camera";
import { recognizeText } from "expo-ocr-kit";
import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>("");

  async function snap() {
    const photo = await cameraRef.current?.takePictureAsync();

    setRecognizedText("");
    if (photo?.uri) {
      setPhotoUri(photo.uri);
    }
  }

  async function readText() {
    if (!photoUri) return;

    const result = await recognizeText(photoUri);
    setRecognizedText(result.text);
  }

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera</Text>
        <Text style={styles.subtitle}>
          Please grant access to use your device's camera.
        </Text>

        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Camera Access</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera</Text>

      {photoUri ? (
        <>
          <Text style={styles.subtitle}>Here's your photo!</Text>

          <Image source={{ uri: photoUri }} style={styles.camera} />

          <Pressable style={styles.button} onPress={() => setPhotoUri(null)}>
            <Text style={styles.buttonText}>Retake Photo</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={readText}>
            <Text style={styles.buttonText}>Recognize Text from Photo</Text>
          </Pressable>
          {recognizedText && (
            <Text style={styles.recognizedText}>{recognizedText}</Text>
          )}
        </>
      ) : (
        <>
          <Text style={styles.subtitle}>
            Ready to capture a photo from your device camera.
          </Text>

          <CameraView style={styles.camera} ref={cameraRef} facing="back" />

          <Pressable style={styles.button} onPress={snap}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
    color: "#111827",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#4b5563",
    marginBottom: 28,
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  camera: {
    width: "100%",
    height: 400,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
  },
  recognizedText: {
    fontSize: 16,
    marginTop: 20,
    color: "#111827",
  },
});
