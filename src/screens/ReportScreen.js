import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

const ReportScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [reports, setReports] = useState([
    {
      id: '1',
      location: 'Location A',
      media: 'https://example.com/media1.jpg',
      description: 'This is the description for Report 1.',
      status: 'Pending',
    },
    {
      id: '2',
      location: 'Location B',
      media: 'https://example.com/media2.jpg',
      description: 'This is the description for Report 2.',
      status: 'Completed',
    },
    {
      id: '3',
      location: 'Location C',
      media: 'https://example.com/media3.jpg',
      description: 'This is the description for Report 3.',
      status: 'Pending',
    },
    {
      id: '4',
      location: 'Location D',
      media: 'https://example.com/media4.jpg',
      description: 'This is the description for Report 4.',
      status: 'Completed',
    },
    {
      id: '5',
      location: 'Location E',
      media: 'https://example.com/media5.jpg',
      description: 'This is the description for Report 5.',
      status: 'Pending',
    },
  ]);

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const filterReports = (report) => {
    return report.location.toLowerCase().includes(searchText.toLowerCase());
  };

  const renderItem = ({ item }) => (
    <View style={styles.reportItem}>
      <Image source={{ uri: item.media }} style={styles.mediaImage} />
      <View style={styles.reportDetails}>
        <Text style={styles.locationText}>{item.location}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.statusButton}>
        <Text style={styles.buttonText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <HeaderComponent  navigation={navigation}/>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearchTextChange}
      />

      <FlatList
        data={reports.filter(filterReports)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  reportItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  mediaImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  reportDetails: {
    flex: 1,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
  },
  statusButton: {
    backgroundColor: 'blue',
    
  }}
)

export default ReportScreen
