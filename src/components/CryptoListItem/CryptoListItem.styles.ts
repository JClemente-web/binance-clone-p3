import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  left: {
    flex: 1.2,
  },
  symbol: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '600',
  },
  name: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  chart: {
    width: 60,
    height: 30,
    marginHorizontal: 8,
    borderRadius: 4,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  price: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '600',
  },
  change: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
  },
  changePositive: {
    color: colors.positive,
  },
  changeNegative: {
    color: colors.negative,
  },
});
