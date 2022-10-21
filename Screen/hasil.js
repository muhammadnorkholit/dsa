import React, {useState, useEffect} from 'react';
import {View, Dimensions, Text} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  VictoryBar,
  VictoryLabel,
  VictoryPie,
  VictoryChart,
  VictoryTheme,
} from 'victory-native';
import Container from '../components/container';
// import Chart from 'react-native-chartjs';
import {getHasil} from '../Controllers/HasilController';
import {getData, saveData} from '../helpers/Storage';
export default function Hasil() {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCREEN_HEIGHT = Dimensions.get('window').height;

  const [Hasil, setHasil] = useState(
    getData('hasil').then(data => {
      return data;
    }),
  );
  const [percent, setpercent] = useState({});
  const nama = [];
  const persen = [];
  useEffect(() => {
    getData('hasil').then(data => setHasil(data));
    getHasil().then(data => {
      setHasil(data.data);
      setpercent(data);
      saveData({key: 'hasil', data: data.data});
    });
  }, []);

  for (let i = 0; i < Hasil.length; i++) {
    nama.push(
      'PASLON ' +
        (i + 1) +
        `
    
        ` +
        Hasil[i].persen +
        '%',
    );
    persen.push(Hasil[i].persen);
  }

  console.log(percent);
  return (
    <Container padding={true}>
      <ScrollView>
        <View style={{justifyContent: 'center'}}>
          <VictoryPie
            scale={{x: 'linear', y: 'log'}}
            theme={VictoryTheme.material}
            colorScale={['#6799E8', '#4B4AF9', '#882AE8']}
            standalone={true}
            width={SCREEN_WIDTH}
            startAngle={90}
            endAngle={450}
            data={persen}
            innerRadius={40}
            labelRadius={80}
            labels={nama}
            style={{
              labels: {
                fontSize: 12,
                width: 50,
                fill: 'white',
                fontWeight: 'bold',
              },
            }}
          />
          <View>
            <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
              {percent.percent + `%`} dari {percent.peserta} pemilih
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text>paslon 1</Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
