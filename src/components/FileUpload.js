 import React, { useState, useCallback} from "react";
 import DocumentPicker, { types } from "react-native-document-picker";
 import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
 import { Button} from '@rneui/themed';

 const FileUpload = () => {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick({
          presentationStyle: 'fullScreen',
          allowMultiSelection: true,
          // type: [types.pdf,
          //        types.doc,
          //        types.docx,
          //        types.images,
          //        types.zip,
          //        types.ppt]
        });
        setFileResponse(response);
      } catch (err) {
        console.warn(err);
      }
    }, []);
  
    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button title="Select Notes to Upload 📑" onPress={handleDocumentSelection} />
      </SafeAreaView>
    );
  };

 const styles = StyleSheet.create({

    container: {
        padding: 40,
        marginTop: 30
    },

    center: {
      textAlign: 'center',
    }

})

 export default FileUpload;