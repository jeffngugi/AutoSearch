import {StyleSheet, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const App = () => {
  const [searchText, setSearchText] = useState<string>('');
  // if(searchText)
  function validURL(str: string) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    );
    return !!pattern.test(str);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.txtInput}
        onChangeText={text => setSearchText(text)}
      />
      {validURL(searchText) ? (
        <WebView source={{uri: searchText}} containerStyle={styles.webView} />
      ) : null}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: 'gray',
  },
  webView: {
    flex: 1,
  },
});
