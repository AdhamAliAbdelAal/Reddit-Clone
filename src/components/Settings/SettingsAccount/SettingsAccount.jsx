/* eslint-disable react/function-component-definition */
import { Box } from '@mui/system';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useEffect, useState } from 'react';
import SettingsProvider from '../../../contexts/SettingsProvider';
import {
  Header, Button, ContentHeader, Content, ContentSubHeader,
  SettingsPageConranier, SubHeader, AntSwitch,
} from '../styles';
import AccountPreferences from './AccountPreferences/AccountPreferences';
import { DeleteAccount } from './styles';
import { settingsFetch } from '../settingsServer';
/**
 * - SettingsAccount
 * - Change Email and password in settings page
 *  @component
 *  @property {function} setPrefs set prefs of user
 *  @property {Object} prefs prefs of user
 *  @property {Object} data data from fetch
 */
const SettingsAccount = () => {
  const [prefs, setPrefs] = useState();
  const [data] = settingsFetch();
  useEffect(() => {
    setPrefs(data?.prefs);
  }, [data]);
  return (
    data === null ? (<div data-testid="settings-account"> error in fecting</div>)
      : (
        <SettingsPageConranier data-testid="settings-account">
          <Box sx={{ maxWidth: '688px', flex: '1 1 auto' }}>
            <Header>Account settings</Header>

            <SettingsProvider prefs={prefs} setPrefs={setPrefs}>
              <AccountPreferences />
            </SettingsProvider>

            <SubHeader>  CONNECTED ACCOUNTS  </SubHeader>
            <Button>
              <Content>
                <ContentHeader>
                  Connected to Google
                </ContentHeader>
                <ContentSubHeader>
                  Connect account to log in to Reddit with Google
                </ContentSubHeader>
              </Content>
              <AntSwitch sx={{ color: '#0079D3' }}>
                <Box sx={{ width: 'fit-content', cursor: 'pointer' }}> (disconnect)</Box>
              </AntSwitch>
            </Button>
            <SubHeader> DELETE ACCOUNT  </SubHeader>
            <DeleteAccount>
              <DeleteOutlineOutlinedIcon />
              <Box sx={{ fontSize: '12px' }}>
                {' '}
                <Box sx={{ width: 'fit-content', cursor: 'pointer' }}> DELETE ACCOUNT</Box>
              </Box>
            </DeleteAccount>
          </Box>
        </SettingsPageConranier>
      )
  );
};
export default SettingsAccount;
