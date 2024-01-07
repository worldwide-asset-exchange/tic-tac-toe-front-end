import { HomePageLayout } from './HomePage.styled';
import { GameItem } from './components/GameItem';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import TicTacToeLogo from 'assets/logo_tictactoe.svg';
import { CustomButton } from 'components/Button';
import { selectWcwData } from 'components/Navigation/slice/selectors';
import { translations } from 'locales/translations';

export const HomePage = (): JSX.Element => {
    const { t } = useTranslation();
    const wcwData = useSelector(selectWcwData);

    if (wcwData?.account) {
        return (
            <>
                <HomePageLayout className="gamelist">
                    <div className="homepage-gamelist">
                        <div className="homepage-gamelist-div-1">
                            <div className="homepage-gamelist-div-2">
                                {t(translations.home['game list'])}
                            </div>
                            <div>
                                <CustomButton>{t(translations.home['new game'])}</CustomButton>
                            </div>
                        </div>
                        <div className="homepage-gamelist-div-3">
                            <GameItem />
                        </div>
                    </div>
                </HomePageLayout>
            </>
        );
    }

    return (
        <>
            <HomePageLayout>
                <div className="homepage-container">
                    <img src={TicTacToeLogo} alt="logo" className="homepage-img-1" />
                    <div className="homepage-div-1">
                        <CustomButton>{t(translations.home['play game'])}</CustomButton>
                    </div>
                </div>
            </HomePageLayout>
        </>
    );
};
