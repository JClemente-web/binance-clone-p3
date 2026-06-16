import React from 'react';
import { FlatList, Text, View } from 'react-native';
import CryptoListItem from '../../components/CryptoListItem/CryptoListItem';
import { styles } from './MarketDashboardScreen.styles';

type Coin = {
  symbol: string;
  name: string;
  price: string;
  changePercent: number;
};

// TODO: substituir por dados reais (API pública de cotações).
// Por enquanto é só mock para montar o layout da tela.
const MOCK_COINS: Coin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$67,245.10', changePercent: 1.84 },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,512.40', changePercent: -0.92 },
  { symbol: 'BNB', name: 'BNB', price: '$612.75', changePercent: 0.37 },
  { symbol: 'SOL', name: 'Solana', price: '$178.22', changePercent: -2.15 },
  { symbol: 'XRP', name: 'XRP', price: '$2.41', changePercent: 4.02 },
];

export default function MarketDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mercados</Text>
      <FlatList
        data={MOCK_COINS}
        keyExtractor={(item) => item.symbol}
        renderItem={({ item }) => (
          <CryptoListItem
            symbol={item.symbol}
            name={item.name}
            price={item.price}
            changePercent={item.changePercent}
          />
        )}
      />
    </View>
  );
}
