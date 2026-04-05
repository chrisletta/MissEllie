import { Stack } from "expo-router";
import { AuthProvider } from "./auth-context";

export default function ProtectedLayout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}