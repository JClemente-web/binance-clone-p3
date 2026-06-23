import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CryptoListItem from '../../components/CryptoListItem/CryptoListItem';
import { colors } from '../../theme/colors';
import { styles } from './MarketDashboardScreen.styles';

type Coin = {
  symbol: string;
  name: string;
  price: string;
  changePercent: number;
};

// IDs do CoinGecko para as moedas exibidas (API pública, sem chave necessária).
const COIN_IDS = [
  'bitcoin',
  'ethereum',
  'binancecoin',
  'solana',
  'ripple',
  'cardano',
  'dogecoin',
];

const COINGECKO_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(
  ','
)}&order=market_cap_desc&price_change_percentage=24h`;

// Usado enquanto a API não responde, ou se a requisição falhar (sem internet, rate limit etc.).
const FALLBACK_COINS: Coin[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$67,245.10', changePercent: 1.84 },
  { symbol: 'ETH', name: 'Ethereum', price: '$3,512.40', changePercent: -0.92 },
  { symbol: 'BNB', name: 'BNB', price: '$612.75', changePercent: 0.37 },
  { symbol: 'SOL', name: 'Solana', price: '$178.22', changePercent: -2.15 },
  { symbol: 'XRP', name: 'XRP', price: '$2.41', changePercent: 4.02 },
  { symbol: 'ADA', name: 'Cardano', price: '$0.61', changePercent: 0.85 },
  { symbol: 'DOGE', name: 'Dogecoin', price: '$0.18', changePercent: -1.42 },
];

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6,
});

type CoinGeckoEntry = {
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number | null;
};

const TABS = ['Todos', 'Favoritos'] as const;
type Tab = (typeof TABS)[number];

export default function MarketDashboardScreen() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('Todos');
  const [coins, setCoins] = useState<Coin[]>(FALLBACK_COINS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadMarketData() {
      try {
        const response = await fetch(COINGECKO_URL);
        if (!response.ok) throw new Error('Falha na requisição');

        const data: CoinGeckoEntry[] = await response.json();
        if (!isMounted) return;

        const mapped: Coin[] = data.map((entry) => ({
          symbol: entry.symbol.toUpperCase(),
          name: entry.name,
          price: priceFormatter.format(entry.current_price),
          changePercent: entry.price_change_percentage_24h ?? 0,
        }));

        setCoins(mapped);
        setError(false);
      } catch {
        // API pública pode falhar (rate limit, sem internet etc.) — mantém o fallback.
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadMarketData();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredCoins = useMemo(() => {
    return coins.filter((coin) => {
      const matchesQuery =
        coin.symbol.toLowerCase().includes(query.toLowerCase()) ||
        coin.name.toLowerCase().includes(query.toLowerCase());
      // "Favoritos" ainda não tem persistência real — placeholder de filtro.
      const matchesTab = activeTab === 'Todos' ? true : false;
      return matchesQuery && matchesTab;
    });
  }, [coins, query, activeTab]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mercados</Text>

      <TextInput
        style={styles.search}
        placeholder="Buscar moeda"
        placeholderTextColor="#76808F"
        value={query}
        onChangeText={setQuery}
        autoCapitalize="none"
      />

      <View style={styles.tabsRow}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[styles.tabText, activeTab === tab && styles.tabTextActive]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.columnHeaderRow}>
        <Text style={styles.columnHeaderText}>Nome</Text>
        <Text style={styles.columnHeaderText}>Último preço / Var. 24h</Text>
      </View>

      {loading ? (
        <ActivityIndicator color={colors.primary} style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={filteredCoins}
          keyExtractor={(item) => item.symbol}
          renderItem={({ item }) => (
            <CryptoListItem
              symbol={item.symbol}
              name={item.name}
              price={item.price}
              changePercent={item.changePercent}
            />
          )}
          ListHeaderComponent={
            error ? (
              <Text style={styles.emptyText}>
                Não foi possível atualizar as cotações agora — exibindo últimos
                valores conhecidos.
              </Text>
            ) : null
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhuma moeda encontrada.</Text>
          }
        />
      )}
    </View>
  );
}
