import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 56,
  },
  header: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  search: {
    height: 40,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  tabText: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: '600',
    marginRight: 20,
    paddingBottom: 6,
  },
  tabTextActive: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  columnHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  columnHeaderText: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  emptyText: {
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 32,
  },
  loadingIndicator: {
    marginTop: 32,
  },
});
