import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import AddItems from './src/Features/addItems';
import AllList from './src/Features/allList';
export default function App() {

  const [currentItem, setCurrentItem] = useState(null)
  const [allItems, setAllItems] = useState([])

  return (
    <View style={styles.container}>
      {/*{!currentItem ? (<AddItems addItem={setCurrentItem} />) : (<View><Text>hi {currentItem}</Text></View>)}*/}
      {
        !currentItem ? (
          <AddItems addItem={setCurrentItem} />
        ) : (
          <View style={styles.container}>
 
            <AllList
              item={currentItem}
              // item={setAllItems([...allItems,currentItem])}
              showList={(i) => { setAllItems([...allItems, i]) }}
              showAll={[allItems]}
              onback={() => setCurrentItem(null)} />


            
          </View>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },

});
