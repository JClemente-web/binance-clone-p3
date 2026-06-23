import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.loginBackground,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.loginCardBorder,
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  logoIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.loginTextPrimary,
  },
  qrButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: colors.loginInputBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrIconGlyph: {
    fontSize: 16,
  },
  fieldLabel: {
    fontSize: 13,
    color: colors.loginTextPrimary,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.loginInputBorder,
    backgroundColor: colors.loginInputBackground,
    color: colors.loginTextPrimary,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 20,
  },
  nextButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    color: colors.loginButtonText,
    fontSize: 15,
    fontWeight: '700',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.loginCardBorder,
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 13,
    color: colors.loginTextSecondary,
  },
  socialButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.loginInputBorder,
    backgroundColor: colors.loginInputBackground,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  socialIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  socialIconTelegram: {
    fontSize: 16,
    marginRight: 10,
    color: '#2AABEE',
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.loginTextPrimary,
  },
  createAccountLink: {
    marginTop: 16,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.primary,
  },
});
