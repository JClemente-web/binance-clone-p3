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
});
