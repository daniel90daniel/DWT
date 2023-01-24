import React from 'react'
import { useGetNewstoriesQuery, useGetItemQuery} from '../api/api';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

const RenderRow = ({ content, index }) => {
    const {
        data: post,
        isLoading,
        isSuccess,
        isError,
        error,
        } = useGetItemQuery(content)
        let row;
        if (isLoading) {
            row = null;
          } else if (isSuccess) {
            let domain;
            if(post.url){
                domain = (new URL(post.url));
                domain = domain.hostname.replace('www.','');
            }
            row = (
                <View style={{ margin: 5, flexDirection:"row", marginTop: 7}}>
                    <View style={{ marginLeft: 5, flexDirection:"row"}}>
                        <Text style={{ fontSize: 14 }}>{index+1}. </Text>
                        <Text style={{ fontSize: 12 }}>▲</Text>
                    </View>
                    <View style={{ marginLeft:3,flexDirection:"column"}}>
                        <TouchableOpacity onPress={()=> window.open(post.url, '_blank')}>
                            <Text style={{ fontSize: 14, fontWeight:"500" }}>{post.title} <Text style={{ fontSize: 10 }}> ({domain})</Text></Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 10, marginTop: 3 }}>{post.score} point by {post.by}</Text>
                    </View>
                </View>
              )
          } else if (isError) {
            row = (
                <View>
                    {error}
                </View>
            )
          }
          return row;
}
function ListItem() {
  const {
    data: items,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNewstoriesQuery()
  let list;
  if (isLoading) {
    list = (
        <View>
          <Text>Loading...</Text>
        </View>
    )
  } else if (isSuccess) {
    return (
        <FlatList
            data={items}
            renderItem={({item, index}) => <RenderRow content={item} index={index} />}
            keyExtractor={item => item}
        />
    )
  } else if (isError) {
    list = (
        <View>
            {error}
        </View>
    )
  }
  return list
}
export default ListItem