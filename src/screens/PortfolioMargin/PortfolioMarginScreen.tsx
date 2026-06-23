import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AssetAllocationChart from '../../components/AssetAllocationChart/AssetAllocationChart';
import { colors } from '../../theme/colors';
import { styles } from './PortfolioMarginScreen.styles';

const NAV_ITEMS = ['Markets', 'Trade', 'Futures', 'Earn', 'Square', 'More'];

const ASSET_SUB_ITEMS = [
  { label: 'Overview', active: false },
  { label: 'Spot', active: false },
  { label: 'Isolated Margin', active: false },
  { label: 'Portfolio Margin', active: true },
  { label: 'Third-Party Wallet', active: false },
];

const SIDEBAR_ITEMS = [
  'Orders',
  'Rewards Hub',
  'Referral',
  'Account',
  'Sub Accounts',
  'Settings',
];

const TABS = ['Total', 'Cross Margin', 'USDS-M', 'COIN-M'];

const EYE_ICON_URI = 'https://placehold.co/14x14/848E9C/848E9C.png';
const USDT_ICON_URI = 'https://placehold.co/24x24/26A17B/FFFFFF.png?text=T';

export default function PortfolioMarginScreen() {
  const [activeTab, setActiveTab] = useState('Total');
  const [search, setSearch] = useState('');

  return (
    <View style={styles.screen}>
      <View style={styles.topBar}>
        <View style={styles.brandRow}>
          <Image source={{ uri: EYE_ICON_URI }} style={styles.brandIcon} />
          <Text style={styles.brandText}>BINANCE</Text>
        </View>
        {NAV_ITEMS.map((item) => (
          <Text key={item} style={styles.navItem}>
            {item}
          </Text>
        ))}
        <View style={styles.topBarSpacer} />
        <TouchableOpacity style={styles.depositButton}>
          <Text style={styles.depositButtonText}>Deposit</Text>
        </TouchableOpacity>
        <View style={styles.iconCluster}>
          <Text style={styles.iconClusterItem}>◔</Text>
          <Text style={styles.iconClusterItem}>▤</Text>
          <Text style={styles.iconClusterItem}>♦</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.sidebar}>
          <View style={styles.sidebarItem}>
            <Text style={styles.sidebarItemText}>Dashboard</Text>
          </View>
          <View style={styles.sidebarItem}>
            <Text style={styles.sidebarItemText}>Assets</Text>
          </View>
          {ASSET_SUB_ITEMS.map((item) => (
            <View
              key={item.label}
              style={[
                styles.sidebarSubItem,
                item.active && styles.sidebarSubItemActive,
              ]}
            >
              <Text
                style={[
                  styles.sidebarSubItemText,
                  item.active && styles.sidebarSubItemTextActive,
                ]}
              >
                {item.label}
              </Text>
            </View>
          ))}
          {SIDEBAR_ITEMS.map((item) => (
            <View key={item} style={styles.sidebarItem}>
              <Text style={styles.sidebarItemText}>{item}</Text>
            </View>
          ))}
        </View>

        <ScrollView style={styles.content} contentContainerStyle={styles.contentInner}>
          <View style={styles.equityHeaderRow}>
            <View style={styles.equityLabelRow}>
              <Text style={styles.equityLabel}>Equity</Text>
              <Image source={{ uri: EYE_ICON_URI }} style={styles.eyeIcon} />
            </View>
            <TouchableOpacity style={styles.changeModeButton}>
              <Text style={styles.changeModeText}>Change Mode</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.equityValue}>2,241.6992 USD</Text>
          <View style={styles.equitySubRow}>
            <Text style={styles.equitySubText}>≈ $2,241.70</Text>
            <Text style={styles.equitySubText}>Today's Realized PnL</Text>
            <Text style={styles.equitySubText}>$0.00 (+0.00%)</Text>
          </View>

          <View style={styles.marginCard}>
            <View style={styles.marginCardLeft}>
              <View style={styles.uniMmrRow}>
                <Text style={styles.uniMmrLabel}>UniMMR</Text>
                <Text style={styles.uniMmrValue}>187.74</Text>
              </View>
              <View style={styles.metaRow}>
                <Text style={styles.metaText}>Liquidation Alert: 1.5</Text>
                <Text style={styles.metaText}>Auto Top-up: None</Text>
                <Text style={styles.metaLink}>BNB Settings</Text>
              </View>

              <View style={styles.metricsRow}>
                <View style={styles.metricBlock}>
                  <Text style={styles.metricLabel}>Available Margin (USD)</Text>
                  <Text style={styles.metricValue}>628.0447</Text>
                  <Text style={styles.metricSubValue}>≈ $628.04</Text>
                </View>
                <View style={styles.metricBlock}>
                  <Text style={styles.metricLabel}>Total Debt (USD)</Text>
                  <Text style={styles.metricValue}>0.0000</Text>
                  <Text style={styles.metricSubValue}>≈ $0.00</Text>
                  <Text style={styles.repayLink}>Repay</Text>
                </View>
                <View style={styles.metricBlock}>
                  <Text style={styles.metricLabel}>Unrealized PNL (USD)</Text>
                  <Text style={[styles.metricValue, styles.metricValueNegative]}>
                    -68.9412
                  </Text>
                  <Text style={[styles.metricSubValue, styles.metricSubValueNegative]}>
                    ≈ -$68.94
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.marginCardRight}>
              <Text style={styles.allocationTitle}>Asset Allocation</Text>
              <AssetAllocationChart
                size={120}
                strokeWidth={20}
                slices={[
                  { color: colors.primary, percent: 62 },
                  { color: '#3375E0', percent: 38 },
                ]}
              />
            </View>
          </View>

          <View style={styles.tabsRow}>
            {TABS.map((tab) => (
              <TouchableOpacity
                key={tab}
                style={styles.tabItem}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>
                  {tab}
                </Text>
                {activeTab === tab ? <View style={styles.tabUnderline} /> : null}
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.filterRow}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={colors.textSecondary}
              value={search}
              onChangeText={setSearch}
            />
            <View style={styles.checkboxRow}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>Only show debts</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.table}>
              <View style={styles.tableHeaderRow}>
                <Text style={[styles.tableHeaderText, styles.tableCellCoin]}>Coin</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Equity</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Wallet Balance</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Unrealized PNL</Text>
                <Text style={[styles.tableHeaderText, styles.tableCell]}>Debts</Text>
                <Text style={[styles.tableHeaderText, styles.tableCellAction]}>Action</Text>
              </View>

              <View style={styles.tableRow}>
                <View style={styles.tableCellCoin}>
                  <Image source={{ uri: USDT_ICON_URI }} style={styles.coinIcon} />
                  <Text style={styles.coinSymbol}>USDT</Text>
                  <Text style={styles.leverageTag}>10x</Text>
                </View>
                <Text style={[styles.tableCellValue, styles.tableCell]}>960.35109028</Text>
                <Text style={[styles.tableCellValue, styles.tableCell]}>960.35109028</Text>
                <Text style={[styles.tableCellValue, styles.tableCell]}>0.00000000</Text>
                <Text style={[styles.tableCellValue, styles.tableCell]}>0.00000000</Text>
                <View style={styles.tableCellAction}>
                  <Text style={styles.actionLink}>Trade</Text>
                  <Text style={styles.actionLink}>Transfer</Text>
                  <Text style={styles.actionLink}>Borrow/Repay</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </View>
  );
}
