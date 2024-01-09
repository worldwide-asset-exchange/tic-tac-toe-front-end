import { GameItemLayout } from './GameItem.styled';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CustomButton, PrimaryButton } from 'components/Button';
import { selectWcwData } from 'components/Navigation/slice/selectors';
import { _URL } from 'config/constant';
import { translations } from 'locales/translations';
import { iGameList } from 'utils/types/game';

type GameItemProps = {
    data: iGameList;
};

export const GameItem = ({ data }: GameItemProps) => {
    const { t } = useTranslation();
    const wcwData = useSelector(selectWcwData);

    const renderActionButton = () => {
        if ([data.host, data.challenger].includes(wcwData?.account)) {
            return (
                <Link to={`${_URL.Game}/${data.id}`}>
                    <PrimaryButton>{t(translations.gameList['play now'])}</PrimaryButton>
                </Link>
            );
        } else {
            return (
                <Link to={`${_URL.Game}/${data.id}`}>
                    <CustomButton>{t(translations.gameList.view)}</CustomButton>
                </Link>
            );
        }
    };

    return (
        <GameItemLayout>
            <div className="game-item-div-1">
                <div className="game-item-div-2">
                    {t(translations.gameList.id)}:{' '}
                    <span className="game-item-div-3">{data.id}</span>
                </div>
                <div className="game-item-div-2">
                    {t(translations.gameList.host)}:{' '}
                    <span className="game-item-div-3">{data.host}</span>
                </div>
                <div className="game-item-div-2">
                    {t(translations.gameList.challenger)}:{' '}
                    <span className="game-item-div-3">{data.challenger}</span>
                </div>
                <div className="game-item-div-2">
                    {t(translations.gameList.end)}:{' '}
                    <span className="game-item-div-3">{data.winner !== 'none' ? 'Yes' : 'No'}</span>
                </div>
                <div className="game-item-div-2">
                    {t(translations.gameList.turn)}:{' '}
                    <span className="game-item-div-3">{data.turn}</span>
                </div>
            </div>
            {renderActionButton()}
        </GameItemLayout>
    );
};
