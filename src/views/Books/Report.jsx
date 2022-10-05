import React from 'react'
import { Document, Page, Text, View , StyleSheet} from '@react-pdf/renderer';

import { PDFViewer } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
  page: {
    width:"100%",
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 2
  }
});
const Report =()=>{
    return(
    <>
    <PDFViewer
    style={{width:"99%",height:"85vh"}}
    >
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #5</Text>
      </View>
    </Page>
  </Document>
    </PDFViewer>

    </>
    )
}
export default Report