import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { ConvexProvider, ConvexReactClient, useQuery, useMutation } from "convex/react";
import { api } from "./convex/_generated/api";
import { Send, User, Sparkles } from 'lucide-react-native';

const convex = new ConvexReactClient("https://gallant-lemur-966.convex.cloud");

function ChatApp() {
  const messages = useQuery(api.messages.list) || [];
  const sendMessage = useMutation(api.messages.send);
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (text.trim() === "") return;
    await sendMessage({ body: text, author: "You" });
    setText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Sparkles size={24} color="#6366f1" />
        <Text style={styles.headerTitle}>Vibe Board</Text>
        <View style={styles.statusBadge}>
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>Live</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item._id}
        inverted
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={[
            styles.messageWrapper,
            item.author === "You" ? styles.myMessage : styles.theirMessage
          ]}>
            <View style={[
              styles.messageBubble,
              item.author === "You" ? styles.myBubble : styles.theirBubble
            ]}>
              <Text style={[
                styles.messageText,
                item.author === "You" ? styles.myText : styles.theirText
              ]}>{item.body}</Text>
            </View>
            <Text style={styles.timestamp}>{item.author}</Text>
          </View>
        )}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            placeholder="Send a vibe..."
            placeholderTextColor="#94a3b8"
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Send size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <ChatApp />
    </ConvexProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e293b',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    flex: 1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#064e3b',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#10b981',
  },
  statusText: {
    color: '#10b981',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  listContent: {
    padding: 20,
  },
  messageWrapper: {
    marginBottom: 16,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  messageBubble: {
    padding: 14,
    borderRadius: 20,
  },
  myBubble: {
    backgroundColor: '#6366f1',
    borderBottomRightRadius: 4,
  },
  theirBubble: {
    backgroundColor: '#334155',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  myText: {
    color: '#fff',
  },
  theirText: {
    color: '#f1f5f9',
  },
  timestamp: {
    fontSize: 10,
    color: '#64748b',
    marginTop: 4,
    marginHorizontal: 4,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: Platform.OS === 'ios' ? 20 : 30,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: '#334155',
    borderRadius: 24,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#fff',
  },
  sendButton: {
    width: 48,
    height: 48,
    backgroundColor: '#6366f1',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
