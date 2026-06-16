import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './CryptoListItem.styles';

export type CryptoListItemProps = {
  symbol: string;
  name: string;
  price: string;
  changePercent: number; // ex: 2.35 ou -1.2
  chartImageUri?: string; // mini-gráfico estático (placeholder até termos um gerado)
};

// TODO: trocar pelo print real recortado do mini-gráfico do Binance,
// ou gerar um sparkline próprio. Por enquanto é só um placeholder visual.
const DEFAULT_CHART_URI =
  'https://placehold.co/60x30/181A20/848E9C?text=%E2%80%94';

export default function CryptoListItem({
  symbol,
  name,
  price,
  changePercent,
  chartImageUri,
}: CryptoListItemProps) {
  const isPositive = changePercent >= 0;

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <Image
        source={{ uri: chartImageUri ?? DEFAULT_CHART_URI }}
        style={styles.chart}
      />

      <View style={styles.right}>
        <Text style={styles.price}>{price}</Text>
        <Text
          style={[
            styles.change,
            isPositive ? styles.changePositive : styles.changeNegative,
          ]}
        >
          {isPositive ? '+' : ''}
          {changePercent.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}
