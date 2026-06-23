import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Top bar
  topBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  brandIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  brandText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  navItem: {
    color: colors.textPrimary,
    fontSize: 13,
    marginRight: 18,
  },
  topBarSpacer: {
    flex: 1,
  },
  depositButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 14,
    height: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  depositButtonText: {
    color: '#202630',
    fontSize: 13,
    fontWeight: '700',
  },
  iconCluster: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconClusterItem: {
    color: colors.textSecondary,
    fontSize: 15,
    marginLeft: 12,
  },

  // Body (sidebar + content)
  body: {
    flex: 1,
    flexDirection: 'row',
  },

  // Sidebar
  sidebar: {
    width: 168,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    paddingVertical: 12,
  },
  sidebarItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sidebarItemText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  sidebarSubItem: {
    paddingVertical: 9,
    paddingHorizontal: 28,
  },
  sidebarSubItemActive: {
    backgroundColor: colors.surfaceAlt,
    borderLeftWidth: 2,
    borderLeftColor: colors.primary,
  },
  sidebarSubItemText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  sidebarSubItemTextActive: {
    color: colors.textPrimary,
    fontWeight: '600',
  },

  // Main content
  content: {
    flex: 1,
  },
  contentInner: {
    padding: 20,
  },

  equityHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  equityLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  equityLabel: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  eyeIcon: {
    width: 14,
    height: 14,
    marginLeft: 6,
    opacity: 0.6,
  },
  changeModeButton: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeModeText: {
    color: colors.textPrimary,
    fontSize: 12,
  },
  equityValue: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  equitySubRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  equitySubText: {
    color: colors.textSecondary,
    fontSize: 12,
    marginRight: 14,
  },

  marginCard: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  marginCardLeft: {
    flex: 1,
  },
  uniMmrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  uniMmrLabel: {
    color: colors.textPrimary,
    fontSize: 13,
    marginRight: 8,
  },
  uniMmrValue: {
    color: colors.positive,
    fontSize: 16,
    fontWeight: '700',
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  metaText: {
    color: colors.textSecondary,
    fontSize: 12,
    marginRight: 18,
    marginBottom: 4,
  },
  metaLink: {
    color: colors.primary,
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: 'row',
  },
  metricBlock: {
    marginRight: 40,
  },
  metricLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    textDecorationLine: 'underline',
    marginBottom: 6,
  },
  metricValue: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '600',
  },
  metricValueNegative: {
    color: colors.negative,
  },
  metricSubValue: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  metricSubValueNegative: {
    color: colors.negative,
  },
  repayLink: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },

  marginCardRight: {
    width: 160,
    alignItems: 'center',
  },
  allocationTitle: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
  },

  tabsRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 16,
  },
  tabItem: {
    marginRight: 24,
    paddingBottom: 10,
  },
  tabText: {
    color: colors.textSecondary,
    fontSize: 13,
  },
  tabTextActive: {
    color: colors.textPrimary,
    fontWeight: '700',
  },
  tabUnderline: {
    height: 2,
    backgroundColor: colors.primary,
    marginTop: 8,
    borderRadius: 1,
  },

  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  searchInput: {
    flex: 1,
    maxWidth: 240,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    paddingHorizontal: 12,
    fontSize: 13,
    marginRight: 16,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 14,
    height: 14,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.textSecondary,
    marginRight: 6,
  },
  checkboxLabel: {
    color: colors.textSecondary,
    fontSize: 12,
  },

  table: {
    minWidth: 640,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    alignItems: 'center',
  },
  tableCellCoin: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableCell: {
    width: 130,
  },
  tableCellAction: {
    width: 220,
    flexDirection: 'row',
  },
  tableHeaderText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  coinIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  coinSymbol: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '600',
    marginRight: 6,
  },
  leverageTag: {
    color: colors.primary,
    fontSize: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  tableCellValue: {
    color: colors.textPrimary,
    fontSize: 13,
  },
  actionLink: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
    marginRight: 16,
  },
});
